import { Patrimoine, Possession, Devise, Argent, FluxArgent, FluxImpossibles } from './types';

export const patrimoines: Patrimoine[] = [
    {
        id: 1,
        nom: "Patrimoine 1",
        possesseur: { nom: "Possesseur 1" },
        t: "2023-07-24",
        valeur_comptable: 10000
    },
    {
        id: 2,
        nom: "Patrimoine 2",
        possesseur: { nom: "Possesseur 2" },
        t: "2023-07-25",
        valeur_comptable: 20000
    }
];

export const possessions: Possession[] = [
    {
        id: 1,
        nom: "Possession 1",
        t: "2023-07-24",
        valeur_comptable: 5000,
        devise: { nom: "USD" }
    },
    {
        id: 2,
        nom: "Possession 2",
        t: "2023-07-25",
        valeur_comptable: 10000,
        devise: { nom: "EUR" }
    }
];

export const devises: Devise[] = [
    { nom: "USD" },
    { nom: "EUR" }
];

export const argents: Argent[] = [
    {
        id: 1,
        t: "2023-07-24",
        nom: "Argent 1",
        valeur_comptable: 1500,
        devise: { nom: "USD" },
        date_d_ouverture: "2023-07-24",
        type: "DETTE"
    },
    {
        id: 2,
        t: "2023-07-25",
        nom: "Argent 2",
        valeur_comptable: 2500,
        devise: { nom: "EUR" },
        date_d_ouverture: "2023-07-25",
        type: "CREANCE"
    }
];

export const fluxArgents: FluxArgent[] = [
    
];

export const fluxImpossibles: FluxImpossibles[] = [
    {
        id: 1,
        nom_argent: "Argent Impossible 1",
        date: "2023-07-26",
        valeur_argent: 3000,
        flux_argents: []
    },
    {
        id: 2,
        nom_argent: "Argent Impossible 2",
        date: "2023-07-27",
        valeur_argent: 4000,
        flux_argents: []
    }
];
