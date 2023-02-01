import React from 'react';
import Rating from 'react-rating';
import { FaStar } from 'react-icons/fa';

const SingleProduct = ({ product }) => {
    const { title, price, img, rating } = product
    return (
        <div className="card glass rounded-lg">
            <div className="card-body mx-4 text-center">
                <figure><img className="rounded-lg h-32 bg-gray-300 px-20 py-2" src={img} alt="car!" /></figure>
                <Rating
                    readonly
                    initialRating={rating}
                    emptySymbol={<FaStar className="text-gray-300" />}
                    fullSymbol={<FaStar className="text-orange-600" />}
                />
                <h2 className="text-xl mt-2">{title}</h2>
                <p className="text-orange-700 font-bold">${price}</p>
            </div>
        </div>
    );
};

export default SingleProduct;