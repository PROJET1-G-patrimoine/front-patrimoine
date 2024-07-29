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
  }, []);

  if (isLoading) {
    return <div className="text-center my-10">Loading...</div>; 
  }

  if (error) {
    return <div className="text-red-500 text-center my-10">Error: {error.message}</div>;
  }

  return (
    <div className="max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md">
      <pre className="whitespace-pre-wrap">{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default GraphComponent;
