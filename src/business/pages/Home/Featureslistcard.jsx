import React from "react";
import { GrLocation } from "react-icons/gr";
import { SlCalender } from "react-icons/sl";
import { BiSupport } from "react-icons/bi";
import { GoGlobe, GoVerified } from "react-icons/go";

export default function Featureslistcard(props) {
  return (
    <>
      <div className="card p-2 m-2 shadow-lg">
        <div className="card-img-top shadow-lg">
          <img
            src={`businessDb/${props.carddata.b_src}`}
            alt=""
            width="100%"
            height="200px"
          />
        </div>
        <div className="card-body">
          <h5 className="h6 fw-bold">{props.carddata.b_name}</h5>
          <p className="small fw-light">
            <GrLocation /> {props.carddata.b_loc} <SlCalender /> {props.carddata.b_doc} <BiSupport /> {props.carddata.b_contact}
          </p>
          <p className="small">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A, dolorum
            sit. Eos illum quam
          </p>
        </div>
        <div className="card-footer m-0 p-0">
          <p>
          {props.carddata.b_owner} <GoVerified size={12} className='text-primary' />
            &nbsp;
            <GoGlobe size={12} className='text-success' /> <span className="small text-primary">http://www.webdiiger.in</span>
          </p>
        </div>
      </div>
    </>
  );
}
