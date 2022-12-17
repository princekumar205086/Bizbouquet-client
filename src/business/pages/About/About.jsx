// import React from 'react'
// import Typewriter from 'typewriter-effect';
// const About = () => {
//   new Typewriter('#typewriter', {
//     strings: ['Hello', 'World'],
//     autoStart: true,
//   });
//   return (
//     <div className="container">
//       <h1 id='typewriter' className='d-flex'>hello <Typewriter
//   options={{
//     strings: ['Hello', 'World'],
//     autoStart: true,
//     loop: true,
//   }}
// /></h1>

//     </div>
//   )
// }
// export default About;


// code from here

import React from 'react'
// import {Link} from 'react-router-dom'

export default function About() {
  return (
    <>
      <div className="row  bg-light m-0 p-3 ">
        <div className="col-lg-3 p-3">
          <div className="card about-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="img-box">
              <img src="https://avatars.githubusercontent.com/u/32757358?v=4" alt="sir" className="card-img card-img-p" title="WebDigger"/>
            </div>
            <div className="content content-1 card-body">
              <h2>Sadiquee Hussain<br/><span>Our Mentor</span></h2>

              <ul className="text-center">
                <li>
                  <a href="https://www.facebook.com/codesadiq" target="_blank" rel="noopener"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/shaan992/" target="_blank" rel="noopener"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/sadiquehussain/" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-3">
          <div className="card about-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="img-box">
              <img src="<?= base_url('assets/image/shubham1.jpeg');?>" alt="shubham" className="card-img" title="WebDigger"/>
            </div>
            <div className="content content-2 card-body">
              <h2>Shubham Gupta<br/><span>Full stack developer</span></h2>
              <ul className="text-center">
                <li>
                  <a href="https://www.facebook.com/shubham.gupta.9081" target="_blank" rel="noopener"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/shubhamgupta62338/" target="_blank" rel="noopener"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/shubham-gupta-682a4b175" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-3">
          <div className="card about-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="img-box">
              <img src="<?= base_url('assets/image/prince.jpeg');?>" alt="prince" className="card-img card-img-p" title="WebDigger"/>
            </div>
            <div className="content content-3 card-body">
              <h2>Prince Raj<br/><span>Full stack developer &amp; Marketing manager </span></h2>
              <ul className="text-center">
                <li>
                  <a href="https://www.facebook.com/princepiku2050" target="_blank" rel="noopener"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="https://www.instagram.com/avenger_princeraj/" target="_blank" rel="noopener"><i className="fab fa-instagram"></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/prince-raj-143a99174" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="col-lg-3 p-3">
          <div className="card about-card" data-aos="fade-up" data-aos-duration="1000">
            <div className="img-box">
              <img src="<?= base_url('assets/image/om1.jpeg');?>" alt="omk" className="card-img" title="WebDigger"/>
            </div>
            <div className="content content-4 card-body">
              <h2>Omkar Kashyap<br/><span>Graphic &amp; UX/UI Designer(Front-end developer)</span></h2>
              <ul className="text-center">
                <li>
                  <a href="https://www.facebook.com/omkar.kumar.186" target="_blank" rel="noopener"><i className="fab fa-facebook-square"></i></a>
                </li>
                <li>
                  <a href="instagram"><i className="fab fa-instagram" target="_blank" rel="noopener"></i></a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/omkar-kashyap-a73a47175" target="_blank" rel="noopener"><i className="fab fa-linkedin"></i></a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
