import React from "react";
import works from "../../works.json";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from "react-bootstrap";

function WorksDetail() {
    console.log(works);
    return (
        <div className="pt-1 mb-3 pb-5">
            <h2 class="mt-5 text-center">Check Out Some Of My Work</h2>
            <Carousel>
                {works.map(work => (
                    <Carousel.Item key={work.id}>
                        <img
                            className="testimonialImages d-block p-5 w-75 img-fluid rounded"
                            src={work.img}
                            alt={work.alt}
                        />
                        <Carousel.Caption>
                            <h3>{work.title}</h3>
                            <p>{work.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    );
}

export default WorksDetail;