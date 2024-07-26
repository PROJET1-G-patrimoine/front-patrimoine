// src/App.tsx
"use client";

import React from 'react';
import dataProviderPatrimoine from './dataProvider/dataProviderPatrimoine';
import PatrimoineList from './components/list/PatrimoineList';
import { Admin, Resource } from 'react-admin';
import PatrimoineShow from './components/show/PatrimoineShow';
import PatrimoineEdit from './components/edit/PatrimoineEdit';


const AdminApp: React.FC = () => (
    <Admin dataProvider={dataProviderPatrimoine}>
        <Resource 
        name="patrimoines" 
        list={PatrimoineList} 
        show={PatrimoineShow}
        edit={PatrimoineEdit}
        />
    </Admin>
);

export default AdminApp;
