import React from 'react';
import logo from './assets/images/logo.svg';
import './assets/css/App.css';

import CompMenu from "./componentes/cabecera/menu/CompMenu.js"

function AprReact(req){
  return req;
}
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
          Aprendiendo React { nombre }
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {AprReact("Aprendiendo React")}



        </a>
      </header>
    </div>
  );
}

export default App;
