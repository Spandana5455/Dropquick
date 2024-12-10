import React from 'react';
import Navbar from '../Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LegalDocs.css';

const LegalDocs = () => {
  return (
    <>
    <Navbar/>
      <div className="container mt-5">
        <div className="card custom">
          <div className="card-body">
            <span className="fw-bold fs-4 flex-grow-1">Privacy Policy</span>
            <span className="fw-bold fs-3 custom-gap">&gt;</span>
          </div>
        </div>
    </div>
    </>
  );
};

export default LegalDocs;