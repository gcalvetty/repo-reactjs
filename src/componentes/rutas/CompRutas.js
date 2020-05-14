import React, {Component} from 'react';
import { BrowserRouter as Route, Switch, Router } from 'react-router-dom';
import Inicio from '../layouts/Inicio.js';
import Portafolio from '../layouts/Portafolio.js';
import Blog from '../layouts/Blog.js';
import Contacto from "../layouts/Contacto.js";
import NoMatch from "../layouts/NoMatch.js";

class CompRutas extends Component {    
    render() { 
        return ( 
                <React.Fragment>
                    <Router>
                        
                            <Route exact path="/" component={Inicio}/>
                            <Route path="/Portafolio" component={Portafolio} />
                            <Route path="/Blog" component={Blog}/>
                            <Route path="/Contacto" component={Contacto}/>
                            <Route component={NoMatch}/>
                        
                    </Router>                        
                </React.Fragment>                
          );
    } 
}

export default CompRutas;
