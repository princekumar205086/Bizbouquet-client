// code from here

import React from 'react'
import '../About/About.css'
import Typewriter from 'typewriter-effect';
// import Banner from '../Banner/Banner'
// import {Link} from 'react-router-dom'

export default function About() {
  new Typewriter('#typewriter', {
    strings: ['Hello', 'World'],
    autoStart: true,
  });
  return (
    <>
      <div className="row m-0 p-0 aboutus">
      </div>
      <div className="row m-0 bg-blue p-2 mx-auto pc shadow-lg text-green">
        <h4 className="d-flex" id='typewriter' style={{'position':'relative', 'left':'400px'}}>
          <strong>
            <b className="text-green">--------:</b>
          </strong>{" "}
           &nbsp;Introducing&nbsp; <Typewriter
            options={{
              strings: [' Team Members'],
              autoStart: true,
              loop: true,
            }} />{" "}
          <strong>
            <b className="text-green">:--------</b>
          </strong>
        </h4>
      </div>
      <div className="row  bg-green m-0 pc">
        <div className="col-lg-3 p-3">
          <div className="card about-card" >
            <div className="img-box">
              <img src={'/img/images.png'} alt="Ankita" className="card-img" />
            </div>
            <div className="content content-1 card-body">
              <h2>Ankita Arya<br /> <span>Role: - Front-end Developer</span></h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-3">
          <div className="card about-card" >
            <div className="img-box">
              <img src={'/img/images.png'} alt="Anshika" className="card-img" />
            </div>
            <div className="content content-2 card-body">
              <h2>Anshika Varshney<br /><span>Role: - Front-end Developer</span></h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-3">
          <div className="card about-card" >
            <div className="img-box">
              <img src={'/img/user.jpg'} alt="Ashish" className="card-img card-img-p" />
            </div>
            <div className="content content-3 card-body">
              <h2>Ashish Kumar<br /><span>Role: - Front-end Developer</span></h2>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-3">
          <div className="card about-card" >
            <div className="img-box">
              <img src={'/img/user.jpg'} alt="Prince" className="card-img card-img-p" />
            </div>
            <div className="content content-4 card-body">
              <h2>Prince Kumar<br /><span>Role: - Full stack developer</span></h2>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
