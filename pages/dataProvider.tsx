// src/dataProvider.ts
import { DataProvider, fetchUtils } from 'ra-core';
import jsonServerProvider from 'ra-data-json-server';

const apiUrl = 'http://localhost:8080';
const httpClient = fetchUtils.fetchJson;

const dataProvider: DataProvider = {
    ...jsonServerProvider(apiUrl, httpClient),

    update: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const options = {
            method: 'PUT',
            body: JSON.stringify(params.data),
        };
        const { json } = await httpClient(url, options);
        return { data: json };
    },

    getOne: async (resource, params) => {
        const url = `${apiUrl}/${resource}/${params.id}`;
        const { json } = await httpClient(url);
        return { data: json };
    },
};

export default dataProvider;
