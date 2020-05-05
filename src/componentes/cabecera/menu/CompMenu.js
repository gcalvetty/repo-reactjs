import React, {Component} from 'react';

// ---- Bootstrap imports
import {Navbar, 
        Nav, 
        NavDropdown,         
        FormControl, 
        Form, 
        Button} from "react-bootstrap";

// ---- fontawesome imports
import { faHome, faProjectDiagram, faEnvelopeOpenText, faSearch  } 
from "@fortawesome/free-solid-svg-icons";

import { faLinkedinIn, faGitAlt, faBloggerB, faFacebook } 
from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class OpcMenu extends Component {
    render() {
    return( 
        <Real.Fragment>
        <NavDropdown.Item href={this.props.href} target="_blank">
             <FontAwesomeIcon icon={this.props.icoFont}/> {this.props.nombre}             
        </NavDropdown.Item>);
        </Real.Fragment>       
    }
}


class CompMenu extends Component{    
    render(){            
        return(
            <div className="MenuGECN">  
            
                <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#home">GECN-Dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#Inicio">
                        <FontAwesomeIcon icon={faHome} /> Inicio
                    </Nav.Link>
                    <Nav.Link href="#Portafolio">
                        <FontAwesomeIcon icon={faProjectDiagram} /> Portafolio</Nav.Link>
                    
                    <NavDropdown title="Redes" id="basic-nav-dropdown">                             
                        <OpcMenu href="https://www.facebook.com/GecnDev/"
                                  icoFont={faFacebook}
                                  nombre="Facebook"/>
                            
                        <OpcMenu href="https://www.linkedin.com/in/gcalvetty/"
                                  icoFont={faLinkedinIn}
                                  nombre="LinkedIn"/>

                        <OpcMenu href="https://github.com/gcalvetty/"
                                  icoFont={faGitAlt}
                                  nombre="gitHub"/>

                        <OpcMenu href="https://gcalvetty.wordpress.com/"
                                  icoFont={faBloggerB}
                                  nombre="Blog"/>
                    </NavDropdown>

                    <Nav.Link href="#Contacto">
                            <FontAwesomeIcon icon={faEnvelopeOpenText} /> Contacto</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success"> 
                            <FontAwesomeIcon icon={faSearch} /> Buscar</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
               
            </div>
        ); // Cerramos return
    }
}
export default CompMenu;