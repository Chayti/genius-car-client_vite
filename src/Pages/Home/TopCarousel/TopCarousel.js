import React from 'react';
import './TopCarousel.css';
import img1 from "./homeCarousel/1.jpg";
import img2 from "./homeCarousel/2.jpg";
import img3 from "./homeCarousel/3.jpg";
import img4 from "./homeCarousel/4.jpg";
import TopCarouselDetails from './TopCarouselDetails';

/***
 * Used this component from daisy => https://i.ibb.co/BfnhQFd/top-Carousel.jpg
 * but customized a lot
 * */

const TopCarousel = () => {

    return (
        <div className="w-5/6 mx-auto">
            <div className="carousel">
                <div id="slide1" className="carousel-item relative w-full">
                    <TopCarouselDetails carouselImg={img1} btn1="#slide4" btn2="#slide2" ></TopCarouselDetails>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <TopCarouselDetails carouselImg={img2} btn1="#slide1" btn2="#slide3" ></TopCarouselDetails>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <TopCarouselDetails carouselImg={img3} btn1="#slide2" btn2="#slide4" ></TopCarouselDetails>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <TopCarouselDetails carouselImg={img4} btn1="#slide3" btn2="#slide1" ></TopCarouselDetails>
                </div>
            </div>
        </div>
    );
};

export default TopCarousel;