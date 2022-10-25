import React from 'react';
import AboutUs from './AboutUs/AboutUs';
import Contact from './Contact/Contact';
import CoreFeatures from './CoreFeatures/CoreFeatures';
import Products from './Products/Products';
import Review from './Review/Review';
import ServiceArea from './ServiceArea/ServiceArea';
import Team from './Team/Team';
import TopCarousel from './TopCarousel/TopCarousel';

const Home = () => {
    return (
        <div>
            <TopCarousel></TopCarousel>
            <AboutUs></AboutUs>
            <ServiceArea></ServiceArea>
            <Contact></Contact>
            <Products></Products>
            <Team></Team>
            <CoreFeatures></CoreFeatures>
            <Review></Review>
        </div>
    );
};

export default Home;