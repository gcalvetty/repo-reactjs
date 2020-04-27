import React, {Component} from 'react';

// ---- Bootstrap imports
import {Navbar, 
        Nav, 
        NavDropdown, 
        NavLink, 
        Collapse, 
        FormControl, 
        Form, 
        Button} from "react-bootstrap";



// ---- fontawesome imports
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { } from "@fortawesome/free-regular-svg-icons";
import { faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

import { FontAwesomeIcon as GEIco } from "@fortawesome/react-fontawesome";


class CompMenu extends Component{    
    render(){        
        return(
            <div className="MenuGECN">  
                <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">GECN-Dev</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link"><GEIco icon={faFacebook} />Facebook</Nav.Link>
                    <Nav.Link href="#link"><GEIco icon={faLinkedinIn} />LinkedIn</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                    </NavDropdown>
                    </Nav>
                    <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
                </Navbar>
               
            </div>
        ); // Cerramos return
    }
}

export default CompMenu;