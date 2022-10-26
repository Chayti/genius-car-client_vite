import React from 'react';
import { BsPeopleFill, BsFillPhoneVibrateFill, BsWatch } from 'react-icons/bs';

const CoreFeatures = () => {
    return (
        <div className="mt-20">
            <div className="mx-7 ml-3 px-5 mt-7 lg:mt-0 text-center">
                <p className="text-orange-700 font-bold">Core Features</p>
                <h2 className="md:text-3xl md:font-bold mt-3">Why Choose US</h2><br />
                <p className="w-3/4 mx-auto mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sunt cupiditate repellat natus vero nemo quos, voluptate, dolorem molestias voluptas consequuntur fuga.</p><br />
            </div>
            <div class="grid gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
                <div className="card glass rounded-lg">
                    <div className="card-body items-center px-4">
                        <BsPeopleFill className="text-orange-500 text-7xl" />
                        <h2 className="mt-2 font-bold">Expert Team</h2>
                    </div>
                </div>
                <div className="card glass rounded-lg">
                    <div className="card-body items-center px-4 bg-orange-600">
                        <BsWatch className="text-white  text-7xl" />
                        <h2 className="mt-2 text-white font-bold">Time Delivery</h2>
                    </div>
                </div>
                <div className="card glass rounded-lg">
                    <div className="card-body items-center px-4">
                        <BsFillPhoneVibrateFill className="text-orange-500  text-7xl" />
                        <h2 className="mt-2 font-bold">24/7 Support</h2>
                    </div>
                </div>
                <div className="card glass rounded-lg">
                    <div className="card-body items-center px-4">
                        <BsFillPhoneVibrateFill className="text-orange-500  text-7xl" />
                        <h2 className="mt-2 font-bold">Best Equipment</h2>
                    </div>
                </div>
                <div className="card glass rounded-lg">
                    <div className="card-body items-center px-4">
                        <BsFillPhoneVibrateFill className="text-orange-500  text-7xl" />
                        <h2 className="mt-2 font-bold">100% Guarantee</h2>
                    </div>
                </div>
                <div className="card glass rounded-lg">
                    <div className="card-body items-center px-4">
                        <BsWatch className="text-orange-500  text-7xl" />
                        <h2 className="mt-2 font-bold">Time Delivery</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreFeatures;