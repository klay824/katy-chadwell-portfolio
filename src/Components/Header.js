import React from "react";
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function Header() {

    return (
        <Navbar className="p-2" bg="light" expand="lg">
            <Navbar.Brand href="#home">Katy Chadwell</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#about">About</Nav.Link>
                    <Nav.Link href="#work">Work</Nav.Link>
                    <NavDropdown title="Contact" id="basic-nav-dropdown">
                        <NavDropdown.Item href="tel:+9729778103" target="_blank">972-977-8103</NavDropdown.Item>
                        <NavDropdown.Item href="mailto:kchadwell0226@gmail.com" target="_blank">kchadwell0226@gmail.com</NavDropdown.Item>
                        <NavDropdown.Item href="https://github.com/klay824" target="_blank">GitHub</NavDropdown.Item>
                        <NavDropdown.Item href="https://www.linkedin.com/in/katy-chadwell" target="_blank">LinkedIn</NavDropdown.Item>
                        <NavDropdown.Item href="https://twitter.com/klay1986" target="_blank">Twitter</NavDropdown.Item>

                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    );
}

export default Header;