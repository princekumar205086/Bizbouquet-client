import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function View() {
  // defining api base_url
  const base_url = process.env.REACT_APP_BASE_URL
  const {id} = useParams();
  // setting data state
  const [singleData, setSingleData] = useState()

  // getting single data
  const getSingleUser = async (id) =>{
    try {
       const getuserdata = await axios.get(`${base_url}register/${id}`)
       setSingleData(getuserdata.data)
    } catch (error) {
        console.log(error.data);
    }
}

  useEffect(()=>{
    getSingleUser(id);
  }, [id])

  return (
    <>
    <h1>hello</h1>
    {
      singleData.map((single)=>{
        return <>
            <div className="card" key={single._id}>
              <div className="card-body">
                {single.fullname}
              </div>
            </div>
        </>
      })
    }
    </>
  )
}
