import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import img1 from "./about_us/1.jpg"
import img2 from "./about_us/2.jpg"

const AboutUs = () => {
    return (
        <div className="section-2 mt-20">
            <div className="lg:flex justify-between">
                <div className="about">
                    <img className="about-img-1" src={img1} alt="" />
                    <div className="block about-img-2" >
                        <img className="border-4 border-solid border-white" src={img2} alt="" />
                    </div>
                </div>
                <div className="mx-7 ml-3 px-5 mt-7 lg:mt-0">
                    <p className="text-orange-700 font-bold">About Us</p><br />
                    <h2 className="md:text-3xl md:font-bold">We are qualified <br />of & experienced <br />in this field</h2><br />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, sunt cupiditate repellat natus vero nemo quos, voluptate, dolorem molestias voluptas consequuntur fuga. Sint vitae earum sed debitis ipsam consequatur at.</p><br />
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem ipsam excepturi eum eveniet quae molestias.</p><br />
                    <Link className="my-3 lg:my-0 mr-3 btn border-0 bg-orange-600">Get more info</Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;