import React, {Component} from 'react';

// ---- fontawesome imports
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon as GEIco } from "@fortawesome/react-fontawesome";

class CompFooter extends Component{ 
    render(){ 
        function Anio(props) {
            return (
              <span className="Anio">                
                {props.date.getFullYear()}
              </span>
            );
        }       
        return(
            <div className="FooterGECN">  
                 <GEIco icon={faCopyright}/>  GECN-Dev <Anio date={new Date()}/> - Todos los derechos Reservados!!!
            </div>
        );
    }
}


export default CompFooter;