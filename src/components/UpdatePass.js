import React, { useState } from 'react'
import './ForgetPass.css'
import Navbar from '../Navbar'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

export default function UpdatePass() {
    const [data,setdata]=useState({oldpassword:'',newpassword:''})
    const [error,seterror]=useState({oldpassword:'',newpassword:''})
    const [bemail,bsetemail]=useState('')
    const [show,setshow]=useState(false)

const handledata=(e)=>{
    const{name,value}=e.target
    setdata(()=>({...data,[name]:value}))
}

 const navigate = useNavigate();

const sendotp =async()=>{
    if(data.oldpassword.trim()===''  ){
        seterror(()=>({...error,oldpassword:'Please enter old password'}))
    }else{
        seterror(()=>({...error,oldpassword:''}))
    }
if(data){
    try{
//  const response = await axios.post('http://localhost:5000/user/forgetpassword',{email},{headers:{'Content-Type':'application/json'}})
//  if(response.status===200){
 
 
//    }
console.log(data)
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
      <strong class="me-auto"> Error On Updating</strong>
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
            <h1 className='mb-3 mt-3 m-4'>New Password</h1>
            {/* <h3 className=''>Please Create a new password that  you don’t use on any other site.</h3> */}
            <div>
             <div>
                <input type="password" name="oldpassword" id="oldpassword" value={data.oldpassword} onChange={handledata} className='email-input-in-forget' placeholder='Create Your Password' />
                 {error &&  <p className='text-danger ps-2 pt-2'>{error.oldpassword}</p>}
                </div>
                <div className='mt-3'>
                <input type="password" name="newpassword" id="newpassword" value={data.newpassword} onChange={handledata} className='email-input-in-forget' placeholder='Confirm Your Password' />
                </div>
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
