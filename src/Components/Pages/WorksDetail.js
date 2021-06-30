import React from "react";
import works from "../../utils/workcollection";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

function WorksDetail() {
    console.log(works);
    return (
        <div className="container mb-5">
            <div className="row justify-content-center">
                <Carousel showThumbs={false} className="col-12">
                    {works.map(work => (
                        <div key={work.id}>
                            <div>
                                <img className="car-img" src={work.img} alt={work.alt} />
                                <div className="slide-text">
                                    <p>{work.title}</p>
                                    <a href={work.deployed} target="_blank" rel="noreferrer">View Deployed</a><a href={work.repo} target="_blank" rel="noreferrer">View Repository</a>
                                    <p>{work.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div >
    );
}

export default WorksDetail;