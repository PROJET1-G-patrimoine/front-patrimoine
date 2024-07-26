import { List, Datagrid, TextField ,NumberField, DateField} from 'react-admin';

const PersonneList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" label="Id"/>
            <TextField source="nom" label="Nom du Possesseur"/>
        </Datagrid>
    </List>
);

export default PersonneList;
