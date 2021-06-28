import React from "react";
import { Link, Route, useLocation } from "react-router-dom";


function Header() {

    const location = useLocation();

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01"
                aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarTogglerDemo01">
                <a className="navbar-brand">Katy Chadwell</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item">
                        <Link to="/about" className={location.pathname === "/about" ? "nav-link active" : "nav-link"}>About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/work" className={location.pathname === "/work" ? "nav-link active" : "nav-link"}>Work</Link>
                    </li>
                    <li className="nav-item">
                        <a class="nav-link" href="https://docs.google.com/document/d/1BDrVlpSrayWDSNwVCkzXPld3FVRpqqwCfMeo9evK6kw/edit?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
                    </li>
                    <li className="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                            data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Contact
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="tel:+9729778103" target="_blank" rel="noreferrer">972-977-8103</a>
                            <a className="dropdown-item" href="mailto:kchadwell0226@gmail.com" target="_blank" rel="noreferrer">kchadwell0226@gmail.com</a>
                            <Link to="https://github.com/klay824" target="_blank" rel="noreferrer">GitHub</Link>
                            <a className="dropdown-item" href="https://github.com/klay824" target="_blank" rel="noreferrer">GitHub</a>
                            <a className="dropdown-item" href="https://www.linkedin.com/in/katy-chadwell" target="_blank" rel="noreferrer">LinkedIn</a>
                            <a className="dropdown-item" href="https://twitter.com/klay1986" target="_blank" rel="noreferrer">Twitter</a>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Header;