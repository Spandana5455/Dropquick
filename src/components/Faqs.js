import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useEffect } from 'react'
import './Brands.css'
import AOS from 'aos';
import f1 from '../images/f1.png'


export default function Faqs() {
    useEffect(() => {
        AOS.init({
          duration: 2500,  
          once: true,    
        });
      }, []);
  return (
   <>
   <div>
   <Navbar/>
    <div className="faqs-main container">
       <div className="row ">
        <div className="col-sm-12 col-md-4">
            <img src= {f1} alt="FAQs Illustration" style={{ maxWidth: "100%", height: "auto"}} />
        </div>
        <div className="col-sm-12 col-md-8">
            <div>
                <h5  className='faq-qes' > What problems does your product solve, or  how  does it improve customer’s lives ?</h5>
                <p className='faq-ans' data-aos="fade-left" data-aos-delay="300">Drop quick’s dedication to understanding and prioritizing customer’s needs. This could include personalized services, attentive customer support and commitment to resolving issues quickly and efficiently.</p>
                <h5  className='faq-qes'>Why should customers trust Dropquick business over other ? </h5>
                <p className='faq-ans' data-aos="fade-left" data-aos-delay="300">we prioritize transparency, reliability, and quality in every interaction. our commitment to customer satisfaction means we provide top-notch products/services that are consistently delivered on time, with a focus on customer support that goes above and beyond.</p>   
                   <h5  className='faq-qes'>How do you handle customer support and what can customers expect if they have an issue with their order ?</h5>
                <p className='faq-ans'  data-aos="fade-left" >Customer support is centered on delivering quick and compassionate assistance to every customer. if a customer has an issue with their order, they can expect a prompt response and clear resolution process. </p>
            </div>
        </div>
       </div>
    </div>
   <Footer/>
   </div>
   
   </>
  )
}
