import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
import { v4 as uuid } from 'uuid'; // Correction ici

const apiUrl = 'https://virtserver.swaggerhub.com/HEIMAMINIAINA444/harena/1.0.0/patrimoines';
const httpClient = fetchUtils.fetchJson;

export const dataProviderFlux: DataProvider = {
    getList: async (resource, params) => {
        const { page, perPage } = params.pagination;
        const { field, order } = params.sort;
        const query = {
            sort: JSON.stringify([field, order]),
            range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
            filter: JSON.stringify(params.filter),
        };
        const url = `${apiUrl}/${localStorage.getItem('patrimoine')}/${localStorage.getItem('start')}/${localStorage.getItem('end')}/${resource}?${stringify(query)}`;

        try {
            const response = await httpClient(url);
            if (!response.ok) { 
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            if (!Array.isArray(data)) {
                throw new Error("La réponse n'est pas un tableau");
            }
            return {
                data: data.map(item => ({
                    ...item,
                    id: item.id || uuid(), // Correction ici
                })),
                total: parseInt((response.headers.get('Content-Range') || "0").split('/').pop() || '0', 10), // Correction ici
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    getOne: async (resource, params) => {
        const { id } = params;
        const url = `${apiUrl}/${localStorage.getItem('patrimoine')}/${localStorage.getItem('start')}/${localStorage.getItem('end')}/${resource}/${id}`;

        try {
            const response = await httpClient(url);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const { json } = await response.json();
            if (!json) {
                throw new Error("Ressource introuvable");
            }
            return {
                data: {
                    ...json,
                    id: json.id,
                },
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};
