import React from "react";

function About() {
    return (
        <div className="container mt-5">
            <div className="col-s-12 col col-lg-6 col-xl-6 pl-5">
                <img className="photo-of-me img-fluid mt-5" alt="me" src="assets\images\photo-of-me.jpg"></img>
            </div>
            <div className="col-s-12 col-lg-6 col-xl-6 pl-5">
                <h2>About Me</h2>
                <p className="flow-text mb-5 my-section">
                    I am a full-stack web developer based in the Dallas/Fort Worth Metroplex and I would love to be your next web developer. I am skilled in HTML, CSS, Bootstrap, JavaScript, JQuery, server-side APIs, Node.js, Express.js, MySQL, Sequelize, MongoDB, and Mongoose ODM. I enjoy making dynamic, creative websites that react to the user.
                    <br></br>
                    <br></br>
                    I currently live in Terrell, TX with my husband Austin, dog Chuck, and cats Jade and Talon. I look forward to speaking with you soon!
                </p>
            </div>


        </div>
    );
}

export default About;