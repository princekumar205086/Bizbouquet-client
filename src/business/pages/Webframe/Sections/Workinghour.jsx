import React from 'react'

export default function Workinghour() {
    return (
        <>
            <div className="container-fluid">
                <div className="row" id='workinghour'>
                    <div className="row m-0 bg-blue p-2 shadow-lg text-green">
                        <h4 className="text-center">
                            <strong>
                                <b className="text-green">--------:</b>
                            </strong>{" "}
                            Working hours{" "}
                            <strong>
                                <b className="text-green">:--------</b>
                            </strong>
                        </h4>
                    </div>
                </div>
                <div className="row p-2">
                    <div className="card border border-primary shadow-lg">
                        <div className="card-header text-center bg-light border-0 my-auto">
                            <h4>Our working hour timing is...</h4>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h5>Special day working hours</h5>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et laudantium adipisci quis voluptatum odio aspernatur esse, temporibus deserunt! Animi quae eaque sunt eos dolorum earum explicabo incidunt delectus accusamus in? Ratione fugit non sed blanditiis ea numquam quam placeat voluptatibus ipsam vero maxime pariatur esse, itaque illo debitis velit voluptas beatae ab, qui libero hic recusandae reiciendis nam? Sapiente et molestias voluptate amet, fugit quam beatae blanditiis laboriosam aspernatur corrupti sit ad natus consectetur ipsam unde  nam tempore distinctio deleniti ullam fuga odit.</p>
                                </div>
                                <div className="col-lg-8">
                                    <table className="table table-striped table table-bordered">
                                        <thead className="thead">
                                            <tr>
                                                <th>Day</th>
                                                <th>Hours</th>
                                            </tr>
                                        </thead>
                                        <tbody className="table table-striped">
                                            <tr>
                                                <td>Monday</td>
                                                <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                            <tr>
                                                <td>Tuesday</td>
                                                <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                            <tr>
                                                <td>Wednesday</td>
                                                <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                            <tr>
                                                <td>Thursday</td>
                                                <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                            <tr>
                                                <td>Friday</td>
                                                <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                            <tr>
                                                <td>Saturday</td>
                                                <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                            <tr>
                                                <td>Sunday</td>
                                                <td>9:00 AM - 5:00 PM</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
