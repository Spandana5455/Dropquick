import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom'
export default function Footer() {
    const navigate =useNavigate()
    return (
        <>
            <footer >
                <div className='footer-part-1'>
                    <h1>Subscribe to news letter</h1>
                    <div>
                        <input type="email" name="email" className='text-center' id="email-in-footer" placeholder='Enter E-mail' />
                        <button className='btn button-in-footer  btn-outline-success'> Subscribe</button>
                    </div>
                </div>
                <div  >
                    <div className="row  ">
                        <div className='col-sm-6 col-12 col-md-5'>
                            <div className=" d-flex   align-items-center">
                                <div>
                                    <img src={require('./images/logo2.png')} alt="" className='logo-in-footer'/>
                                </div>
                                <div className='ms-2'>
                                    <h1 className='footer-head'>Drop Quick</h1>
                                </div>
                            </div>
                            <p className='footer-text pt-2'>Collaborating with trustworthy courier providers to guarantee that your items get at their destination promptly and securely. Enjoy flawless delivery with unparalleled efficiency and real-time tracking!</p>
                           <div className='d-flex justify-content-center'>
                            <div className='footer-icons-main'>
                                <div>
                                    <a href=""><i className="fa-brands fa-square-facebook footer-icons"></i></a>
                                </div>
                                <div>
                                    <a href="">  <i className="fa-brands fa-square-x-twitter footer-icons"></i></a>
                                </div>
                                <div>
                                    <a href=""> <i className="fa-brands fa-square-instagram footer-icons"></i></a>
                                </div>
                                <div>
                                    <a href=""> <i className="fa-brands fa-linkedin footer-icons"></i></a>
                                </div>
                                <div>
                                    <a href=""> <i className="fa-brands fa-square-youtube footer-icons"></i></a>
                                </div>
                            </div>
                           </div>
                        </div>
                        <div className="col-sm-6 col-12 col-md-2">
                            <div>
                                <h4 className='footer-headings' >About Us</h4>
                                <p className='footer-text' onClick={()=>{navigate('/faqs')}}>FAQ'S</p>
                                <p className='footer-text' onClick={()=>{navigate('/aboutus')}}>About Us</p>
                                <p className='footer-text'  onClick={()=>{navigate('/testinominal')}}>Testinominal</p>
                                <p className='footer-text' onClick={()=>{navigate('/whyus')}}>Why Us</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12 col-md-2">
                            <div>
                                <h4 className='footer-headings'> Services</h4>
                                <p className='footer-text' onClick={()=>{navigate('/orderprocess')}}>Order Processing</p>
                                <p className='footer-text'>Shipping</p>
                                <p className='footer-text' onClick={()=>{navigate('/Services')}}>Customer Services</p>
                                <p className='footer-text' onClick={()=>{navigate('/helpcenter')}}>Help Center</p>
                            </div>
                        </div>
                        <div className="col-sm-6 col-12 col-md-3">
                            <div>
                                <h4 className='footer-headings'>Contact US</h4>
                                <p className='footer-text'>+91 - 1234567890</p>
                                <p className='footer-text'>dropquick.in@gamil.com</p>
                                <p className='footer-text'> 4th Floor And 5th Floor, Plot No: 4 & 5,
                                    behind Image Hospital,
                                    Arunodaya Colony, Vittal Rao Nagar, Madhapur, Telangana - 500081
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
