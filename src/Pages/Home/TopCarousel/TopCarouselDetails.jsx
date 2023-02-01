import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const TopCarouselDetails = ({ carouselImg, btn1, btn2 }) => {
    return (
        <>
            <div className="carousel-img">
                <img src={carouselImg} className="w-full" />
            </div>
            <div className="absolute flex justify-start top-1/4 transform -translate-y-1/2 md:left-20 right-5 w-2/5  left-2">
                <h1 className="md:text-5xl text-white md:font-bold md:leading-snug">Affordable <br />Price For Car <br />Servicing</h1>
            </div>
            <div className="absolute hidden lg:flex justify-start top-2/4 transform -translate-y-1/2 left-20 right-5 w-2/5">
                <p className="lg:text-xl text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam porro modi fugiat sint velit? Suscipit veniam explicabo deserunt cum! Impedit!</p>
            </div>
            <div className="absolute block lg:flex justify-start top-3/4 transform -translate-y-1/2 left-2 md:left-20 right-5 w-2/5">
                <button className="my-3 lg:my-0 mr-3 btn border-0 bg-orange-700">Discover More</button>
                <button className="hidden lg:block btn border-solid border-2 hover:border-orange-600" >Latest Services</button>
            </div>
            <div className="absolute flex justify-end bottom-0 transform -translate-y-1/2 left-5 right-5">
                <a href={btn1} className="btn btn-circle mr-3 border-0 bg-gray-500 opacity-75"><FaArrowLeft /></a>
                <a href={btn2} className="btn btn-circle bg-orange-700 border border-0"><FaArrowRight /></a>
            </div>
        </>
    );
};

export default TopCarouselDetails;