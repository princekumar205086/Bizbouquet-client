import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
export default function Manage() {
    // defining api base_url
    const base_url = process.env.REACT_APP_BASE_URL
    // useparms
    // let {id} = useParams()
    //profile calling 
    const [userData, setuserData] = useState([]);

    const getUser = async () =>{
        try {
           const getuserdata = await axios.get(`${base_url}register`)
           setuserData(getuserdata.data)
        } catch (error) {
            console.log(error.data);
        }
    }

    // useeffect
    useEffect(() => {
        getUser()
     }, [])
    
    return (
        <>
            <div className="row p-1">
                <div className="col-lg-3">
                    <div className="list-group">
                        <Link to="#" className="list-group-item list-group-item-action active" aria-current="true">
                            Dashboard
                        </Link>
                        <Link to="/Manageprofile" className="list-group-item list-group-item-action">Manage user</Link>
                        <Link to="/login" className="list-group-item list-group-item-action">Add User</Link>
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
                            {
                                userData.map((user, index)=>{
                                    return <tr key={index}>
                                    <td>{user._id}</td>
                                    <td>{user.fullname}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <Link to={`/view/${user._id}`} className='btn btn-success'>View</Link> 
                                        <Link to={`/update/:${user._id}`} className='btn btn-warning'>Update</Link>
                                        <Link to={`/delete/:${user._id}`} className='btn btn-danger'>Delete</Link>
                                    </td>
                                </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
