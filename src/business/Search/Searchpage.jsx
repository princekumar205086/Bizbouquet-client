import React from 'react'
import {Link} from 'react-router-dom'
export default function Searchpage() {
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
            <div className="row">
                <div className="card">
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-4 ">
                                <img src="/hero.png" alt="" className='border border-primary' height={320} width={320}  />
                            </div>
                            <div className="col-lg-8">
                                <p>Business Name:- Webdigger</p>
                                <p>Business Owner:- Webdiggr</p>
                                <p>Business Location:- Webdiggr</p>
                                <p>Business Opening Time:- Webdiggr</p>
                                <p>Business Closing Time:- Webdiggr</p>
                                <p>About: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam reiciendis, mollitia doloremque, corrupti vel consequuntur a aspernatur, alias sequi facere delectus temporibus voluptas cumque ab? Veniam ex, inventore blanditiis consectetur accusantium aliquid ut sequi voluptas repellendus consequuntur obcaecati officiis provident nesciunt sit beatae placeat quaerat dolore assumenda illo, ratione, a iure ab facere. Odio numquam amet dolores quos enim assumenda recusandae pariatur dolore optio nobis libero ad impedit delectus dolorum ea vero accusamus ipsa est possimus laudantium tempore, deserunt placeat! Ab ratione id incidunt odit eveniet perferendis sequi debitis ad sint rem quos minima maxime obcaecati harum, impedit ut dolores!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </>
  )
}
