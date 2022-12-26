import React from 'react'
import cat_data from '../pages/Category'
import Sidebar from '../pages/pagesidebar/Sidebar'
import '../Category/Viewcategory.css'
export default function Viewcategory() {
  return (
    <>
        <div className="container-fluid bg-secondary bg-opacity-25 p-1">
          <div className="row m-0 p-0">
            <div className="col-lg-2 m-0 p-0">
              <Sidebar active="Category List" cat_data={cat_data}/>
            </div>
            <div className="col-lg-10">
            <div className="row m-0 bg-blue p-2 shadow-lg text-green rounded-top">
                <h4 className="text-center">
                    <strong>
                        <b className="text-green">--------:</b>
                    </strong>{" "}
                    All Business category{" "}
                    <strong>
                        <b className="text-green">:--------</b>
                    </strong>
                </h4>
            </div>
            
            </div>
          </div>
        </div>
    </>
  )
}
