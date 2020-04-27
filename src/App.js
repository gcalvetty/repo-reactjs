import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';
/**
 * Font Awesome 5
 */
import 'bootstrap/dist/css/bootstrap.min.css';


/**
 * Componentes  
*/
import CompMenu from "./componentes/cabecera/menu/CompMenu.js";


function App() {
  var nombre = "GECN-Dev 2k20";
  return (    
    <div className="App">      
      <section className="componentes">
          <CompMenu />
      </section>
      <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React - { nombre }
        </p>        
      </header>
    </div>
  );
}

export default App;
