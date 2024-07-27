import React, { useEffect, useState } from 'react';
import { Admin, Resource } from 'react-admin';
import { dataProviderFlux } from './dataProvider/dataProviderFlux';
import FluxList from './components/list/FluxList';

const Flux: React.FC = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <Admin dataProvider={dataProviderFlux}>
      <Resource 
        name="flux-impossibles"
        list={FluxList}
      />
    </Admin>
  );
}

export default Flux;
