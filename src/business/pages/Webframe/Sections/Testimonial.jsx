import React from 'react'
import Slider from "react-slick";

export default function Testimonial() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true
    };
    return (
        <>
            <div className="container-fluid">
                <div className="row" id='testimonial'>
                    <div className="row m-0 bg-blue p-2 shadow-lg text-green">
                        <h4 className="text-center">
                            <strong>
                                <b className="text-green">--------:</b>
                            </strong>{" "}
                            Testimonial{" "}
                            <strong>
                                <b className="text-green">:--------</b>
                            </strong>
                        </h4>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="card border border-primary shadow-lg">
                        <div className="card-header text-center bg-light border-0 my-auto">
                            <h4>Let's see what people say!...</h4>
                        </div>
                        <div className="card-body bg-secondary" >
                            <div className="row p-5">
                                <Slider {...settings}>
                                    <div>
                                        <div className="card text-white" style={{'backgroundImage': 'linear-gradient( 270deg, red,green,blue,orange,orangered', 'backgroundAttachment':'fixed'}}>
                                            <div className="card-body text-center" >
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati dolore similique dolorem minima natus at? Itaque voluptates necessitatibus sint explicabo odio architecto maiores pariatur, magni similique impedit. Ea, nesciunt.</p>
                                                <img src="/img/user.jpg" alt=""  className=' rounded-circle text-center mx-auto' height={200} width={200}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                    <div className="card text-white" style={{'backgroundImage': 'linear-gradient( 270deg, red,green,blue,orange,orangered', 'backgroundAttachment':'fixed'}}>
                                            <div className="card-body text-center">
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati dolore similique dolorem minima natus at? Itaque voluptates necessitatibus sint explicabo odio architecto maiores pariatur, magni similique impedit. Ea, nesciunt.</p>
                                                <img src="/img/images.png" alt=""  className=' rounded-circle text-center mx-auto' height={200} width={200}/>
                                            </div>
                                        </div>

                                    </div>
                                    <div>
                                    <div className="card text-white" style={{'backgroundImage': 'linear-gradient( 270deg, red,green,blue,orange,orangered', 'backgroundAttachment':'fixed'}}>
                                            <div className="card-body text-center">
                                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat obcaecati dolore similique dolorem minima natus at? Itaque voluptates necessitatibus sint explicabo odio architecto maiores pariatur, magni similique impedit. Ea, nesciunt.</p>
                                                <img src="/img/female.png" alt=""  className=' rounded-circle text-center mx-auto' height={200} width={200}/>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
