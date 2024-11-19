import React, { useState, useEffect } from 'react'
import './NewArrives.css'
import axios from 'axios';

export default function NewArrives() {
    const [data, setdata] = useState([])
    const getdata = async () => {
        const response = await axios.get('http://localhost:5000/products/data', { headers: { 'Authorization': `Bearer ${data.token}`, 'Content-Type': 'application/json' } });
        setdata(response.data)
    }
    useEffect(() => {
        getdata()
    }, [])

    console.log(data)

    return (
        <>
            <div className="cards-main">

                <div className="new-a-heading text-center">
                    <h1 className='new-a-line'></h1>
                    <h1 className="new-a-title">Best Sellers</h1>
                    <h1 className='new-a-line'></h1>
                </div>
                <div className="best-seller-main ">
                    <h4 className='text-end p-1'><button className='btn btn-outline-success ps-4 pe-4'>View All</button></h4>
                    <div className="best-seller-inner">
                        {data.map((item, index) => (
                            <div key={index} className="best-seller-item">
                                <img src={item.image_url}className='shadow-sm' alt={item.name} />
                                <h4 className='pt-2'>Lorem, ipsum dolor.</h4>
                                <p className='text-in-card'>Lorem ipsum dolor sit amet   adipisicing elit. Est, laudantium.</p>
                                <div className="price-container fs-3">
                                    <span className="sales-price">
                                        {item.sales_price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                    </span>
                                </div>

                                <div className="buttons-main d-flex ">
                                    <div className="add-to-cart">
                                        <button className='btn btn-outline-success p-1 ps-3 pe-3'>Add to Cart</button>
                                    </div>
                                    <div className="view-all">
                                        <button className='btn p-1 ps-3 pe-3 btn-success'>View Deatils</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="new-a-heading text-center">
                    <h1 className='new-a-line'></h1>
                    <h1 className="new-a-title">New Arrivels</h1>
                    <h1 className='new-a-line'></h1>
                </div>
                <div className="best-seller-main  ">
                <h4 className='text-end p-1'><button className='btn btn-outline-success ps-4 pe-4'>View All</button></h4>

                    <div className="best-seller-inner  responsive">
                        {data.map((item, index) => (
                            <div key={index} className="best-seller-item">
                                <img src={item.image_url} className='shadow-sm' alt={item.name} />
                                <h4 className='pt-2'>Lorem, ipsum dolor.</h4>
                                <p className='text-in-card'>Lorem ipsum dolor sit amet   adipisicing elit. Est, laudantium.</p>
                                <div className="price-container fs-3">
                                    <span className="sales-price">
                                        {item.sales_price.toLocaleString('en-IN', { style: 'currency', currency: 'INR' })}
                                    </span>
                                </div>

                                <div className="buttons-main d-flex ">
                                    <div className="add-to-cart">
                                        <button className='btn btn-outline-success p-1 ps-3 pe-3'>Add to Cart</button>
                                    </div>
                                    <div className="view-all">
                                        <button className='btn p-1 ps-3 pe-3 btn-success'>View Deatils</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
