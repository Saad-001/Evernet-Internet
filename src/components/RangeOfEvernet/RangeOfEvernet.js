import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import image from '../../Images/backgroundImages/assets-evernet-network.png';

const RangeOfEvernet = () => {
    return (
        <div className="mt-20 mb-20 mx-4 lg:mx-16">
            <div className="grid lg:grid-cols-2 lg:space-x-12">
                <div>
                    <img src={image} alt="" />
                </div>
                <div className="mt-10 lg:mt-0">
                    <div className="flex items-center space-x-4">
                        <div className="h-10 w-10 rounded-full bg-red-500 flex items-center justify-center">
                            <FontAwesomeIcon className="text-lg text-white" icon={faNetworkWired} />
                        </div>
                        <div>
                            <p className="text-red-500 my-font text-xl font-semibold">Get Blazing Fast Internet</p>
                        </div>
                    </div>
                    <div className="mt-5">
                        <h1 className="text-4xl font-extrabold my-font text-gray-700">Evernet Is Available To All Corners Of The Country</h1>
                        <p className="my-font text-md text-gray-700 mt-5">Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor imperdiet nec consequata congue idsem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor laoreet sapiena ultrices.</p>
                    </div>
                    <div className="border-b border-gray-300 mt-5 mb-5"></div>
                    <div>
                        <p className="my-font text-lg font-semibold text-gray-700">Call Us For Connect Evernet</p>
                        <p className="text-red-500 my-font text-3xl font-bold">(+88) 01993596075</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RangeOfEvernet;