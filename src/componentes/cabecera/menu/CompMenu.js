import React, {Component} from 'react';

// ---- Bootstrap imports
import Navbar from "react-bootstrap/Navbar";

// ---- fontawesome imports
import { faHome, faBlenderPhone } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class CompMenu extends Component{    
    render(){
        let productos ={
            lista : ['Promociones', 'platos','tablas','Jugos']
        };
        return(
            <div className="MenuGECN">  
                <Navbar>    
                    <nav class="navbar fixed-top navbar-light bg-light">
                        <a class="navbar-brand" href="#">GECN-Dev</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                            <li class="nav-item active">
                                <a class="nav-link" href="#">
                                    <FontAwesomeIcon icon={faHome} />
                                    Inicio <span class="sr-only">(current)</span></a>
                            </li> 
                            <li>
                                <a class="nav-link" href="https://www.facebook.com/GecnDev" target="_blank">
                                    <FontAwesomeIcon icon={faBlenderPhone} />
                                    Facebook
                                </a>
                                
                            </li>                           
                            </ul>
                        </div>
                    </nav> 
                    
                </Navbar> 
               
            </div>
        ); // Cerramos return
    }
}

export default CompMenu;