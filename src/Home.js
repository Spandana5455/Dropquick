import React from 'react'
import Brands from './components/Brands'
import Processteps from './components/Processteps'
import './Home.css'
import Footer from './Footer'
import Reviews from './components/Reviews'
import RotatingCircle from './RotatingCircle'
import Navbar from './Navbar'
import NewArrives from './components/NewArrives'
import HomeSlider from './HomeSlider'
 

export default function Home() {
  return (
    <>  
    <Navbar/>
    <HomeSlider/>
    <NewArrives/>
    <Brands/>
    <Processteps/>
    <div>
        <h1 className='cirle-head'>What We Do Exactly ? </h1>
        <RotatingCircle/>
    </div>
    <h1 className='cirle-head'> Buyer Testimonial</h1>
    <Reviews/>
    <Footer/>
    </>
  )
}
