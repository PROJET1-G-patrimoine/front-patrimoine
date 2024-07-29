import React, { useEffect, useState } from 'react';
import { Admin, Resource } from 'react-admin';
import dataProviderPossession from './dataProvider/dataProviderPossession';
import PossessionList from './components/list/PossessionList';
import PossessionEdit from './components/edit/Possession';
import PossessionShow from './components/show/PossessionShow';

const PossessionPage: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Admin dataProvider={dataProviderPossession}>
      <Resource
        name="possessions"
        list={PossessionList}
        edit={PossessionEdit}
        show={PossessionShow}
      />
    </Admin>
  );
}

export default PossessionPage;
