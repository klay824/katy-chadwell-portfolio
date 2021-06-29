import React from "react";
import works from "../../works.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function WorksDetail() {
    console.log(works);
    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                <Carousel className="col-12">
                    {works.map(work => (
                        <>
                            <div>
                                <img src={work.img} alt={work.alt} />
                                <div className="slide-text">
                                    <p>{work.title}</p>
                                    <a href={work.deployed}>View Deployed</a><a href={work.repo}>View Repository</a>
                                    <p>{work.description}</p>
                                </div>
                            </div>
                        </>
                    ))}
                </Carousel>
            </div>
        </div >
    );
}

export default WorksDetail;