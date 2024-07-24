// src/api.tsx
import { Patrimoine, Possession } from './types';

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
