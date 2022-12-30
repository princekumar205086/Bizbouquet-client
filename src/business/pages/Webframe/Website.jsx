import React from 'react'
// import { Link } from 'react-router-dom'
import '../Webframe/Website.css'
import { HashLink } from 'react-router-hashlink'
import Abouts from './Sections/Abouts'
import Contacts from './Sections/Contacts'
import Feedback from './Sections/Feedback'
import Workinghour from './Sections/Workinghour'
import Testimonial from './Sections/Testimonial'
import Footer from './Footer'
// import data from '../Data'
// import Header from './Header'

export default function Website() {
  //const link = "#"

  //  return business.b_name
  //  business.b_doc
  // }
  return (
    <>
      {/* {
        data.map((business)=>{
          return <>
                <Header link={link} logo={business.b_name} />
            </>
        })
      } */}

      <div className="container-fluid sticky-top">
        <div className="row bg-secondary">
          <nav className="nav navbar-expand-lg navbar-dark bg-success bg-opacity-25">
            <HashLink to="#" className="navbar-brand logo">Small Business</HashLink>
            <div className="link-box my-auto mx-auto">
              <HashLink to='/website#home' className='mx-3 nav-link d-inline text-white fw-bold'>Home</HashLink>
              <HashLink to='/website#about' className='mx-3 nav-link d-inline text-white fw-bold'>About</HashLink>
              <HashLink to='/website#contact' className='mx-3 nav-link d-inline text-white fw-bold'>Contact</HashLink>
              <HashLink to='/website/#feedback' className='mx-3 nav-link d-inline text-white fw-bold'>Feedback</HashLink>
              <HashLink to='/website/#workinghour' className='mx-3 nav-link d-inline text-white fw-bold'>Working Hour</HashLink>
              <HashLink to='/website/#testimonial' className='mx-3 nav-link d-inline text-white fw-bold'>Testimonial</HashLink>
            </div>
          </nav>
        </div>
      </div>
      <div className="container-fluid m-0 p-0">
        <div className="row m-0 p-0" id='home'>
          <div className="card business-banner m-0 p-0 rounded-0">
            <div className="card-body">
              <div className="row">
                <div className="col-lg-3">
                <div className="card m-vertical bg-success bg-opacity-75 text-white">
                <div className="card-body my-2">
                  <div className="text-box">
                    <h1>Small Business</h1>
                  </div>
                </div>
                <div className="card-footer">
                  <p>Location: Rohini Delhi</p>
                  <p>Business Owner: Ashish Kumar</p>
                  <p>Contact us: 8677939971</p>
                </div>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Abouts/>
      <Contacts/>
      <Feedback/>
      <Workinghour/>
      <Testimonial/>
      <Footer/>
    </>
  )
}
