import React from 'react'
import {Link} from 'react-router-dom'
export default function Centerbutton() {
  return (
    <>
        <div className="container">
            <div className="row">
                <div className="col-lg-3 mx-auto" style={{position:'relative', left:'80px'}}><Link to='/' className='btn bg-blue text-green'>View more</Link></div>
            </div>
        </div>
    </>
  )
}
