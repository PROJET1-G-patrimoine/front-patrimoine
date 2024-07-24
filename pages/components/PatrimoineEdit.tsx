// src/components/PatrimoineEdit.tsx
import { DateInput, Edit, NumberInput, SimpleForm, TextInput } from 'react-admin';

const PatrimoineEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput source="nom" />
            <TextInput source="possesseur.nom" label="Possesseur" />
            <DateInput source="t" label="Date" />
            <NumberInput source="valeur_comptable" label="Valeur Comptable" />
        </SimpleForm>
    </Edit>
);

export default PatrimoineEdit;
