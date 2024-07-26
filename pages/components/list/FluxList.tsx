import React from 'react';
import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';

// Définition des types pour les données JSON
interface Devise {
    nom: string;
    code: string;
}

interface Argent {
    t: string;
    nom: string;
    valeur_comptable: number;
    devise: Devise;
    date_d_ouverture: string;
    type: string;
}

interface FluxArgent {
    t: string;
    nom: string;
    valeur_comptable: number;
    devise: Devise;
    argent: Argent;
    debut: string;
    fin: string;
    flux_mensuel: number;
    date_d_operation: number;
}

interface Data {
    nom_argent: string;
    date: string;
    valeur_argent: number;
    flux_argents: FluxArgent[];
}

interface RootObject {
    data: Data[];
}

const FluxList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="flux_argents[0].devise.nom" label="Nom de devise" />
            <TextField source="flux_argents[0].devise.code" label="Code de devise" />
            <DateField source="flux_argents[0].argent.date_d_ouverture" label="Date d'ouverture" />
            <NumberField source="flux_argents[0].argent.valeur_comptable" label="Valeur Comptable" />
        </Datagrid>
    </List>
);

export default FluxList;
