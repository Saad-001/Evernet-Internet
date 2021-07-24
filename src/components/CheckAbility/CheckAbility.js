import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './CheckAbility.css';

const CheckAbility = () => {
    return (
        <div className="image-bg mb-10">
            <div className="bg-gray-900 bg-opacity-95 transparent-div">
                <div className="grid lg:grid-cols-2 mx-4 lg:mx-16">
                    <div className="wrapper mt-10 lg:mb-24 lg:mt-24">
                        <div className="flex items-center mb-5 space-x-4 justify-start">
                            <div className="bg-red-500 h-10 w-10 rounded-full flex items-center justify-center">
                                <FontAwesomeIcon className="text-white text-2xl" icon={faMapMarkerAlt} />
                            </div>
                            <p className="text-red-500 text-xl my-font">Let's Use Our Service</p>
                        </div>
                        <div>
                            <h1 className="text-4xl my-font text-white font-extrabold">Check Ability To Connect Our Services In Your Area</h1>
                        </div>
                    </div>
                    <div className="wrapper-two mt-16 lg:mt-0">
                        <div className="lg:px-10 lg:mt-36 lg:mb-24 mb-12">
                            <div className="bg-white rounded-full pl-3 md:pl-5 w-auto flex justify-between lg:justify-end py-1 px-1">
                                <input type="text" className="border-none w-auto lg:w-80 lg:mr-6 focus:outline-none px-4" placeholder="Your email..." />
                                <button className="bg-red-500 focus:ring-1 ring-red-900 focus:outline-none hover:bg-red-700 py-2 px-5 lg:py-3 lg:px-10 text-gray-100 rounded-full">Check Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckAbility;