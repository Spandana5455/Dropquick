import React from 'react'
import './Processteps.css'
 


export default function  Processteps() {
  return (
    <>
<div className="relative-div">
  <div className="row flowchart-container">
    <div className="col-12  col-lg-4 flow-item">
      <img src={require('../images/r1.png')} alt="Sign up" className='r-images'/>
      <h3 className='step-head'>Sign Up for free</h3>
      <p className='step-para'>Join today to access exclusive offers and personalized recommendations.</p>
    </div>
    <div className="col-12  col-lg-4 flow-item">
        <div className='middle-step text-center'>
      <img src={require('../images/r2.png')} alt="Explore" className='r-images' />
      <h3 className='step-head'>Explore our Products</h3>
      <p className='step-para'>Discover a wide range of top-quality products curated just for you.</p>
      </div>
    </div>
    <div className="col-12 col-lg-4  flow-item">
      <img src={require('../images/r3.png')} alt="Purchase" className='r-images'/>
      <h3 className='step-head'>Start Purchasing</h3>
      <p className='step-para'>Shop now and enjoy seamless purchasing with fast, secure checkout.</p>
    </div>

<div className='arrow-div-top'>
<img src={require('../images/Arrow.png')} alt="" className='arrow-img-top' />
</div>

<div className='arrow-div-down '>
<img src={require('../images/Arrowdown.png')} alt="" className='arrow-img-down' />
</div>

  </div>
</div>
    </>
  )
}







 