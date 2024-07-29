import { Edit, SimpleForm, TextField ,NumberField, TextInput, NumberInput} from 'react-admin';

const PatrimoineEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberInput source="id" label="id"/>
            <TextInput source="nom" label="Nom" />
            <TextInput source="possesseur.nom" label="Nom du Possesseur"/>
            <TextInput source="t" label="Date" />
            <NumberInput source="valeur_comptable" label="Valeur Comptable"/>
        </SimpleForm>
   </Edit> 
);

export default PatrimoineEdit;
