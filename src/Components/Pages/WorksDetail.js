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
                <h4 className="col-6">Check Out Some of My Work</h4>
                <Carousel className="col-12">
                    {works.map(work => (
                        <>
                            <div>
                                <img src={work.img} alt={work.alt} />
                                <div className="slide-text">
                                    <h4>{work.title}</h4>
                                    <a href={work.deployed}>View Deployed</a><a href={work.repo}>View Repository</a>
                                    <h5>{work.description}</h5>
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