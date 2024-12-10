import React from 'react';
import Navbar from '../Navbar'
import Footer from '../Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ContactOptions.css';


const ContactOptions = () => {
    return (
        <>
        <Navbar/>
        <div className="container mt-5">
        <div className="card card-custom">
          <div className="card-body">
            <span className="fw-bold fs-4 flex-grow-1">The Fastest Way To Contact Drop Quick</span>
            <span className='fw-bold fs-3 gap-custom'>&gt;</span>
          </div>
        </div>
        <div className="card card-custom">
          <div className="card-body">
            <span className="fw-bold fs-4 flex-grow-1">Contacting Drop Quick</span>
            <span className='fw-bold fs-3 gap2-custom'>&gt;</span>
          </div>
        </div>
        </div>
        </>
    );
};

export default ContactOptions;