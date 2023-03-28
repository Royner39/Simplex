import './App.css';
import React, { useState } from 'react';
import { Combobox} from 'react-widgets';


function App() {
  const [numVariables, setNumVariables] = useState(1);
  const [numRestrictions, setNumRestrictions] = useState(1);
  let indiceVariables = 0;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Algoritmo Simplex</h1>
        
      </header>
      <body className="Body">
      <div>
          <label>Número de variables:</label>
          <input type="number" value={numVariables} onChange={(e) => setNumVariables(e.target.value)} />
        </div>
        <div>
          <label>Número de restricciones:</label>
          <input type="number" value={numRestrictions} onChange={(e) => setNumRestrictions(e.target.value)} />       
        </div>
        <div>
        
          <label>Función objetivo:</label>
          <table>
          <tr>
            <td><Combobox
            data={["max", "min"]}
            defaultValue="max"
            /></td>
            <td>x{indiceVariables+1}</td>
            <td><input type="number"></input></td>
            <td><Combobox
            data={[">=", "<=", "="]}
            defaultValue=">="
            /></td>
            <td><input type="number"></input></td>
          </tr>
      </table>
        </div>
        <div>
        <label>Restricciones:</label>
        <table>  
          <tr>
            <td>x{indiceVariables+1}</td>
            <td><input type="number"></input></td>
            <td><Combobox
            data={[">=", "<=", "="]}
            defaultValue=">="
            /></td>
            <td><input type="number"></input></td>
          </tr>
          </table>
        </div>
        <div>
          <button >Ejecutar Simplex</button>
        </div>
        
        
      
        
      </body>
      
    </div>
  );
}

export default App;
