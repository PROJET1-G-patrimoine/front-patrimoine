import { DataProvider, fetchUtils } from "react-admin";
import { stringify } from "query-string";
//import { v4 as uuidv4 } from 'uuid';
import {v4 as uuid } from 'uuid';

const apiUrl = `https://virtserver.swaggerhub.com/HEIMAMINIAINA444/harena/1.0.0/patrimoines/${localStorage.getItem('patrimoine')}/${localStorage.getItem('start')}/${localStorage.getItem('end')}`;
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
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        try {
            const response = await httpClient(url);
            if (!Array.isArray(response.json)) {
                throw new Error("La réponse n'est pas un tableau");
            }
            return {
                data: response.json.map(item => ({
                    ...item,
                    id: item.id || uuidv4(), // Utilisez l'ID fourni par l'API si disponible
                })),
                total: parseInt((response.headers.get('content-range') || "0").split('/').pop() || '0', 10),
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    getOne: async (resource, params) => {
        const { id } = params;
        const url = `${apiUrl}/${resource}/${id}`;

        try {
            const { json } = await httpClient(url);
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

    getMany: async (resource, params) => {
        const { ids } = params;
        const query = {
            filter: JSON.stringify({ id: ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        try {
            const { json } = await httpClient(url);
            if (!Array.isArray(json)) {
                throw new Error("La réponse n'est pas un tableau");
            }
            return {
                data: json.map(item => ({
                    ...item,
                    id: item.id || uuidv4(),
                })),
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    getManyReference: async (resource, params) => {
        const { target, id, pagination, sort, filter } = params;
        const query = {
            [`${target}Id`]: id,
            range: JSON.stringify([(pagination.page - 1) * pagination.perPage, pagination.page * pagination.perPage - 1]),
            sort: JSON.stringify([sort.field, sort.order]),
            filter: JSON.stringify(filter),
        };

        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        try {
            const { headers, json } = await httpClient(url);
            if (!Array.isArray(json)) {
                throw new Error("La réponse n'est pas un tableau");
            }
            return {
                data: json.map(item => ({
                    ...item,
                    id: item.id || uuidv4(),
                })),
                total: parseInt((headers.get('content-range') || "0").split('/').pop() || '0', 10),
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    },

    update: async (resource, params) => {
        const { id, data } = params;
        const url = `${apiUrl}/${resource}/${id}`;

        try {
            const { json } = await httpClient(url, {
                method: 'PUT',
                body: JSON.stringify(data),
            });
            if (!json) {
                throw new Error("Mise à jour échouée");
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

    create: async (resource, params) => {
        const { data } = params;
        const url = `${apiUrl}/${resource}`;

        try {
            const { json } = await httpClient(url, {
                method: 'POST',
                body: JSON.stringify(data),
            });
            if (!json) {
                throw new Error("Création échouée");
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

    deleteMany: async (resource, params) => {
        const { ids } = params;
        const query = {
            filter: JSON.stringify({ id: ids }),
        };
        const url = `${apiUrl}/${resource}?${stringify(query)}`;

        try {
            await httpClient(url, {
                method: 'DELETE',
            });
            return { data: ids.map(id => ({ id })) };
        } catch (error) {
            console.error(error);
            throw error;
        }
    },
};
