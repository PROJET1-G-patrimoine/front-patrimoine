import { List, Datagrid, TextField ,NumberField, DateField} from 'react-admin';

const DeviseList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <TextField source="nom" label="Nom de devise" />
            <TextField source="code" label="Code de devise" />
        </Datagrid>
    </List>
);

export default DeviseList;
