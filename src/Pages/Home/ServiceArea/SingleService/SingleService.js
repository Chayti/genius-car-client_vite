import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SingleService = ({ service }) => {
    const { title, price, img } = service
    return (
        <div className="card glass rounded-lg">
            <div className="card-body mx-4">
                <figure><img className="rounded-lg" src={img} alt="car!" /></figure>
                <h2 className="card-title mt-2">{title}</h2>
                <div className="card-actions flex justify-between items-center">
                    <p className="text-orange-700 font-bold">Price: ${price}</p>
                    <Link className="btn btn-circle text-orange-700 border-0"><FaArrowRight /></Link>
                </div>
            </div>
        </div>
    );
};

export default SingleService;