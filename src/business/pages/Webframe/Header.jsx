import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom'

export default function Header(props) {
  return (
    <>
        <nav className="navbar navbar-expand-lg bg-blue shadow-lg">
        <div className="container-fluid">
          <Link  className="navbar-brand text-green fw-bolder mx-5" to={props.link}>
            {props.logo}
          </Link>
          <button
            className="navbar-toggler bg-green"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarScroll"
            aria-controls="navbarScroll"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarScroll">
            <ul className="navbar-nav ms-auto me-5 my-2 my-lg-0 navbar-nav-scroll">
              <li className="nav-item">
                <Link className="nav-link active text-green fw-bold" aria-current="page" to={props.link}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-green fw-bold" to={`${props.link}#aboutus`}>
                  About us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-green fw-bold" to="/contact">
                  Contact us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-green fw-bold" to="/Feedback">
                  Feedback us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold btn bg-green btn-sm p-1 m-1" to="/login">
                  Register/Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold btn bg-green btn-sm p-1 m-1" to="/add_listing">
                  Add Listing
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}
