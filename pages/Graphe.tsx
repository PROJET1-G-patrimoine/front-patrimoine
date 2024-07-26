import React, { useEffect, useState } from 'react';

const GraphComponent = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://virtserver.swaggerhub.com/HEIMAMINIAINA444/harena/1.0.0/patrimoines/${localStorage.getItem('patrimoine')}/graphe`
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []); // Le tableau vide signifie que cet effet ne dépend d'aucune propriété ou état

  if (isLoading) {
    return <div>Loading...</div>; // Affichage du message de chargement pendant le traitement
  }

  if (error) {
    return <div>Error: {error.message}</div>; // Affichage de l'erreur si elle se produit
  }

  return (
    <div>
      {/* Affichage des données sous forme de JSON formaté */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default GraphComponent;
