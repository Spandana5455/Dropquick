import React from 'react'
import '../components/About.css'
import w1 from '../images/w1.png'
import w2 from '../images/w2.png'
import w3 from '../images/w3.png'
import Navbar from '../Navbar'
import Footer from '../Footer'


export default function WhyUs() {
    return (
        <>
        <Navbar/>
            <div className="why-us-main border">
                <div className="why-us-inner container">
                    <h1 className='why-us'>Why US</h1>
                    <div className="why-us-cards-main">
                        <div className="why-us-cards-inner   text-center border rounded p-2">
                            <h3 className='pt-3 why-heading'>Easy and Fast Transactions</h3>
                            <div className="text-center my-3">
                                <img src={w1} alt="" className="rounded-circle" />
                            </div>
                            <p className='why-content'>Our platform is designed to streamline the process, ensuring a seamless experience from order to delivery.</p>
                        </div>

                        <div className="why-us-cards-inner  text-center border rounded  p-2">
                            <h3  className='pt-3 why-heading'>Wide Range of Products</h3>
                            <div className="text-center my-3">
                                <img src={w2} alt="" className="rounded-circle" />
                            </div>
                            <p className='why-content'>We offer an extensive product catalog across multiple categories, ensuring users always have access to the latest trends.</p>
                        </div>

                        <div className="why-us-cards-inner  text-center border rounded p-2">
                            <h3 className='pt-3 why-heading'>Affordable Pricing</h3>
                            <div className="text-center my-3">
                                <img src={w3} alt="" className="rounded-circle" />
                            </div>
                            <p className='why-content'>Our platform negotiates directly with suppliers to provide the best deals, ensuring lower prices for users.</p>
                        </div>
                    </div>

                </div>
            </div>
<Footer/>
        </>
    )
}
