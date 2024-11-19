import React, { useState } from 'react'
import './ForgetPass.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function ForgetPass() {
    const [email,setemail]=useState('')
    const [bemail,bsetemail]=useState('')
    const [show,setshow]=useState(false)


 const navigate =useNavigate()
const sendotp =async()=>{
if(email){
    try{
 const response = await axios.post('http://localhost:5000/user/forgetpassword',{email},{headers:{'Content-Type':'application/json'}})
 if(response.status===200){
  const data =response.data
 navigate('/verifyotp',{state:{data}})
 
   }
    }
    catch(e){
        console.log(e)
        bsetemail(e.response.data)
        setshow(true)
        setTimeout(()=>{
            setshow(false)
        },5000)
    }}

}
  return (
  <>
  <Navbar/>
  <div className="forget-parent">
 {show && <div class="toast-container position-fixed top-5 end-0 p-3">
  <div id="liveToast" class="toast show" role="alert" aria-live="assertive" aria-atomic="true" data-bs-autohide="false">
    <div class="toast-header">
      <img src="..." class="rounded me-2" alt="..."/>
      <strong class="me-auto"> Login Error</strong>
      <small>Just now</small>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body">
      {bemail}
    </div>
  </div>
</div>}

    <div className="forget-child">
        <div className='forget-form'>
            <h1 className='mb-3 mt-3 m-4'>Forget Password</h1>
            <div>
                <div className='mb-3 text-center fs-5'>
                <label htmlFor="email" >Enter Your Email Address</label>
                </div>
                <input type="email" name="email" id="email" value={email} onChange={(e)=>{setemail(e.target.value)}} className='email-input-in-forget' placeholder='Enter Your Email Address' />
            </div>
            <div className='mt-4'>
                <button className='btn btn-success otp-btn-in-forget' onClick={sendotp}>Send OTP</button>
            </div>
        </div>
    </div>
  </div>
  <Footer/>
  </>
  )
}
