import { List, Datagrid, TextField ,NumberField, DateField} from 'react-admin';
const PatrimoineList = (props: any) => (
    <List {...props}>
        <Datagrid rowClick="edit">
            <NumberField source="id" label="id"/>
            <TextField source="nom" label="Nom" />
            <TextField source="possesseur.nom" label="Nom du Possesseur"/>
            <TextField source="t" label="Date" />
            <NumberField source="valeur_comptable" label="Valeur Comptable"/>
        </Datagrid>
    </List>
);

export default PatrimoineList;
