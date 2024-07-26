// patrimoines/{nom_patrimoines}/possessions 
// update d'une possession
// list des possessions => PossessionsList 
//                         PossessionsEdit
//                         PossessionsShow 

import { Admin, Resource } from "react-admin";
import { dataProviderPossession } from "./dataProvider/dataProviderPossession";
import PossessionList from "./components/list/PossessionList";
import PossessionEdit from "./components/edit/Possession";
import PossessionShow from "./components/show/PossessionShow";

// /patrimoines/{nom_patrimoines}/possessions/{nom_possessions}
// list des possessions

// methode delete une possession de patrimoine 
export const Possessions = ()=>(
    <Admin
    dataProvider={dataProviderPossession}
    >
     <Resource 
     name="possessions"
     list={PossessionList}
     edit={PossessionEdit}
     show={PossessionShow}
     />
    </Admin>
)
export default Possessions;