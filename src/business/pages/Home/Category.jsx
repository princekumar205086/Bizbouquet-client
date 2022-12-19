import React from "react"
import Categorycard from "./Categorycard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Centerbutton from "./Centerbutton"
import cat_data from "../Category"

export default function Category() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="row m-0 bg-blue p-2 shadow-lg text-green">
        <h4 className="text-center">
          <strong>
            <b className="text-green">--------:</b>
          </strong>Features categories<strong>
            <b className="text-green">:--------</b>
          </strong>
        </h4>
      </div>
      <div className="container p-2">
        <div className="row slider responsive slick-initialized slick-slider slick-dotted">
          <Slider className="p-1" {...settings}>
             {
              cat_data.map(catdata => (<Categorycard catdata={catdata} />))
            }
            {/* <Categorycard />
            <Categorycard />
            <Categorycard />
            <Categorycard />
            <Categorycard />
            <Categorycard />
            <Categorycard />
            <Categorycard /> */}
          </Slider>
        </div>
        <Centerbutton />
      </div>
    </>
  );
}