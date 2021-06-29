import React from "react";
import Nav from 'react-bootstrap/Nav'


function Footer() {
    return (
        <footer>
            <Nav fill justify sticky="bottom" className="justify-content-center" activeKey="/home">
                <Nav.Item className="pt-1">
                    Contact Me
                </Nav.Item>
                <Nav.Item className="pt-1">
                    <Nav.Link className="link" href="tel:+9729778103" target="_blank">972-977-8103</Nav.Link>
                </Nav.Item>
                <Nav.Item className="pt-1">
                    <Nav.Link className="link" href="mailto:kchadwell0226@gmail.com" target="_blank">kchadwell0226@gmail.com</Nav.Link>
                </Nav.Item>
                <Nav.Item className="pt-1">
                    <Nav.Link className="link" href="https://github.com/klay824" target="_blank">GitHub</Nav.Link>
                </Nav.Item>
                <Nav.Item className="pt-1">
                    <Nav.Link className="link" href="https://www.linkedin.com/in/katy-chadwell" target="_blank">LinkedIn</Nav.Link>
                </Nav.Item>
                <Nav.Item className="pt-1">
                    <Nav.Link className="link" href="https://twitter.com/klay1986" target="_blank">Twitter</Nav.Link>
                </Nav.Item>
            </Nav>
        </footer>
    );
}

export default Footer;