import { faGlobeEurope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import fatherSon from '../../Images/AboutEverner/fatherSon.jpg';
import playImage from '../../Images/AboutEverner/brothers-playing-on-playstation.jpg';

const AboutEvernet = () => {
    return (
        <div id="about" className="mt-16 mb-10">
            <div className="grid mx-4 md:mx-24 lg:grid-cols-2">
                <div>
                    <div className="flex items-center space-x-3">
                        <div className="bg-red-500 rounded-full flex items-center justify-center p-2">
                            <FontAwesomeIcon className="text-white" icon={faGlobeEurope} />
                        </div>
                        <p className="text-red-500 my-font font-semibold">About Evernet</p>
                    </div>
                    <div className="mt-3">
                        <h2 className="my-font text-3xl text-gray-700 font-bold mb-3">Discover A Wider World Of Recreation</h2>
                        <p className="my-font text-gray-600">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet facilis vel at atque autem architecto excepturi sint tempore optio, corrupti aliquid sunt. Cupiditate error animi et voluptates, dolorum ipsa perferendis.</p>
                    </div>
                    <div className="border-b border-gray-200 mt-5 mb-5"></div>
                    <div className="grid md:grid-cols-2 md:space-x-3 md:mr-20">
                        <div className="">
                            <div className="">
                                <img className="rounded-lg h-48 w-full md:h-32 md:w-60" src={fatherSon} alt="" />
                            </div>
                        </div>
                        <div className="flex" >
                            <p className="my-font mt-5 md:mt-0 text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ipsum dolor sit amet consectetur quaerat!lorem5
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex justify-around mt-10 md:mt-0">
                    <div className="relative">
                        <img className="rounded-full h-96 relative" src={playImage} alt="" />
                        <div className="absolute bg-red-500 h-40 w-40 flex items-center justify-center top-0 right-0 rounded-full">
                            <div className="">
                                <p className="text-white my-font text-lg">Up To</p>
                                <p className="text-white my-font text-3xl font-bold">100 MB</p>
                                <p className="text-white my-font text-lg">Per Second</p>
                            </div>
                        </div>
                        <div className="absolute bg-gray-700 rounded-full h-24 w-24 flex items-center justify-center bottom-0 left-5">
                            <div>
                                <p className="my-font text-white text-lg">Just</p>
                                <p className="my-font text-white text-3xl font-bold">$23</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutEvernet;