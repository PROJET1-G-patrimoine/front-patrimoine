import { Edit, SimpleForm, TextField ,NumberField, TextInput} from 'react-admin';

const PersonneEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nom" label="Nom de personne" />
        </SimpleForm>
   </Edit> 
);

export default PersonneEdit;
