
import React, {Component} from 'react';
import {Navbar, Nav, NavDropdown, FormControl, Form, Button } from "react-bootstrap";

import { faHome, faProjectDiagram, faEnvelopeOpenText, faSearch }from "@fortawesome/free-solid-svg-icons";
import { faLinkedinIn, faGitAlt, faBloggerB, faFacebook } from "@fortawesome/free-brands-svg-icons";
// eslint-disable-next-line
import { FontAwesomeIcon as GECNIcon } from "@fortawesome/react-fontawesome";

class OpcMenu extends Component {
    render() {
    return(       
        <Nav.Link href={this.props.href}>                                
           <GECNIcon icon={this.props.icoFont}/> {this.props.nombre}                       
        </Nav.Link>
        );
    }
}

class OpcMenuDrop extends Component {
    render() {
    return(               
        <NavDropdown.Item href={this.props.href} target="_blank">
           <GECNIcon icon={this.props.icoFont} fixedWidth/> {this.props.nombre}                       
        </NavDropdown.Item>        
        );
    }
}

class CompMenu2 extends Component{        
    render(){                    
        return(
            <div className="MenuGECN">                
                <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="/Inicio">GECN-Dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">                     
                        <OpcMenu href="/Inicio"
                                icoFont={faHome}
                                nombre="Inicio"/>

                        <OpcMenu href="/Portafolio"
                                icoFont={faProjectDiagram}
                                nombre="Portafolio"/>    

                        <NavDropdown title="Redes" id="basic-nav-dropdown">                             
                            <OpcMenuDrop href="https://www.facebook.com/GecnDev/"
                                    icoFont={faFacebook}
                                    nombre="Facebook"/>
                                
                            <OpcMenuDrop href="https://www.linkedin.com/in/gcalvetty/"
                                    icoFont={faLinkedinIn}
                                    nombre="LinkedIn"/>

                            <OpcMenuDrop href="https://github.com/gcalvetty/"
                                    icoFont={faGitAlt}
                                    nombre="gitHub"/>

                            <OpcMenuDrop href="https://gcalvetty.wordpress.com/"
                                    icoFont={faBloggerB}
                                    nombre="Blog"/>
                        </NavDropdown>    

                        <OpcMenu href="/Contacto"
                                icoFont={faEnvelopeOpenText}
                                nombre="Contact"/>                    
                    </Nav> 
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success"> 
                            <GECNIcon icon={faSearch} /> Buscar</Button>
                    </Form>                   
                </Navbar.Collapse>
                </Navbar>
            </div>
        ); 
    }
}
export default CompMenu2;