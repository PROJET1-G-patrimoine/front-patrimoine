import { Edit, SimpleForm, TextField ,NumberField} from 'react-admin';

const PersonneShow = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="nom" label="Nom de personne" />
*        </SimpleForm>
   </Edit> 
);

export default PersonneShow;
