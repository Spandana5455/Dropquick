import React from 'react'
import '../components/About.css';
import img from '../images/aboutimg.png'
import Footer from '../Footer';
import Navbar from '../Navbar';

export default function About() {
    return (
        <>
        <Navbar/>
            <div className="card about-main mb-3 mt-4 container shadow-sm "  >
                <h1 className='about-us-head'>About Us</h1>
                <div className="about-inner pt-2 ">
                    <div className="col-md-5 col-12 ">
                        <img src={img} className="img-fluid rounded-start about-img" alt="..."   />
                    </div>
                    <div className="col-md-7 col-12 ">
                        <div className="card-body">
                            <div className="card-text about-content">
                                <p>Welcome to DropQuick, your one-stop destination for high-quality electronics and furniture! At DropQuick, we’re committed to bringing you the best in modern technology and stylish home furnishings, all at affordable prices.</p>

                                <p>Our mission is to simplify your shopping experience by offering a wide range of products from trusted brands, ensuring that you find the perfect item to suit your needs. Whether you're upgrading your home with the latest electronics or enhancing your space with elegant furniture, DropQuick is here to provide convenience, value, and satisfaction with every purchase.</p>

                                <p>We believe in quality, affordability, and exceptional customer service. From innovative gadgets to timeless furniture pieces, we carefully curate our inventory to meet your lifestyle needs. With a focus on fast delivery, secure payments, and responsive support, we aim to make your shopping journey easy and enjoyable.</p>

                                <p>Thank you for choosing DropQuick. Let us help you create a home and life you’ll love!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
