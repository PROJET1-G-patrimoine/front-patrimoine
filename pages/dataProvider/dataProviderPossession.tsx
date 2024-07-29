import { DataProvider, fetchUtils } from 'ra-core';
import jsonServerProvider from 'ra-data-json-server';
import { stringify } from 'query-string';

const apiUrl = 'https://virtserver.swaggerhub.com/HEIMAMINIAINA444/harena/1.0.0/patrimoines';
const httpClient = (url: string, options: fetchUtils.Options = {}) => {
    options.user = {
        ...options.user,
        authenticated: true,
        token: 'Bearer my_token', 
    };
    return fetchUtils.fetchJson(url, options);
};

let lastId = 0;
const generateUniqueId = () => ++lastId;

const addIdsToData = (data: any[]) => {
    return data.map(item => ({
        ...item,
        id: item.id ?? generateUniqueId(),
    }));
};

export const dataProviderPatrimoine =  {
    ...jsonServerProvider(apiUrl, httpClient),
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${localStorage.getItem('patrimoine')}/${resource}?${stringify(query)}`;

        try {
            const { json } = await httpClient(url);

            const data = Array.isArray(json) ? json : json.data;

            if (!Array.isArray(data)) {
                throw new Error("La réponse n'est pas un tableau");
            }

            const dataWithIds = addIdsToData(data);
            const total = json.total || dataWithIds.length;

            return {
                data: dataWithIds,
                total,
            };
        } catch (error) {
            console.error('getList error:', error);
            throw new Error('Erreur lors de la récupération de la liste des ressources');
        }
    },

    getOne: async (resource, params) => {
        const url = `${apiUrl}/${localStorage.getItem('patrimoine')}/${resource}/${params.id}`;

        try {
            const { json } = await httpClient(url);

            if (typeof json !== 'object' || json === null) {
                throw new Error("La réponse n'est pas un objet");
            }

            const dataWithId = {
                ...json,
                id: json.id ?? generateUniqueId(),
            };

            return {
                data: dataWithId,
            };
        } catch (error) {
            console.error('getOne error:', error);
            throw new Error('Erreur lors de la récupération de la ressource');
        }
    },
    update: async (resource, params) => {
        const url = `${apiUrl}/${localStorage.getItem('patrimoine')}/${resource}/${params.id}`;
    
        try {
            const updatedData = {
                ...params.data,
                id: params.id, 
            };
    
            const { json } = await httpClient(url, {
                method: 'PATCH',
                body: JSON.stringify(updatedData),
            });
    
            if (typeof json !== 'object' || json === null) {
                throw new Error("La réponse n'est pas un objet");
            }
    
            return {
                data: json,
            };
        } catch (error) {
            console.error('update error:', error);
            throw new Error('Erreur lors de la mise à jour de la ressource');
        }
    },
    delete: async (resource, params) => {
        const { id } = params;
        const url = `${apiUrl}/${resource}/${id}`;

        try {
            await httpClient(url, {
                method: 'DELETE',
            });
            return { data: { id } };
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
    
};

export default dataProviderPatrimoine;
