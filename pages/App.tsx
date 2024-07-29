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
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Liste des flux impossibles</h1>
        <main className="space-y-6">
          <section className="bg-white shadow-md rounded-lg p-6">
            <form method='get' action="http://localhost:3000/Flux">
              <div className="mb-4">
                <label htmlFor="patrimoine" className="block text-sm font-medium">Nom du patrimoine</label>
                <input type="text" id="patrimoine" value={patrimoine} onChange={handleInputChange} className="w-full mt-1 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                  <label htmlFor="start" className="block text-sm font-medium">Date début de projection</label>
                  <input type="date" id="start" value={start} onChange={handleInputChange} className="w-full mt-1 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="md:w-1/2">
                  <label htmlFor="end" className="block text-sm font-medium">Date fin de projection</label>
                  <input type="date" id="end" value={end} onChange={handleInputChange} className="w-full mt-1 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <button onClick={navigateToFluxList} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Voir </button>
            </form>
          </section>

        </main>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Voir la graphe</h1>
        <main className="space-y-6">
          <section className="bg-white shadow-md rounded-lg p-6">
            <form method='get' action="http://localhost:3000/Graphe">
              <div className="mb-4">
                <label htmlFor="patrimoine" className="block text-sm font-medium">Nom du patrimoine</label>
                <input type="text" id="patrimoine" value={patrimoine} onChange={handleInputChange} className="w-full mt-1 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500" />
              </div>
              <div className="flex flex-col md:flex-row gap-4">
                <div className="md:w-1/2">
                  <label htmlFor="start" className="block text-sm font-medium">Date début de projection</label>
                  <input type="date" id="start" value={start} onChange={handleInputChange} className="w-full mt-1 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="md:w-1/2">
                  <label htmlFor="end" className="block text-sm font-medium">Date fin de projection</label>
                  <input type="date" id="end" value={end} onChange={handleInputChange} className="w-full mt-1 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
              </div>
              <button onClick={navigateToGraph} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Voir l'image'</button>
            </form>
          </section>

        </main>
      </div>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Projection futur</h1>
        <main className="space-y-6">
          <section className="bg-white shadow-md rounded-lg p-6">
            <form method='get' action="http://localhost:3000/PossessionPage">
              <div className="mb-4">
                <label htmlFor="patrimoine" className="block text-sm font-medium">Nom du patrimoine</label>
                <input type="text" id="patrimoine" value={patrimoine} onChange={handleInputChange} className="w-full mt-1 border border-gray-300 rounded py-2 px-3 focus:outline-none focus:border-blue-500" />
              </div>
              <button onClick={navigateToPossessionList} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Voir la liste des possessions</button>
            </form>
          </section>

        </main>
      </div>
      <ul>
          <li><button onClick={navigateToPatrimoineList} className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">Voir les listes de patrimoines</button></li>          
       </ul>
    </>
  );
}
 