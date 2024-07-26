import { List, Datagrid, TextField, NumberField, DateField } from 'react-admin';

const PossessionList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source='id' label="Id" />
            <DateField source="t" label="T" />
            <TextField source="nom" label="Nom du Possession" />
            <NumberField source="valeur_comptable" label="Valeur comptable" />
            <TextField source="devise.nom" label="Nom de devise" />
            <TextField source="devise.code" label="Code de devise" />
        </Datagrid>
    </List>
);

export default PossessionList;
