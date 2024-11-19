import React from 'react'
import { Link } from 'react-router-dom';
import './NotFound.css';
export default function NotFound() {
  return (

    <>
     <div className="not-found-container">
      <div className="animation-wrapper">
        <h1 className="error-code">404</h1>
        <h2 className="error-message">Page Not Found</h2>
        <p className="error-description">
          Sorry, the page you are looking for doesn't exist. Maybe you took a wrong turn.
        </p>
        <Link to="/" className="home-button">
          Back to Home
        </Link>
      </div>
      <div className="animated-background">
        <div className="ncircle ncircle-1"></div>
        <div className="ncircle ncircle-2"></div>
        <div className="ncircle ncircle-3"></div>
      </div>
    </div>
    </>
  )
}
