import React, { useEffect, useState } from 'react';
export default function ValeurComptable() {
  const [patrimoine, setPatrimoine] = useState<string>('');
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.id) {
      case 'patrimoine':
        setPatrimoine(e.target.value);
        break;
      case 'start':
        setStart(e.target.value);
        break;
      case 'end':
        setEnd(e.target.value);
        break;
      default:
        break;
    }
  };
  useEffect(() => {
    localStorage.setItem('patrimoine', patrimoine);
    localStorage.setItem('start', start);
    localStorage.setItem('end', end);
  }, [patrimoine, start, end]);

  const navigateToFluxList = () => {
    console.log(localStorage.getItem('patrimoine'))
    window.location.href = '/Flux';
  };
  const navigateToGraph = () => {
    window.location.href = '/Graphe';
  };
  const navigateToPatrimoineList = () => {
    window.location.href = '/';
  };
  const navigateToPossessionList = () => {
    window.location.href = '/PossessionPage';
  };
  return (
    <>
      <h1>Projection futur</h1>
      <main>
        <form method='get' action="http://localhost:3000/Flux">
          <label htmlFor="patrimoine">Nom du patrimoine</label>
          <input type="text" id="patrimoine" value={patrimoine} onChange={handleInputChange} />
          <label htmlFor="start">Date début de projection</label>
          <input type="date" id="start" value={start} onChange={handleInputChange} />
          <label htmlFor="end">Date fin de projection</label>
          <input type="date" id="end" value={end} onChange={handleInputChange} />
          <button onClick={navigateToFluxList}>Voir la liste de flux impossible</button>
        </form>
        <form method='get' action="http://localhost:3000/Graphe">
          <label htmlFor="patrimoine">Nom du patrimoine</label>
          <input type="text" id="patrimoine" value={patrimoine} onChange={handleInputChange} />
          <label htmlFor="start">Date début de projection</label>
          <input type="date" id="start" value={start} onChange={handleInputChange} />
          <label htmlFor="end">Date fin de projection</label>
          <input type="date" id="end" value={end} onChange={handleInputChange} />
          <button onClick={navigateToGraph}>Voir le graphe</button>
        </form>
        <form method='get' action="http://localhost:3000/PossessionPage">
          <label htmlFor="">Nom de patrimoine</label>
          <input type="text" id="patrimoine" value={patrimoine} onChange={handleInputChange} />
          <li><button onClick={navigateToPossessionList}>Voir les liste de Possession</button></li>
        </form>
        <ul>
          <li><button onClick={navigateToPatrimoineList}>Voir les listes de patrimoines</button></li>          
        </ul>
      </main>
    </>
  );
}
