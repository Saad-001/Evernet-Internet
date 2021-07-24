import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper.scss';
import "swiper/swiper.min.css";
import "swiper/components/pagination/pagination.min.css"
import SwiperCore, { Pagination } from 'swiper/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import clientImg from '../../Images/client/client.png';

const TestimonialSlide = () => {
    return (
        <div className="mt-10">
            <Swiper slidesPerView={1} spaceBetween={10} pagination={{
                "clickable": true
            }} breakpoints={{
                "640": {
                    "slidesPerView": 1,
                    "spaceBetween": 50
                },
                "768": {
                    "slidesPerView": 2,
                    "spaceBetween": 40
                },
                "1024": {
                    "slidesPerView": 3,
                    "spaceBetween": 50
                }
            }} className="mySwiper">
                <SwiperSlide className="bg-white p-8 shadow-xl rounded-lg">
                    <div className="mb-5">
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                    </div>
                    <div className="flex space-x-4">
                        <img className="rounded-full h-14 w-14" src={clientImg} alt="" />
                        <div>
                            <p className="text-gray-700 my-font text-lg">John Doe</p>
                            <p className="text-gray-400 my-font">It Programmer</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo fugiat, sapiente necessitatibus ratione nulla dolores omnis reprehenderit, ex beatae
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-white p-8 shadow-xl rounded-lg">
                    <div className="mb-5">
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                    </div>
                    <div className="flex space-x-4">
                        <img className="rounded-full h-14 w-14" src={clientImg} alt="" />
                        <div>
                            <p className="text-gray-700 my-font text-lg">John Doe</p>
                            <p className="text-gray-400 my-font">It Programmer</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo fugiat, sapiente necessitatibus ratione nulla dolores omnis reprehenderit, ex beatae
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-white p-8 shadow-xl rounded-lg">
                    <div className="mb-5">
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                    </div>
                    <div className="flex space-x-4">
                        <img className="rounded-full h-14 w-14" src={clientImg} alt="" />
                        <div>
                            <p className="text-gray-700 my-font text-lg">John Doe</p>
                            <p className="text-gray-400 my-font">It Programmer</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo fugiat, sapiente necessitatibus ratione nulla dolores omnis reprehenderit, ex beatae
                        </p>
                    </div>
                </SwiperSlide>

                <SwiperSlide className="bg-white p-8 shadow-xl rounded-lg">
                    <div className="mb-5">
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                        <FontAwesomeIcon className="text-yellow-500" icon={faStar} />
                    </div>
                    <div className="flex space-x-4">
                        <img className="rounded-full h-14 w-14" src={clientImg} alt="" />
                        <div>
                            <p className="text-gray-700 my-font text-lg">John Doe</p>
                            <p className="text-gray-400 my-font">It Programmer</p>
                        </div>
                    </div>
                    <div className="mt-8">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis quo fugiat, sapiente necessitatibus ratione nulla dolores omnis reprehenderit, ex beatae
                        </p>
                    </div>
                </SwiperSlide>               
            </Swiper>
        </div>
    );
};

export default TestimonialSlide;