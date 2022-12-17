import React from 'react'
import locationdata from '../Locationdata'
import Centerbutton from './Centerbutton'
import Featureslocationcard from './Featureslocationcard'
import '../Home/Home.css'
export default function FeatureLocation() {
    return (
        <>
            <div className="row m-0 bg-blue p-2 shadow-lg text-green">
                <h4 className="text-center">
                    <strong>
                        <b className="text-green">--------:</b>
                    </strong>{" "}
                    Features location{" "}
                    <strong>
                        <b className="text-green">:--------</b>
                    </strong>
                </h4>
            </div>
            <div className="row bg-light bg-featurelocation m-0 p-0">
                <div className="container p-3">
                    <div className="row">
                        {
                            locationdata.map((ldata)=>((<Featureslocationcard ldata={ldata}/>)))
                        }
                    </div>
                </div>
                <Centerbutton/>
            </div>
        </>
    )
}
