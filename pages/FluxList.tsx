import { Admin, Resource } from "react-admin";
import { dataProviderFlux } from "./dataProvider/dataProviderFlux";

export const FluxList =()=>(
    <Admin dataProvider={dataProviderFlux}>
     <Resource 
     name="flux-impossibles"
     list={FluxList}
     />
    </Admin>
)