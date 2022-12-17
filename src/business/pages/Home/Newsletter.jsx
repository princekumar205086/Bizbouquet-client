import React from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
export default function Newsletter() {
    return (
        <>
            {/* <div className="row m-0 bg-blue p-2 shadow-lg text-green">
                <h4 className="text-center">
                    <strong>
                        <b className="text-green">--------:</b>
                    </strong>{" "}
                    Newsletter{" "}
                    <strong>
                        <b className="text-green">:--------</b>
                    </strong>
                </h4>
            </div> */}
            <div className="container mt-3 mb-2">
                <div className="row bg-light">
                    <div className="col-lg-6 m-0 p-0">
                        <div className="card border-0">
                            <div className="card-body p-5">
                                <div className="content">
                                    <h4><FaTelegramPlane size={20} /> Subscribe to our newsletter</h4>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, asperiores?</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 m-0 p-0">
                        <div className="card border-0">
                            <div className="card-body p-5
                            
                            
                            
                            
                            ">
                                <div className="content">
                                    <h4>
                                        <div className="input-group p-2">
                                            <input type="email" className='form-control' placeholder='Enter your email' />
                                            <input type="button" className='btn btn-primary' value='Subscribe' />
                                        </div>
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
