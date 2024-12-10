import React from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import { lazy,Suspense } from 'react';
import HomeLoader from './components/HomeLoader';
import NotFound from './components/NotFound';
 
 

const Home = lazy(()=>import ('./Home'))
const Login = lazy(()=>import ('./Login'))
const Signup = lazy(()=>import ('./SignIn'))
const About = lazy(()=>import ('./components/About'))
const WhyUs = lazy(()=>import ('./components/WhyUs'))
const Faqs = lazy(()=>import ('./components/Faqs'))
const Service = lazy(()=>import ('./components/Services'))
const Processteps = lazy(()=>import ('./components/Processteps'))
const Testinominal = lazy(()=>import ('./components/Reviews'))
const Cart = lazy(()=>import ('./components/Cart'))
const Intergrations = lazy(()=>import ('./components/Intergrations'))
const ForgetPass = lazy(()=>import ('./components/ForgetPass'))
const VerifyAccount = lazy(()=>import ('./components/VerifyAccount'))
const UpdatePass = lazy(()=>import ('./components/UpdatePass'))
const HelpCenter = lazy(()=>import ('./components/helpcenter'))
const TroubleshootingFAQs = lazy(()=>import ('./components/TroubleshootingFAQs'))
const ContactOptions = lazy(()=>import ('./components/ContactOptions'))
const LegalDocs = lazy(()=>import('./components/LegalDocs'))




export default function App() {
  return (
     <>
     <BrowserRouter>
       <Suspense fallback={HomeLoader}> 
      <Routes>
      <Route path='*'  element={<NotFound/>}/>
        <Route path='/'  element={<Home/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/signup'  element={<Signup/>}/>
        <Route path='/aboutus'  element={<About/>}/>
        <Route path='/whyus'  element={<WhyUs/>}/>
        <Route path='/load'  element={<HomeLoader/>}/>
        <Route path='/faqs'  element={<Faqs/>}/>
        <Route path='/Services'  element={<Service/>}/>
        <Route path='/orderprocess'  element={<Processteps/>}/>
        <Route path='/testinominal'  element={<Testinominal/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/integrations'  element={<Intergrations/>}/>
        <Route path='/forgetpassword'  element={<ForgetPass/>}/>
        <Route path='/verifyotp'  element={<VerifyAccount/>}/>
        <Route path='/updatepassword'  element={<UpdatePass/>}/>
        <Route path='/helpcenter' element={<HelpCenter/>}/>
        <Route path='/TroubleshootingFAQs' element={<TroubleshootingFAQs/>}/>
        <Route path='/ContactOptions' element={<ContactOptions/>}/>
        <Route path='/LegalDocs' element={<LegalDocs/>}/>

      </Routes>
      </Suspense>
     </BrowserRouter>
     
     </>
  )
}
