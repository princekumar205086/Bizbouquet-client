import React from 'react'
import '../Contact/Contact.css'
import { Link } from 'react-router-dom'
const Contact = () => {
  return (
    <>
      <div className="row m-0 p-0 contactus">
      </div>
      <div className="container" style={{'borderTop':'5px solid #fd5e29'}}>
        <div className="row m-0 p-0 text-center mt-5 mb-5">
          <div className="col-lg-4 contact-element" >
            <div>
              <span>
                <i className="fa fa-home fa-4x text-blue"></i>
              </span>
            </div>
            <div>
              <h3>visit us</h3>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere dignissimos rem sit minima architecto ipsum blanditiis, amet ullam alias quod?</p>
              <h4>DELHI, INDIA</h4>
            </div>
          </div>
          <div className="col-lg-4 contact-element" style={{'borderRight':'1px solid #e2e2e2','borderLeft':'1px solid #e2e2e2'}}>
            <div>
              <span>
                <i className="fa fa-phone fa-4x text-blue"></i>
              </span>
            </div>
            <div>
              <h3>Call us</h3>
              <p>+91 99XXXXXXXX1 <br /> +91 99XXXXXXXX1</p>
              <h4>+91 99XXXXXXXX1</h4>
            </div>
          </div>
          <div className="col-lg-4 contact-element" >
            <div>
              <span>
                <i className="fa fa-envelope fa-4x text-blue"></i>
              </span>
            </div>
            <div>
              <h3>contact us</h3>
              <p className="mark">BizBouquet|A kind of business directory!</p>
            </div>
          </div>
        </div>

      </div>
      <div className="row m-0 p-0 contact-get bg-light">
        <h4 className="text-dark mt-4 ml-5 text-uppercase" data-aos="fade-right" data-aos-duration="1000">Get In Touch</h4>
        <div className="col-lg-12">
          <div className="row contact-row">
            <div className="col-lg-8 bg-light" >
              <form action="" method="" accept-charset="utf-8">
                <div className="form-row mt-5 work-request--information1">
                  <div className="form-group col-lg-6">
                    <input type="text" className="form-control contact-form-box" placeholder="Your Name*" name="name" value=""/>                        </div>
                  <div className="form-group col-lg-6">
                    <input type="number" className="form-control contact-form-box" placeholder="Your Mobile No*" name="mobile" value="" />                        </div>
                </div>
                <div className="form-row mt-4 work-request--information1">
                  <div className="form-group col-lg-6">
                    <input type="email" className="form-control contact-form-box" placeholder="Email Address" name="email" value="" />                        </div>
                  <div className="form-group col-lg-6">
                    <input type="text" className="form-control contact-form-box" placeholder="Your company Name" name="company" value="" />                        </div>
                </div>
                <div className="form-row work-request--information1">
                  <div className="form-group col-lg-10">
                    <textarea type="text" className="form-control form-box" autocomplete="off" cols="30" rows="4" style={{'border-bottom': '1px solid black', 'color':'black !important'}} placeholder="Message*" name="message"></textarea>                         </div>
                </div>
                <div className="form-group mt-3">
                  <input type="submit" className="btn contact-form-btn" value="Submit" />
                </div>
              </form>            
              </div>
            <div className="col-lg-4 text-white bg-blue text-center p-2 number-panel">
              <h3 className="mt-4" >Let's talk about what we can build together</h3>
              <p className="mt-3 p-4" >Whatever may be your requirement - be it a simple website design, a complex data driven web application development, an e-commerce website, a native or cross platform mobile app development, a logo and brand identity design, a video production or a full-fledged digital marketing campaign - we have a solution for you.</p>
              <Link className="btn">Contact us now for a quote!</Link>

            </div>
          </div>
        </div>

      </div>
    </>
  )
}
export default Contact