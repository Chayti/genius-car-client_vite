import React from 'react';
import illustration from '../../assets/others/Illustration.svg'
const Registration = () => {
    return (
        <section className = "container px-6 h-full">
            <div className="flex lg:justify-between justify-center items-center flex-wrap h-full g-6 text-gray-800">
                <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">
                    <img src={illustration} alt="Password_image"/>
                </div>
                <div className="md:w-8/12 lg:w-6/12 mb-12 md:mb-0">Right</div>
            </div>
        </section>
    );
};

export default Registration;