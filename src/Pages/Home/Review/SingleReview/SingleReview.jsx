import React, { useState, useEffect } from 'react';
import { FaStar, FaQuoteRight } from 'react-icons/fa';
import Rating from 'react-rating';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const SingleReview = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('Data/allReview.json')
            .then(res => res.json())
            .then(data => setReviews(data.reviews))
    }, [])

    return (
        <Swiper
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            spaceBetween={30}
            slidesPerView={2}
            navigation
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
        >
            {
                reviews?.map(review =>
                    <SwiperSlide>
                        <div className="card glass rounded-lg">
                            <div className="card-body mx-4">
                                <div className="card-actions flex justify-between items-center">
                                    <div className="card-actions flex justify-start items-center">
                                        <div className="avatar mr-4 mt-4">
                                            <div className="w-12 rounded-full">
                                                <img src={review.img} />
                                            </div>
                                        </div>
                                        <div>
                                            <h2 className="card-title mt-2 font-bold">{review.name}</h2>
                                            <p className="text-gray-700">{review.occupation}</p>
                                        </div>
                                    </div>
                                    <div className="hidden md:block">
                                        <FaQuoteRight className="text-5xl text-orange-200" />
                                    </div>
                                </div>
                                <p className="hidden md:block">{review.opinion}</p>
                                <Rating
                                    readonly
                                    initialRating={review.ratings}
                                    emptySymbol={<FaStar className="text-gray-300" />}
                                    fullSymbol={<FaStar className="text-orange-600" />}
                                />
                            </div>
                        </div>
                    </SwiperSlide>)
            }
        </Swiper>
    );
};

export default SingleReview;