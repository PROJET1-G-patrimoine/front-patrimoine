import { RaRecord } from 'react-admin';

export interface Possesseur {
    nom: string;
}

export interface Devise {
    nom: string;
}

export interface Argent extends RaRecord {
    t: string;
    nom: string;
    valeur_comptable: number;
    devise: Devise;
    date_d_ouverture: string;
    type: "DETTE" | "CREANCE" | "AUTRES";
}

export interface Patrimoine extends RaRecord {
    id: number;
    nom: string;
    possesseur: Possesseur;
    t: string;
    valeur_comptable: number;
}

export interface FluxArgent extends RaRecord {
    
}

export interface Possession extends RaRecord {
    id: number;
    nom: string;
    t: string;
    valeur_comptable: number;
    devise: Devise;
}

export interface FluxImpossibles extends RaRecord {
    nom_argent: string;
    date: string;
    valeur_argent: number;
    flux_argents: FluxArgent[];
}
