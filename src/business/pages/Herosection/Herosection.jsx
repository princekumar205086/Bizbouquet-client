import React from "react"
import "../Herosection/Herosection.css"
export default function Herosection() {
  return (
    <>
      <div className="heroSection text-center">
        <div className="card bg-transparent border-0 mt-5">
            <div className="card-bdoy my-5">
            <section className="mt-5">
        <h2 className="text-blue bg-transparent">Biggest Business Directory in the World</h2>
        <p className="text-white">
          <q>
            It is a long established fact that a reader will be distracted by
            the readable content of a page.
          </q>
        </p>
        <div className="row">
          <div className="mx-auto col-lg-7">
            <div className="input-group">
              <input type="search" name="" className="form-control shadow-lg" placeholder="Enter some input to search!" />
              <input type="button" value="Search" className="btn btn-success shadow-lg" />
            </div>
          </div>
        </div>
        </section>
            </div>
        </div>
      </div>
    </>
  )
}
