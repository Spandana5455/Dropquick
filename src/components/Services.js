import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import './Services.css'
export default function Services() {
    const Details = [
        {img:'',name:'Order Details and Return'},
        {img:'',name:'Membership/ Subscription'},
        {img:'',name:'Login and Password'},
        {img:'',name:'Something Else'}

    ]
  return (
  <>
  <div>
    <Navbar/>
    <div className="service-parent">
        <div  className="service-child container">
{Details.map((data,i)=>{
    return (<div  key={i} className='card-in-service'>
   <div className="service-circle"></div>
   <h5>{data.name} </h5>
    </div>)
})} 
   </div>
     
    </div>
   <Footer/>
   </div>
   </>
  )
}
