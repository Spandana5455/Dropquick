import React from "react";
import Navbar from '../Navbar'
import Footer from '../Footer'
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./helpcenter.css";

const HelpCenter = () => {
    return (
      <>
        <Navbar />
        <div className="help-center"
        style={{
            backgroundColor: "#d3e1dc",
            height: "100vh",
            width: "100vw",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            margin: 0,
            padding: 0,
        }}>
          <div className="container mt-5 d-flex flex-column align-items-center flex-grow-1" style={{ flex: "1"}}>
            <div className="row mb-4 gx-3 w-100 d-flex justify-content-center">
              <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3 mb-sm-0">
                <div className="card text-center shadow-sm"
                style={{
                    width: "500px",
                    height: "300px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                }}>
                  <div className="card-body d-flex justify-content-start">
                    <Link to="/faqs" className="text-dark">
                      <h5 className="card-title fw-bold fs-1 text-dark">FAQS</h5>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-3 mb-sm-0">
                <div className="card text-center shadow-sm"
                style={{
                    width: "500px",
                    height: "300px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                }}>
                  <div className="card-body d-flex justify-content-start">
                    <Link to="/contactoptions" className="text-dark">
                      <h5 className="card-title fw-bold fs-1 text-dark">Contact Us</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="row mb-4 w-100 d-flex justify-content-center">
              <div className="col-12 col-md-4 d-flex justify-content-center">
                <div className="card text-center shadow-sm"
                style={{
                    width: "500px",
                    height: "300px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                }}>
                  <div className="card-body d-flex justify-content-start">
                    <Link to="/legaldocs" className="text-dark">
                      <h5 className="card-title fw-bold fs-1">Legal Documents</h5>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
     </>
    );
  };

export default HelpCenter;