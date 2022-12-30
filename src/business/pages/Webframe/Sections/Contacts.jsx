import React from 'react'

export default function Contacts() {
    return (
        <>
            <div className="container-fluid">
                <div className="row" id='contact'>
                    <div className="row m-0 bg-blue p-2 shadow-lg text-green">
                        <h4 className="text-center">
                            <strong>
                                <b className="text-green">--------:</b>
                            </strong>{" "}
                            Contact us{" "}
                            <strong>
                                <b className="text-green">:--------</b>
                            </strong>
                        </h4>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="card border border-primary shadow-lg">
                        <div className="card-header text-center bg-light border-0 my-auto">
                            <h4>You can contact us on....</h4>
                        </div>
                        <div className="card-body">
                            <div className="container" style={{ 'borderTop': '5px solid #fd5e29' }}>
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
                                    <div className="col-lg-4 contact-element" style={{ 'borderRight': '1px solid #e2e2e2', 'borderLeft': '1px solid #e2e2e2' }}>
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
                                            <p className="mark">Small business|business@mail.com</p>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
