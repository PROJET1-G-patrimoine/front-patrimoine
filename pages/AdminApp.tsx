"use client";

import React from 'react';
import dataProviderPatrimoine from './dataProvider/dataProviderPatrimoine';
import PatrimoineList from './components/list/PatrimoineList';
import { Admin, Resource } from 'react-admin';
import PatrimoineShow from './components/show/PatrimoineShow';
import PatrimoineEdit from './components/edit/PatrimoineEdit';
import PossessionList from './components/list/PossessionList';
import PossessionShow from './components/show/PossessionShow';
import PossessionEdit from './components/edit/Possession';


const AdminApp: React.FC = () => (
    <Admin dataProvider={dataProviderPatrimoine}>
        <Resource 
        name="patrimoines" 
        list={PatrimoineList} 
        show={PatrimoineShow}
        edit={PatrimoineEdit}
        />
        <Resource 
        name="possessions"
        list={PossessionList}
        show={PossessionShow}
        edit={PossessionEdit}
        />
    </Admin>
);

export default AdminApp;
