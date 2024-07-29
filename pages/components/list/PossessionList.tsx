import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';

const PossessionList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="argent.nom" label="Nom de l'Argent" />
            <NumberField source="argent.valeur_comptable" label="Valeur Comptable de l'Argent" />
            <TextField source="argent.devise.nom" label="Nom de la Devise (Argent)" />
            <TextField source="argent.devise.code" label="Code de la Devise (Argent)" />
            <DateField source="argent.date_d_ouverture" label="Date d'Ouverture de l'Argent" />
            
            <TextField source="materiel.nom" label="Nom du Matériel" />
            <NumberField source="materiel.valeur_comptable" label="Valeur Comptable du Matériel" />
            <TextField source="materiel.devise.nom" label="Nom de la Devise (Matériel)" />
            <TextField source="materiel.devise.code" label="Code de la Devise (Matériel)" />
            <DateField source="materiel.date_d_acquisition" label="Date d'Acquisition du Matériel" />
            
            <TextField source="flux_argent.nom" label="Nom du Flux d'Argent" />
            <NumberField source="flux_argent.valeur_comptable" label="Valeur Comptable du Flux d'Argent" />
            <TextField source="flux_argent.devise.nom" label="Nom de la Devise (Flux d'Argent)" />
            <TextField source="flux_argent.devise.code" label="Code de la Devise (Flux d'Argent)" />
            <DateField source="flux_argent.debut" label="Début du Flux" />
            <DateField source="flux_argent.fin" label="Fin du Flux" />
            <NumberField source="flux_argent.flux_mensuel" label="Flux Mensuel" />
        </Datagrid>
    </List>
);

export default PossessionList;
