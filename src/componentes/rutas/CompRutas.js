import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';


class CompRutas extends Component {
    state = {  }
    render() { 
        return (
            <Router>
                <Switch>
                    <Route exact path="/">Incio</Route>
                    <Route path="/portafolio">Portafolio</Route>
                    <Route path="/blog">Blog</Route>
                    <Route path="/contacto">Contacto</Route>
                    <Route component={NoMatch}/>
                </Switch>
            </Router>            
          );
    }
}
 
export default CompRutas;
