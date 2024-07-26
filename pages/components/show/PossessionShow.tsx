import { Edit, SimpleForm, TextField, NumberField, DateField } from 'react-admin';

const PossessionShow = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberField source='id' label="Id" />
            <DateField source="argent.t" label="Instant" />
            <TextField source="argent.nom" label="Nom du Possession" />
            <NumberField source="argent.valeur_comptable" label="Valeur Comptable" />
            <TextField source="argent.devise.nom" label="Nom du devise" />
            <TextField source="argent.devise.code" label="Code de devise" />
        </SimpleForm>
    </Edit>
);

export default PossessionShow;
