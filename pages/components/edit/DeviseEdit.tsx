import { Edit, SimpleForm, TextField ,NumberField, TextInput} from 'react-admin';

const DeviseEdit = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextInput source="nom" label="Nom de devise" />
            <TextInput source="code" label="Code de devise"/>
        </SimpleForm>
   </Edit> 
);

export default DeviseEdit;
