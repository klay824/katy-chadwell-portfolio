import React from "react";

function About() {
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 col-lg-6">
                    <img className="photo-of-me img-fluid" alt="me" src="https://i.ibb.co/njk3xnG/IMG-0432-small.png"></img>
                </div>
                <div className="about-div col-12 col-md-6 col-lg-6">
                    <h2 className="text-center">About Me</h2>
                    <p className="about-text text-center">
                        I am a full-stack web developer based in the Dallas/Fort Worth Metroplex and I would love to be your next web developer. I am skilled in HTML, CSS, Bootstrap, JavaScript, JQuery, server-side APIs, Node.js, Express.js, MySQL, Sequelize, MongoDB, Mongoose ODM, and React.js. I enjoy making dynamic, creative websites that react to the user.
                        <br></br>
                        <br></br>
                        I currently live in Terrell, TX with my husband Austin, dog Chuck, and cats Jade and Talon. I look forward to speaking with you soon!
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;