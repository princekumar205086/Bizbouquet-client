import React from 'react'
import {Link} from 'react-router-dom'

export default function Footer() {
  return (
    <>
        <footer className="container-fluid py-5 bg-blue">
  <div className="row">
    <div className="col-12 col-md">
      <h2>Bizbouquet</h2>
      <small className="d-block mb-3 text-muted">&copy; 2022</small>
    </div>
    <div className="col-6 col-md">
      <h5>Features</h5>
      <ul className="list-unstyled text-small">
        <li><Link className="link-secondary" to='/'>Cool stuff</Link></li>
        <li><Link className="link-secondary" to='/'>Random feature</Link></li>
        <li><Link className="link-secondary" to='/'>Team feature</Link></li>
        <li><Link className="link-secondary" to='/'>Stuff for developers</Link></li>
        <li><Link className="link-secondary" to='/'>Another one</Link></li>
        <li><Link className="link-secondary" to='/'>Last time</Link></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><Link className="link-secondary" to="/">Resource name</Link></li>
        <li><Link className="link-secondary" to="/">Resource</Link></li>
        <li><Link className="link-secondary" to="/">Another resource</Link></li>
        <li><Link className="link-secondary" to="/">Final resource</Link></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>Resources</h5>
      <ul className="list-unstyled text-small">
        <li><Link className="link-secondary" to="/">Business</Link></li>
        <li><Link className="link-secondary" to="/">Education</Link></li>
        <li><Link className="link-secondary" to="/">Government</Link></li>
        <li><Link className="link-secondary" to="/">Gaming</Link></li>
      </ul>
    </div>
    <div className="col-6 col-md">
      <h5>About</h5>
      <ul className="list-unstyled text-small">
        <li><Link className="link-secondary" to="/">Team</Link></li>
        <li><Link className="link-secondary" to="/">Locations</Link></li>
        <li><Link className="link-secondary" to="/">Privacy</Link></li>
        <li><Link className="link-secondary" to="/">Terms</Link></li>
      </ul>
    </div>
  </div>
</footer>
        <div className="row m-0 p-0 bg-blue">
            <div className="col-lg-8 mx-auto p-3">
              <p className='text-green text-center'>All rights are reserved by Bizbouquet &copy;2022 | Powered by Webdiiger</p>
            </div>
        </div>
    </>
  )
}
