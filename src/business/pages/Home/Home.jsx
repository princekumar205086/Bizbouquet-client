import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
import Herosection from '../Herosection/Herosection'
import Category from './Category';
import FeatureLocation from './FeatureLocation'
import Featureslisting from './Featureslisting'
import Newsletter from './Newsletter'
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Herosection/>
        <Featureslisting/>
        <Category/>
        <FeatureLocation/>
        <Newsletter/>
      </div>
    </div>
  )
}
export default Home