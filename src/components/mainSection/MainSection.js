import { faBroadcastTower, faSignal, faTachometerAlt, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './mainSection.css';

const MainSection = () => {
    return (
        <div className="mx-4 md:mx-16">
            <div className="mt-12 text-center">
                <div className="mb-3">
                    <div className="bg-red-500 text-white rounded-full h-10 w-10 mx-auto flex items-center justify-center py-2 px-2"><FontAwesomeIcon icon={faWifi} />
                    </div>
                </div>
                <p className="text-red-500 my-font text-lg font-semibold mb-3">Evernet Isp Features</p>
                <h2 className="text-4xl my-font text-gray-700 font-extrabold">We Are Internet Service</h2>
                <h2 className="text-4xl my-font text-gray-700 font-extrabold">Provider Company</h2>
            </div>
            <div className="grid lg:grid-cols-4 mt-10 mb-10 space-y-4 md:space-y-0 md:space-x-4">
                <div className="border border-gray-200 rounded-lg p-6 hover:shadow-md text-gray-700 after-hover">
                    <div className="mb-4">
                        <FontAwesomeIcon className="text-5xl icon text-red-500" icon={faWifi} />
                    </div>
                    <div>
                        <p className="text-3xl my-font mb-3 font-bold">Wifi Seamless</p>
                        <p className="my-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptates voluptatum, adipisci sed optio quasi</p>
                    </div>
                    <a href="/" className="hidden details-btn my-font font-semibold rounded-md mt-5 px-2 py-2">View Details</a>
                </div>
                <div className="border border-gray-200 rounded-lg text-gray-700 p-6 hover:shadow-md after-hover">
                    <div className="mb-4">
                        <FontAwesomeIcon className="text-5xl icon text-red-500" icon={faSignal} />
                    </div>
                    <div>
                        <p className="text-3xl my-font mb-3 font-bold">Unlimited Speed</p>
                        <p className="my-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptates voluptatum, adipisci sed optio quasi</p>
                    </div>
                    <a href="/" className="hidden details-btn my-font font-semibold rounded-md mt-5 px-2 py-2">View Details</a>
                </div>
                <div className="border border-gray-200 text-gray-700 rounded-lg p-6 hover:shadow-md after-hover">
                    <div className="mb-4">
                        <FontAwesomeIcon className="text-5xl icon text-red-500" icon={faBroadcastTower} />
                    </div>
                    <div>
                        <p className="text-3xl my-font mb-3 font-bold">Upgrade Speen</p>
                        <p className="my-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptates voluptatum, adipisci sed optio quasi</p>
                    </div>
                    <a href="/" className="hidden details-btn my-font font-semibold rounded-md mt-5 px-2 py-2">View Details</a>
                </div>
                <div className="border border-gray-200 text-gray-700 rounded-lg p-6 hover:shadow-md after-hover">
                    <div className="mb-4">
                        <FontAwesomeIcon className="text-5xl icon text-red-500" icon={faTachometerAlt} />
                    </div>
                    <div>
                        <p className="text-3xl my-font mb-3 font-bold">Download 1Gbps</p>
                        <p className="my-font">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo voluptates voluptatum consectetur adipisicing elit.</p>
                    </div>
                    <a href="/" className="hidden details-btn my-font font-semibold rounded-md mt-5 px-2 py-2">View Details</a>
                </div>
            </div>
        </div>
    );
};

export default MainSection;