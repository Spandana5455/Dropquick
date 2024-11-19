import React from 'react';
import './Navbar.css';
import logo from '../src/images/logo1.svg'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
    const navigate = useNavigate()
    const [cartCount, setCartCount] = useState(1);
    return (
        <>
            <nav className="navbar    sticky-top shadow-sm " id='main-navbar-bg'>
                <div className="container-fluid d-flex align-items-center">

                    {/* Logo aligned with navigation */}
                    <img src={logo} className="navbar-brand text-center " style={{ cursor: 'pointer' }} onClick={() => { navigate('/') }} alt="" />

                    {/* Toggler visible only on mobile screens */}
                    <button
                        className="navbar-toggler d-lg-none ms-auto"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#offcanvasDarkNavbar"
                        aria-controls="offcanvasDarkNavbar"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navbar content for large screens and above */}
                    <div className="d-none d-lg-flex navbar-width">
                        <ul className="navbar-nav flex-row gap-5 align-items-center  mb-lg-0">
                            <li className="nav-item dropdown">
                                <span
                                    className="nav-link   main-nav-text"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ display: "flex", alignItems: "center" }}
                                  
                                >
                                    Products <span className=" mt-1 material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span>
                                </span>
                                <ul className="dropdown-menu dropdown-menu-light " id='drop-down-show'>
                                    <li><span className="dropdown-item">Electronics</span></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><span className="dropdown-item">Furniture</span></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><span className="dropdown-item">Something else here</span></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link main-nav-text" aria-current="page" onClick={()=>{navigate('/aboutus')}}>About Us</span>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link main-nav-text" onClick={() => { navigate('/integrations') }}>Integrations</span>
                            </li>
                            <li className="nav-item dropdown">
                                <span
                                    className="nav-link   main-nav-text"
                                   
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    style={{ display: "flex", alignItems: "center" }}
                                >
                                    Resources <span className=" mt-1 material-symbols-outlined">
                                        keyboard_arrow_down
                                    </span>
                                </span>
                                <ul className="dropdown-menu dropdown-menu-light" id='drop-down-show'>
                                    <li className=' '><span className="dropdown-item " onClick={() => { navigate('/services') }}>Customer Services</span></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><span className="dropdown-item">Blogs</span></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><span className="dropdown-item">Help Center</span></li><li><hr className="dropdown-divider" /></li>
                                    <li><span className="dropdown-item">Trade Assurance</span></li>
                                </ul>
                            </li>
                        </ul>

                        {/* Right aligned icons and buttons */}
                        <ul className="navbar-nav flex-row gap-4 align-items-center mb-2 ms-5 mb-lg-0 m-auto second-part-links-in-nav">
                            <li className="nav-item position-relative" onClick={() => { navigate('/cart') }}>
                                <span className="nav-link material-symbols-outlined nav-icons">
                                    shopping_cart
                                </span>
                                {cartCount > 0 && (
                                    <span
                                        className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                                        style={{ fontSize: '0.8rem' }}
                                    >
                                        {cartCount}
                                    </span>
                                )}
                            </li>

                            <li className="nav-item" onClick={() => { navigate('/signup') }}>
                                <button className="btn  sign-in-button-nav">Sign In</button>
                            </li>
                            <li className="nav-item" onClick={() => { navigate('/login') }}>
                                <span className="nav-link material-symbols-outlined nav-icons">
                                    account_circle
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* Offcanvas for mobile screens */}
                    <div
                        className="offcanvas offcanvas-end text-bg-light"
                        tabIndex="-1"
                        id="offcanvasDarkNavbar"
                        aria-labelledby="offcanvasDarkNavbarLabel"
                    >
                        <div className="offcanvas-header">

                            <button
                                type="button"
                                className="btn-close btn-close-danger"
                                data-bs-dismiss="offcanvas"
                                aria-label="Close"
                            ></button>
                        </div>
                        <div className="offcanvas-body">
                            <ul className="navbar-nav  gap-5 align-items-center  ">
                                <li className="nav-item dropdown">
                                    <span
                                        className="nav-link dropdown-toggle main-nav-text"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Products
                                    </span>
                                    <ul className="dropdown-menu dropdown-menu-light " id='drop-down-show'>
                                        <li><span className="dropdown-item">Action</span></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><span className="dropdown-item">Another action</span></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><span className="dropdown-item">Something else here</span></li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link main-nav-text" aria-current="page" >About Us</span>
                                </li>
                                <li className="nav-item">
                                    <span className="nav-link main-nav-text">Integrations</span>
                                </li>
                                <li className="nav-item dropdown">
                                    <span
                                        className="nav-link dropdown-toggle main-nav-text"
                                       
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        Resources
                                    </span>
                                    <ul className="dropdown-menu dropdown-menu-light" id='drop-down-show'>
                                        <li className=' '><span className="dropdown-item ">Action</span></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><span className="dropdown-item">Another action</span></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><span className="dropdown-item">Something else here</span></li>
                                    </ul>
                                </li>
                            </ul>

                            {/* Right aligned icons and buttons */}
                            <ul className="navbar-nav   gap-5  align-items-center">
                                <li className="nav-item">
                                    <span className="nav-link material-symbols-outlined nav-icons">
                                        shopping_cart
                                    </span>
                                </li>
                                <li className="nav-item" onClick={() => { navigate('/signup') }}>
                                    <button className="btn  sign-in-button-nav">Sign In</button>
                                </li>
                                <li className="nav-item" onClick={() => { navigate('/login') }}>
                                    <span className="nav-link material-symbols-outlined nav-icons">
                                        account_circle
                                    </span>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}
