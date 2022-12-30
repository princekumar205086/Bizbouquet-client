import React from 'react'
import { Link } from 'react-router-dom'
export default function Feedback() {
    return (
        <>
            <div className="container-fluid">
                <div className="row" id='feedback'>
                    <div className="row m-0 bg-blue p-2 shadow-lg text-green">
                        <h4 className="text-center">
                            <strong>
                                <b className="text-green">--------:</b>
                            </strong>{" "}
                            Feedback us{" "}
                            <strong>
                                <b className="text-green">:--------</b>
                            </strong>
                        </h4>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="card border border-primary shadow-lg">
                        <div className="card-header text-center bg-light border-0 my-auto">
                            <h4>You can feedback us on....</h4>
                        </div>
                        <div className="card-body">
                            <div className="row contact-row">
                                <div className="col-lg-8 bg-light" >
                                    <h4>Fill form to feedback us!</h4>
                                    <form action="" method="" acceptCharset="utf-8">
                                        <div className="form-row mt-5 work-request--information1">
                                            <div className="form-group mt-2">
                                                <input type="text" className="form-control" placeholder="Your Name*" name="name"  />                        </div>
                                            <div className="form-group mt-2">
                                                <input type="number" className="form-control " placeholder="Your Mobile No*" name="mobile"  />                        </div>
                                        </div>
                                        <div className="form-row mt-4 work-request--information1">
                                            <div className="form-group mt-2 ">
                                                <input type="email" className="form-control " placeholder="Email Address" name="email"  />                        </div>
                                            <div className="form-group mt-2 ">
                                                <input type="text" className="form-control " placeholder="Your company Name" name="company"  />                        </div>
                                        </div>
                                        <div className="form-row work-request--information1">
                                            <div className="form-group mt-2">
                                                <textarea type="text" className="form-control form-box" autoComplete="off" cols="30" rows="4" placeholder="Write Something*" name="message"></textarea>                         </div>
                                        </div>
                                        <div className="form-group mt-2 mt-3">
                                            <input type="submit" className="btn btn-success" value="Submit" />
                                        </div>
                                    </form>
                                </div>
                                <div className="col-lg-4 text-white bg-blue text-center p-2 number-panel">
                                    <h3 className="mt-4" >We'd love to hear from you, Kindly give your valuable feedback!</h3>
                                    <p className="mt-3 p-4" >Whatever may be your requirement - be it a simple website design, a complex data driven web application development, an e-commerce website, a native or cross platform mobile app development, a logo and brand identity design, a video production or a full-fledged digital marketing campaign - we have a solution for you.</p>
                                    <Link className="btn">Contact us now for a quote!</Link>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
