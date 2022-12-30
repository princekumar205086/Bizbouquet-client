import React from 'react'
import { Link, useParams } from 'react-router-dom'
export default function Manage() {
    let {id} = useParams()
    return (
        <>
            <div className="row p-1">
                <div className="col-lg-3">
                    <div class="list-group">
                        <Link to="#" class="list-group-item list-group-item-action active" aria-current="true">
                            Dashboard
                        </Link>
                        <Link to="/Manageprofile" class="list-group-item list-group-item-action">Manage user</Link>
                        <Link to="/login" class="list-group-item list-group-item-action">Add User</Link>
                    </div>
                </div>
                <div className="col-lg-9">
                    <table className='table table-bordered table-hover table-striped rounded-top'>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Prince Kumar</td>
                                <td>asliprinceraj@gmail.com</td>
                                <td>
                                    <Link to={`/view/:${id}`} className='btn btn-success'>View</Link>
                                    <Link to={`/update/:${id}`} className='btn btn-warning'>Update</Link>
                                    <Link to={`/delete/:${id}`} className='btn btn-danger'>Delete</Link>
                                    <Link to={`/delete/:${id}`} className='btn btn-danger'>Delete</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
