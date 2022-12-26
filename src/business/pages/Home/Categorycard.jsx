import React from 'react'
import {BiHotel, } from 'react-icons/bi'
export default function Categorycard(props) {
  return (
    <>
      <div className="card m-1 p-0 shadow-lg border-1 border-primary">
        <div className="card-body text-center m-0 p-0">
          <BiHotel size={100} className='text-primary'/>
        </div>
        <div className="card-footer m-0 p-0 text-center">
          <p>{props.catdata.cat_name}</p>
        </div>
      </div>
    </>
  )
}
