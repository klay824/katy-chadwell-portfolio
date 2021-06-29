import React from "react";
import Nav from 'react-bootstrap/Nav'


function Footer() {
    return (
        <>
            <Nav fill justify className="justify-content-center footer" activeKey="/home">
                <Nav.Item>
                    <Nav.Link className="link" href="tel:+9729778103" target="_blank">Phone</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link" href="mailto:kchadwell0226@gmail.com" target="_blank">Email</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link" href="https://github.com/klay824" target="_blank">GitHub</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link className="link" href="https://www.linkedin.com/in/katy-chadwell" target="_blank">LinkedIn</Nav.Link>
                </Nav.Item>
            </Nav>
        </>
    );
}

export default Footer;