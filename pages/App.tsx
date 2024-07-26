import React, { useRef } from 'react';

export default function ValeurComptable() {
  const patrimoineRef = useRef(null); // Pas besoin de spécifier le type ici
  const startRef = useRef(null); // Pas besoin de spécifier le type ici
  const endRef = useRef(null); // Pas besoin de spécifier le type ici

  const FluxList = () => {
    const patrimoine = patrimoineRef.current?.value;
    const start = startRef.current?.value;
    const end = endRef.current?.value;

    if (patrimoine && start && end) {
      localStorage.setItem('patrimoine', patrimoine);
      localStorage.setItem('start', start);
      localStorage.setItem('end', end);
    }
  }

  const graphe = () => {
    const patrimoine = patrimoineRef.current?.value;
    const start = startRef.current?.value;
    const end = endRef.current?.value;

    if (patrimoine && start && end) {
      localStorage.setItem('patrimoine', patrimoine);
      localStorage.setItem('start', start);
      localStorage.setItem('end', end);
    }
  }

  const handleFluxListClick = (event) => {
    event.preventDefault();
    FluxList();
  }

  const handleGrapheClick = (event) => {
    event.preventDefault();
    graphe();
  }

  return (
    <>
      <h1>Projection futur</h1>
      <main>
        <form>
          <label htmlFor="patrimoine">Nom du patrimoine</label>
          <input type="text" id="patrimoine" ref={patrimoineRef} />
          <label htmlFor="start">Date début de projection</label>
          <input type="date" id="start" ref={startRef} />
          <label htmlFor="end">Date fin de projection</label>
          <input type="date" id="end" ref={endRef} />
          <button onClick={handleFluxListClick}>Voir la liste de flux impossible</button>
        </form>
        <form>
          <label htmlFor="patrimoineGraphe">Nom du patrimoine</label>
          <input type="text" id="patrimoineGraphe" ref={patrimoineRef} />
          <label htmlFor="startGraphe">Date début de projection</label>
          <input type="date" id="startGraphe" ref={startRef} />
          <label htmlFor="endGraphe">Date fin de projection</label>
          <input type="date" id="endGraphe" ref={endRef} />
          <button onClick={handleGrapheClick}>Voir le graphe</button>
        </form>
      </main>
    </>
  );
}
