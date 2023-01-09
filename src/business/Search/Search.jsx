import React from 'react'
import { Link } from 'react-router-dom'
import '../Search/Search.css'

export default function Search() {
  return (
    <>
      <div className="row">
        <div className="col-lg-3">
          <div className="list-group mt-1 rounded-0">
            <Link className="list-group-item list-group-item-action active">Filter</Link>
            <Link className="list-group-item list-group-item-action">Category</Link>
          </div>
          <div className="list-group mt-2 rounded-0">
            <Link className="list-group-item list-group-item-action active">Sort by</Link>
            <Link className="list-group-item list-group-item-action">Newly added</Link>
            <Link className="list-group-item list-group-item-action">old one</Link>
            <Link className="list-group-item list-group-item-action">Most popular</Link>
          </div>
        </div>
        <div className="col-lg-9">
          <h3>Your search result is here!</h3>
          <hr />

          <div className="card">
            <div className="card-body">
              <div className="row">
                <Link to='/searchpage' className=' text-decoration-none'>
                <div className="card">
                  <div className="card-body">
                    <div className="row">
                      <div className="col-lg-2">
                        <img src="/hero.png" alt="" className='border border-primary' height={100} width={100} />
                      </div>
                      <div className="col-lg-10">
                        <div className="business-desc border border-primary">
                          <p>Business Name:- Webdigger</p>
                          <p>Business location:- Rohini</p>                           
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
