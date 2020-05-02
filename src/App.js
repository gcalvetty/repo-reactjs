import React from 'react';
import logo from './assets/images/logo-gecn.png';
import './assets/css/App.css';
import './assets/css/Footer.css';

// ---- Componentes 
import CompMenu from "./componentes/cabecera/menu/CompMenu2.js";
import CompFooter from "./componentes/pie/CompFooter.js";


function App() {
  var nombre = "GECN-Dev 2k20";
  return (    
    <div className="App">      
      <section className="componentes">
        <CompMenu/>
      </section>
      <header className="App-header" target="Incio">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React - { nombre }
        </p>        
      </header>
      <section className="componentes">
        <CompFooter/>
      </section>
    </div>
  );
}
export default App;
