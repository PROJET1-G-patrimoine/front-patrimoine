import { Edit, SimpleForm, TextField ,NumberField} from 'react-admin';

const DeviseShow = (props: any) => (
    <Edit {...props}>
        <SimpleForm>
            <TextField source="nom" label="Nom" />
            <TextField source="code" label="Code de devise"/>
        </SimpleForm>
   </Edit> 
);

export default DeviseShow;
