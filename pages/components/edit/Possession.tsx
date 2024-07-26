import { Edit, SimpleForm, DateInput, TextInput, NumberInput } from 'react-admin';

const PossessionEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source='id' label="Id" />
            <DateInput source="argent.t" label="T" />
            <TextInput source="argent.nom" label="Nom du Possession" />
            <NumberInput source="argent.valeur_comptable" label="Valeur comptable" />
            <TextInput source="argent.devise.nom" label="Nom de devise" />
            <TextInput source="argent.devise.code" label="Code de devise" />
        </SimpleForm>
    </Edit>
);

export default PossessionEdit;
