import React from 'react';

const SingleProduct = ({ product }) => {
    const { title, price, img, rating } = product
    return (
        <div className="card glass rounded-lg">
            <div className="card-body mx-4 text-center">
                <figure><img className="rounded-lg h-32 bg-gray-200 md:px-20 md:py-2" src={img} alt="car!" /></figure>
                <h2 className="text-xl mt-2">{title}</h2>
                <p className="text-orange-700 font-bold">${price}</p>
            </div>
        </div>
    );
};

export default SingleProduct;