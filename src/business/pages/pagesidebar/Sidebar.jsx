import React from 'react'
import { Link } from 'react-router-dom'
export default function Sidebar(props){
    return (
        <>
            <div className="list-group m-0 p-0">
                <Link to="#" className="list-group-item list-group-item-action active" aria-current="true">
                    {props.active}
                </Link>
                {
                    props.cat_data.map((value)=>{
                        return((<Link to="" key={value.cat_id} className="list-group-item list-group-item-action" >{value.cat_name}</Link>))
                    })
                }
            </div>
        </>
    )
}
