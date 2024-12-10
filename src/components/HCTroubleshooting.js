import React from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'
import "bootstrap/dist/css/bootstrap.min.css";

const HCTroubleshooting = () => {
  return (
    <>
    <Navbar/>
    <div className="container mt-5">
    <div className="mb-4">
      <div className="card">
        <div className="card-header no-border">
          <h5 className="mb-0 fw-bold fs-1">Help To Login</h5>
        </div>
        <div className="card-body">
          <p>No info available at the moment.</p>
        </div>
      </div>
    </div>
    <div>
      <div className="mb-4">
        <div className="card">
          <div className="card-header no-border">
            <h5 className="mb-0 fw-bold fs-1">Clear Your Cache & Cookies</h5>
          </div>
          <div className="card-body">
            <p>No info available at the moment.</p>
          </div>
        </div>
      </div>
    </div>
    </div>
    <Footer/>
    </>
  )
}

export default HCTroubleshooting;