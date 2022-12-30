import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Featureslistcard from "./Featureslistcard"
import data from "../Data"
import Centerbutton from "./Centerbutton"
//import { useParams } from "react-router-dom"
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
      <div className="container p-2" style={{'backgroundImage': 'linear-gradient( 270deg, red,green,blue,orange,orangered', 'backgroundAttachment':'fixed'}}>
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


