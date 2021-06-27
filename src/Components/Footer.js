import React from "react";


function Footer() {
    return (
        <div>
            <footer className="contact" id="contact-me">
                <nav className="navbar navbar-light bg-light row justify-content-center">
                    <h3 class="text-dark col-12 col-lg-2 text-center">Contact Me</h3>
                    <a class="navbar-link text-dark col-12 col-lg-2 text-center" href="tel:+9729778103" target="_blank" rel="noreferrer">972-977-8103</a>
                    <a class="navbar-link text-dark col-12 col-lg-2 text-center"
                        href="mailto:kchadwell0226@gmail.com" target="_blank" rel="noreferrer">kchadwell0226@gmail.com</a>
                    <a class="navbar-link text-dark col-12 col-lg-2 text-center" href="https://github.com/klay824" target="_blank" rel="noreferrer">GitHub</a>
                    <a class="navbar-link text-dark col-12 col-lg-2 text-center"
                        href="https://www.linkedin.com/in/katy-chadwell" target="_blank" rel="noreferrer">LinkedIn</a>
                    <a class="navbar-link text-dark col-12 col-lg-2 text-center" href="https://twitter.com/klay1986" target="_blank" rel="noreferrer">Twitter</a>
                </nav>
            </footer>
        </div>
    );
}

export default Footer;