//PatrimoineList.tsx
import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

const PatrimoineList = () => (
    <List>
        <Datagrid>
            <TextField source="nom" />
            <TextField source="possesseur.nom" label="Possesseur" />
            <DateField source="t" label="Date" />
            <NumberField source="valeur_comptable" label="Valeur Comptable" />
        </Datagrid>
    </List>
);

export default PatrimoineList;
