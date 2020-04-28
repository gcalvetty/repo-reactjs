import React, {Component} from 'react';

// ---- Bootstrap imports
import {Navbar, 
        Nav, 
        NavDropdown,         
        FormControl, 
        Form, 
        Button} from "react-bootstrap";

// ---- fontawesome imports
import { faHome, faProjectDiagram, faEnvelopeOpenText, faSearch  } from "@fortawesome/free-solid-svg-icons";
import {  } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faLinkedinIn, faGitAlt, faBloggerB } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon as GEIco } from "@fortawesome/react-fontawesome";


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
                        <GEIco icon={faHome} /> Inicio
                    </Nav.Link>
                    <Nav.Link href="#Portafolio">
                        <GEIco icon={faProjectDiagram} /> Portafolio</Nav.Link>
                    
                    <NavDropdown title="Redes" id="basic-nav-dropdown">                    
                        <NavDropdown.Item href="https://www.facebook.com/GecnDev/" target="_blank" rel="noopener noreferrer">
                            <GEIco icon={faFacebook} /> Facebook</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.linkedin.com/in/gcalvetty/" target="_blank" rel="noopener noreferrer">
                            <GEIco icon={faLinkedinIn} /> LinkedIn</NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/gcalvetty/" target="_blank" rel="noopener noreferrer">
                            <GEIco icon={faGitAlt} target="_blank" /> gitHub</NavDropdown.Item>
                            <NavDropdown.Divider />
                        <NavDropdown.Item href="https://gcalvetty.wordpress.com/" target="_blank" rel="noopener noreferrer">
                            <GEIco icon={faBloggerB} /> Blog</NavDropdown.Item>
                    </NavDropdown>

                    <Nav.Link href="#Contacto">
                            <GEIco icon={faEnvelopeOpenText} /> Contacto</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success"> 
                            <GEIco icon={faSearch} /> Buscar</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
               
            </div>
        ); // Cerramos return
    }
}

export default CompMenu;