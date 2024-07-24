//PossessionList.tsx
import { Datagrid, DateField, List, NumberField, TextField } from 'react-admin';

const PossessionList = () => (
    <List>
        <Datagrid>
            <TextField source="nom" />
            <DateField source="t" label="Date" />
            <NumberField source="valeur_comptable" label="Valeur Comptable" />
            <TextField source="devise.nom" label="Devise" />
        </Datagrid>
    </List>
);

export default PossessionList;
