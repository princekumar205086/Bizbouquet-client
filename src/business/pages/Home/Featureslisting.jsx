import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Featureslistcard from "./Featureslistcard"
import data from "../Data"
import Centerbutton from "./Centerbutton"

export default function Featureslisting() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay:true,
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
  }
  return (
    <>
      <div className="row m-0 bg-blue p-2 shadow-lg text-green">
        <h4 className="text-center">
          <strong>
            <b className="text-green">--------:</b>
          </strong>{" "}
          Features listing{" "}
          <strong>
            <b className="text-green">:--------</b>
          </strong>
        </h4>
      </div>
      <div className="container p-2" style={{'backgroundImage': 'linear-gradient( 270deg, rgb(176 42 42 / 16%) 0%, rgb(176 42 42 / 56%) 18.45%, rgb(176 42 42 / 80%) 49.67%, rgb(176 42 42 / 56%) 82.52%, rgb(176 42 42 / 20%) 99.7%, rgb(189 40 40 / 0%) 99.71%, rgb(203 56 55 / 0%) 99.72%, rgb(203 56 55 / 16%) 99.73%)', 'backgroundAttachment':'fixed'}}>
        <div className="row slider responsive slick-initialized slick-slider slick-dotted">
          <Slider className="p-1" {...settings}>
            {data.map((carddata, index) => {
              return <Featureslistcard key={index} carddata={carddata} />;
            })}
          </Slider>
        </div>
        <Centerbutton/>
      </div>
    </>
  )
}


