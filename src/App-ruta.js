import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
// ---- Componentes 
import Nav from './componentes/cabecera/menu/CompMenu2'
import Inicio from './componentes/layouts/Inicio';
import Portafolio from './componentes/layouts/Portafolio';
import Contacto from './componentes/layouts/Contacto';
import Blog from './componentes/layouts/Blog';
import NoMatch from './componentes/layouts/NoMatch';


function App() {
  var nombre = "GECN-Dev 2k20";
  return (
    <div className="Cabecera">
      <Nav/>
      <Router>            
        <Route path="/inicio" component={Inicio}/>    
        <Route path="/portafolio" component={Portafolio}/>    
        <Route path="/contacto" component={Contacto}/>    
        <Route path="/blog" component={Blog}/>    
        <Route path="/nomatch" component={NoMatch}/>    
      </Router>    
    </div>        
  );
}
export default App;
