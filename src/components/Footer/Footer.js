import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faClock, faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import logo from '../../Images/logoImage/logo-evernet-4.png';

const Footer = () => {
    return (
        <div id="contacts" className="bg-gray-900">
            <div className="grid border-b border-gray-800 lg:grid-cols-4">
                <div className="p-6 border-r border-gray-800">
                    <div className="flex items-center space-x-4">
                        <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                            <FontAwesomeIcon className="text-red-500 text-xl" icon={faPhone} />
                        </div>
                        <div>
                            <p className="text-white my-font text-lg">Give Us A Call</p>
                            <p className="text-white my-font text-xl font-semibold">(+88) 01993596075</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-r border-gray-800">
                    <div className="flex items-center space-x-4">
                        <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                            <FontAwesomeIcon className="text-red-500 text-xl" icon={faEnvelope} />
                        </div>
                        <div>
                            <p className="text-white my-font text-lg">Send Us A Message</p>
                            <p className="text-white my-font text-xl font-semibold">evernet@gmail.com</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-r border-gray-800">
                    <div className="flex items-center space-x-4">
                        <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                            <FontAwesomeIcon className="text-red-500 text-xl" icon={faMapMarkerAlt} />
                        </div>
                        <div>
                            <p className="text-white my-font text-lg">Official Location</p>
                            <p className="text-white my-font text-xl font-semibold">A K Khan, Chattogram</p>
                        </div>
                    </div>
                </div>

                <div className="p-6 border-r border-gray-800">
                    <div className="flex items-center space-x-4">
                        <div className="bg-white rounded-full h-10 w-10 flex items-center justify-center">
                            <FontAwesomeIcon className="text-red-500 text-xl" icon={faClock} />
                        </div>
                        <div>
                            <p className="text-white my-font text-lg">Opening Hours</p>
                            <p className="text-white my-font text-xl font-semibold">09:00 AM - 10:00 PM</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid lg:grid-cols-4 mt-10 lg:mt-20 mx-4 lg:mx-12 pb-20">
                <div className="mb-5 lg:mb-0">
                    <img className="w-40 mb-5" src={logo} alt="" />
                    <p className="my-font text-white text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla corrupti aliquid assumenda excepturi. Non, debitis alias. Recusandae atque obcaecati distinctio?</p>
                    <div className="flex space-x-1 mt-5">
                        <div className="bg-white h-9 w-9 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon className="text-red-500 hover:text-blue-500 text-lg" icon={faFacebook} />
                        </div>
                        <div className="bg-white h-9 w-9 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon className="text-red-500 hover:text-blue-500 text-lg" icon={faTwitter} />
                        </div>
                        <div className="bg-white h-9 w-9 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon className="text-red-500 hover:text-red-700 text-lg" icon={faYoutube} />
                        </div>
                        <div className="bg-white h-9 w-9 rounded-full flex items-center justify-center">
                            <FontAwesomeIcon className="text-red-500 hover:text-yellow-700 text-lg" icon={faInstagram} />
                        </div>
                    </div>
                </div>

                <div className="mb-5 lg:mb-0 lg:ml-10">
                    <p className="text-red-600 my-font text-xl mb-5">Quick Links</p>
                    <a href="/" className="text-white hover:text-gray-400 mb-5 text-xs">About Us</a>
                    <br />
                    <a href="/" className="text-white hover:text-gray-400 mb-5 text-xs">Service</a>
                    <br />
                    <a href="/" className="text-white hover:text-gray-400 mb-5 text-xs">Appointment</a>
                    <br />
                    <a href="/" className="text-white hover:text-gray-400 mb-5 text-xs">Our Plans</a>
                    <br />
                    <a href="/" className="text-white hover:text-gray-400 mb-5 text-xs">Contact</a>
                    <br />
                </div>

                <div className="mb-5 lg:mb-0">
                    <p className="text-red-600 my-font text-xl mb-5">Useful Links</p>
                    <a href="/" className="text-white hover:text-gray-400 mb-5 text-xs">Privacy Policy</a>
                    <br />
                    <a href="/" className="text-white hover:text-gray-400 mb-5 text-xs">Terms And Conditions</a>
                    <br />
                    <a href="/" className="text-white hover:text-gray-400 mb-5 text-xs">Disclaimer</a>
                    <br />
                    <a href="/" className="text-white hover:text-gray-400 mb-5 text-xs">Support</a>
                    <br />
                    <a href="/" className="text-white hover:text-gray-400 mb-5 text-xs">FAQ</a>
                </div>

                <div>
                    <p className="text-red-600 my-font text-xl mb-5">News Letter</p>
                    <p className="text-white text-sm mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odio dignissimos placeat in repudiandae ipsa rem sit voluptate sint eum!</p>
                    <div className="bg-white rounded-full pl-3 mt-6 lg:mt-0 md:pl-5 w-auto flex justify-between lg:justify-end py-1 px-1">
                        <input type="text" className="border-none w-auto focus:outline-none" placeholder="Your email..." />
                        <button className="bg-red-500 focus:ring-1 ring-red-900 focus:outline-none hover:bg-red-700 py-2 px-3 text-gray-100 rounded-full">Subscribe</button>
                    </div>
                </div>
            </div>
            
            <div className="border-b border-gray-800"></div>

            <div className="pt-5 pb-5">
                <p className="text-gray-300 my-font text-sm text-center">Copyright © 2021 Evernet Internet Service Provider.</p>
            </div>
        </div>
    );
};

export default Footer;