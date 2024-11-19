import React, { useEffect, useRef } from 'react';
import './RotatingCircle.css';
import c1 from './images/delivery.png';
import c2 from './images/order.png';
import c3 from './images/inventory.png';
import c4 from './images/payment.png';
import c5 from './images/satisfaction.png';
import c6 from './images/shipping.png';

const RotatingCircle = () => {
    const circleRef = useRef(null);
    const itemRefs = useRef([]); // Create a ref to store item references
    const itemsCount = 6; // Total number of items

    useEffect(() => {
        let currentAngle = 0;

        const rotateCircle = () => {
            // Rotate by 60 degrees
            currentAngle += 60; // Change this value to 30 degrees if needed
            if (circleRef.current) {
                circleRef.current.style.transform = `rotate(${currentAngle}deg)`;
                circleRef.current.style.transition = 'transform 1s ease-in';
            }

            // Calculate which item is at the bottom
            // Normalize the angle to a value between 0 and 360
            const normalizedAngle = ((currentAngle % 360) + 360) % 360; 
            const index = Math.round(normalizedAngle / (360 / itemsCount)) % itemsCount; // Each item is 60 degrees apart
            const itemHeading = itemRefs.current[index]?.querySelector('.item-heading')?.textContent; // Get heading of the item at the bottom

            if (itemHeading) {
                console.log(`Item at the bottom: ${itemHeading}`); // Log the item at the bottom
            }

            // Stop for 10 seconds before the next rotation
            setTimeout(() => {
                rotateCircle();
            }, 3000); // 10 seconds
        };

        // Start the rotation after 1 second
        const timeoutId = setTimeout(() => {
            rotateCircle();
        }, 1000); // 1 second

        return () => {
            clearTimeout(timeoutId); // Clean up the timeout
        };
    }, []);

    return (
        <div className="circle-container">
            <div className="dashed-circle"></div> {/* Dashed Circle Background */}
            <div className="circle" ref={circleRef}>
                <div className="circle-item order" ref={el => (itemRefs.current[0] = el)}>
                    <p className="item-heading">Order</p>
                    <img src={c2} alt="Order" />
                </div>
                <div className="circle-item payment" ref={el => (itemRefs.current[1] = el)}>
                    <p className="item-heading">Payment</p>
                    <img src={c4} alt="Payment" />
                </div>
                <div className="circle-item inventory" ref={el => (itemRefs.current[2] = el)}>
                    <p className="item-heading">Inventory</p>
                    <img src={c3} alt="Inventory" />
                </div>
                <div className="circle-item shipping" ref={el => (itemRefs.current[3] = el)}>
                    <p className="item-heading">Shipping</p>
                    <img src={c6} alt="Shipping" />
                </div>
                <div className="circle-item delivery" ref={el => (itemRefs.current[4] = el)}>
                    <p className="item-heading">Delivery</p>
                    <img src={c1} alt="Delivery" />
                </div>
                <div className="circle-item billing" ref={el => (itemRefs.current[5] = el)}>
                    <p className="item-heading">Billing</p>
                    <img src={c5} alt="Billing" />
                </div>
            </div>
            <div className="center-text">
                <p className='middle-text'>Connecting you with the best couriers to get your packages delivered in no time.</p>
            </div>
        </div>
    );
};

export default RotatingCircle;
