import { Edit, SimpleForm, TextField ,NumberField} from 'react-admin';

const PatrimoineShow = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <NumberField source="id" label="id"/>
            <TextField source="nom" label="Nom" />
            <TextField source="possesseur.nom" label="Nom du Possesseur"/>
            <TextField source="t" label="Date" />
            <NumberField source="valeur_comptable" label="Valeur Comptable"/>
        </SimpleForm>
   </Edit> 
);

export default PatrimoineShow;
