import React from 'react'

export default function Profile() {
    return (
        <>
            <div className="card">
                <div className="card-header m-0">
                    <div className="">
                        <div className="row">
                            <div className="col-lg-9">
                                <h5 className="ml-3 my-auto">
                                    <i className="fas fa-id-card navbar-brand"></i> Profile
                                </h5>
                            </div>
                            <div className="col-lg-3">
                                <p className="my-auto"><i className="fas fa-info-circle text-primary mr-3 float-end"></i></p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                            <button className="nav-link active" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="true">My Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="update_profile-tab" data-bs-toggle="tab" data-bs-target="#update_profile" type="button" role="tab" aria-controls="update_profile" aria-selected="false">Update Profile</button>
                        </li>
                        <li className="nav-item" role="presentation">
                            <button className="nav-link" id="change_password-tab" data-bs-toggle="tab" data-bs-target="#change_password" type="button" role="tab" aria-controls="change_password" aria-selected="false">Change Passsword</button>
                        </li>
                    </ul>
                    {/* <!-- profile card --> */}
                    <div className="tab-content" id="profile">
                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="profile">
                            {/* <!-- Profile informatin nav panel --> */}
                            <div className="row">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-3 text-center">
                                                <img src="<?= base_url('assets/image/avatar-2.jpg'); ?>" className="card-img-top rounded-circle border border-5 border-primary justify-content-center mx-auto mt-1 shadow-lg" />

                                                <img src="<?= base_url('assets/image/avatar-1.jpg'); ?>" className="card-img-top rounded-circle border border-5 border-primary justify-content-center mx-auto mt-1 shadow-lg" />


                                                <img src="<?= base_url('assets/image/avatar-3.jpg'); ?>" className="card-img-top rounded-circle border border-5 border-primary justify-content-center mx-auto mt-1 shadow-lg" />
                                                <bitton className="btn btn-sm btn-success mt-1"><i className="fas fa-edit"></i> Edit image</bitton>
                                            </div>
                                            <div className="col-9">
                                                <table className="table table-hovered table-responsive">
                                                    <thead>
                                                        <tr className="border border-bottom border-primary">
                                                            <th colspan="2" className="text-center my-auto">
                                                                <i className="fas fa-address-card"></i> Profile informatin <i className="fas fa-info-circle text-warning"></i>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <th colspan="2">Name :- </th>
                                                            <td colspan="2">Prince Kumar</td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Father Name :- </th>
                                                            <td colspan="2">Abc xyz</td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Mother Name :- </th>
                                                            <td colspan="2">bhcjhbjh</td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Date of Birth :- 7845522 </th>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Sex :- </th>
                                                            <td colspan="2">Male</td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Aadhar No. :- </th>
                                                            <td colspan="2">784512457898</td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Eamil Id :- </th>
                                                            <td colspan="2">asliprinceraj@gmail.com</td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Contact no :- </th>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Alternate Contact :- </th>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Address :- </th>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">City :- </th>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">State :- </th>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                        <tr>
                                                            <th colspan="2">Pincode :- </th>
                                                            <td colspan="2"></td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="update_profile" role="tabpanel" aria-labelledby="update_profile">
                            {/* <!-- Profile update nav panel --> */}
                            <div className="row">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <h5 className="text-center"><i className="fas fa-edit"></i> Edit your profile here...</h5>
                                            <hr className="" />

                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for="First Name"><i className="fas fa-user-circle"></i> First Name</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="text" className="form-control form-control-sm rounded-0" name="stu_first_name" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for="Last Name"><i className="fas fa-user-circle"></i> Last Name</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="text" className="form-control form-control-sm rounded-0" name="stu_last_name" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for="Father Name"><i className="fas fa-user-circle"></i> Father Name</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="text" className="form-control form-control-sm rounded-0" name="stu_father_name" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for="Mother Name"><i className="fas fa-user-circle"></i> Mother Name</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="text" className="form-control form-control-sm rounded-0" name="stu_mother_name" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for=""><i className="fas fa-calendar-alt"></i> Date Of Birth</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="date" className="form-control form-control-sm rounded-0" name="stu_dob" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for=""><i className="fas fa-mobile"></i> Contact No</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="number" className="form-control form-control-sm rounded-0" name="stu_contact" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for=""><i className="fas fa-phone"></i>Alternate No.</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="number" className="form-control form-control-sm rounded-0" name="stu_alt_contact" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for=""><i className="fas fa-map-marker"></i> Address</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="text" className="form-control form-control-sm rounded-0" name="stu_address" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for=""><i className="fas fa-map-pin"></i> Pincode</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="text" className="form-control form-control-sm rounded-0" name="stu_pincode" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for=""><i className="fas fa-map"></i> City</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="text" className="form-control form-control-sm rounded-0" name="stu_city" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for=""><i className="fas fa-location-arrow"></i> State</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="text" className="form-control form-control-sm rounded-0" name="stu_state" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-12">
                                                    <input type="submit" name="update" value="Save your edited info" className="btn btn-primary btn-block" />
                                                </div>
                                            </div>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="change_password" role="tabpanel" aria-labelledby="change_password">
                            {/* <!-- Update password nav panel --> */}
                            <div className="row">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="row">
                                            <h5 className="text-center"><i className="fas fa-lock"></i> Change password here...</h5>
                                            <hr className="" />
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for=""><i className="fas fa-lock"></i> Old Password</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="password" className="form-control form-control-sm rounded-0" name="old_password" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for=""><i className="fas fa-lock"></i> New Password</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="password" className="form-control form-control-sm rounded-0" name="new_password" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-3">
                                                    <label for=""><i className="fas fa-lock"></i> Retype Password</label>
                                                </div>
                                                <div className="col-9">
                                                    <input type="password" className="form-control form-control-sm rounded-0" name="new_password_confirm" />
                                                </div>
                                            </div>
                                            <div className="form-group row">
                                                <div className="col-12">
                                                    <input type="submit" value="Save your edited password" className="btn btn-primary btn-block" name="change_password" />
                                                </div>
                                            </div>
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
