import React, {Component} from 'react';
import Navbar from "react-bootstrap/Navbar";


class CompMenu extends Component{    
    render(){
        let productos ={
            lista : ['Promociones', 'platos','tablas','Jugos']
        };
        return(
            <Navbar>    
                <nav class="navbar fixed-top navbar-light bg-light">
                    <a class="navbar-brand" href="#">GECN-Dev</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mr-auto">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Inicio <span class="sr-only">(current)</span></a>
                        </li>                        
                        </ul>
                    </div>
                </nav>  
            </Navbar>   
        );
    }
}

export default CompMenu;