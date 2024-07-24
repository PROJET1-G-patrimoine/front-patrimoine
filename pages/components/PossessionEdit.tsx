// src/components/PossessionEdit.tsx
import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

const PossessionEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="nom" />
            <DateInput source="t" label="Date" />
            <NumberInput source="valeur_comptable" label="Valeur Comptable" />
            <TextInput source="devise.nom" label="Devise" />
        </SimpleForm>
    </Edit>
);

export default PossessionEdit;
