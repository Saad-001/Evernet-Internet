import { faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './testimonials.css';
import TestimonialSlide from './TestimonialSlide';

const Testimonials = () => {
    return (
        <div className="testimonials-container mt-12">
            <div className="testimonials-overlay pt-12 lg:pt-24">
                <div className="h-10 w-10 bg-white flex items-center justify-center rounded-full mx-auto">
                    <FontAwesomeIcon className="text-red-500 text-lg" icon={faUsers} />
                </div>
                <div className="mx-4 lg:mx-16">
                    <p className="my-font text-white text-xl font-semibold text-center mt-4 ">Testimonials</p>
                    <p className="font-extrabold my-font text-center text-4xl mt-3 text-white">What Our Clients Say</p>
                    <p className="text-white my-font text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    <p className="text-center my-font text-white">incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="sliderContainer mx-4 lg:mx-16">
                    <TestimonialSlide></TestimonialSlide>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;