import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";

function Jumbo() {
    // const today = new Date(),
    //     time = today.getHours() + ":" + today.getMinutes();

    // this.state = {
    //     currentTime: time
    // }

    return (
        <>
            <Jumbotron fluid>
                <Container className="jumbotron jumbotron-fluid w-100 opacity">
                    <div className="container j-content text-center">
                        <h1 className="display-4">Hello, Seeker of Web Developer!</h1>
                        {/* <p>It is {this.state.currentTime}. Do you know where your next full-stack web developer is?</p> */}

                        <p className="mb-3">You're in luck, because your next full-stack web developer could be just an email or
                            phone call away. Please read on to get familiar with me and my work. Cheers!</p>
                        <p className="lead">
                            <a className="btn btn-dark btn-lg" href="#about" role="button">Learn more</a>
                        </p>
                    </div>
                </Container>
            </Jumbotron>
        </>
    );
}

export default Jumbo;