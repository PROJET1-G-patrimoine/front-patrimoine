// src/App.tsx
"use client";

import React from 'react';
import { Admin, ListGuesser, Resource } from 'react-admin';
import dataProvider from './dataProvider';

const App: React.FC = () => (
    <Admin dataProvider={dataProvider}>
        <Resource name="patrimoines" list={ListGuesser} />
        <Resource name="patrimoines/possessions" list={ListGuesser} />
    </Admin>
);

export default App;
