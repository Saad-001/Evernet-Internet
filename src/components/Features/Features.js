import { faChromecast } from '@fortawesome/free-brands-svg-icons';
import { faHeadset, faMoneyCheckAlt, faRocket, faServer, faTv } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import tariffPlan from '../../Images/backgroundImages/tariffPlan.png';
import React from 'react';

const Features = () => {
    return (
        <div className="mx-4 md:mx-16 mb-14">
            <div className="grid grid-cols-2 md:grid-cols-6 space-x-4">
                <div className="">
                    <div className="text-5xl text-center text-red-500 my-4"><FontAwesomeIcon icon={faTv} /></div>
                    <p className="my-font font-semibold text-center text-gray-700 text-lg">250+ Channels</p>
                </div>

                <div className="">
                    <div className="text-5xl text-center text-red-500 my-4"><FontAwesomeIcon icon={faRocket} /></div>
                    <p className="my-font font-semibold text-center text-gray-700 text-lg">Speed Seamless</p>
                </div>

                <div className="">
                    <div className="text-5xl text-center text-red-500 my-4"><FontAwesomeIcon icon={faServer} /></div>
                    <p className="my-font font-semibold text-center text-gray-700 text-lg">Free Installation</p>
                </div>

                <div className="">
                    <div className="text-5xl text-center text-red-500 my-4"><FontAwesomeIcon icon={faChromecast} /></div>
                    <p className="my-font font-semibold text-center text-gray-700 text-lg">4K & 8K Quality</p>
                </div>

                <div className="">
                    <div className="text-5xl text-center text-red-500 my-4"><FontAwesomeIcon icon={faMoneyCheckAlt} /></div>
                    <p className="my-font font-semibold text-center text-gray-700 text-lg">Flexible Tariff Plans</p>
                </div>

                <div className="">
                    <div className="text-5xl text-center text-red-500 my-4"><FontAwesomeIcon icon={faHeadset} /></div>
                    <p className="my-font font-semibold text-center text-gray-700 text-lg">Fast Support 24/7</p>
                </div>
            </div>
        </div>
    );
};

export default Features;