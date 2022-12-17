import React from 'react'
import { Link } from 'react-router-dom'
import '../Home/Featurelocation.css'
export default function Featureslocationcard(props) {
    return (
        <>
            <div className="col-lg-4 mb-2">
                <div className="card p-5 loc-bg" style={{backgroundImage: `url(${props.ldata.l_src})`}}>
                    <div className="card-body text-center p-5">
                        <div className="content p-4">
                            <h5>{props.ldata.l_name}</h5>
                            <Link to='/' className="btn btn-primary">57 Locations</Link>
                        </div>''
                    </div>
                </div>
            </div>
        </>
    )
}
