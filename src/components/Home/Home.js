import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faWifi } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import HeaderContactLink from '../headerContactLink/HeaderContactLink';
import Navbar from '../navbar/Navbar';
import MainSection from '../mainSection/MainSection';
import AboutEvernet from '../AboutEvernet/AboutEvernet';
import Features from '../Features/Features';
import CheckAbility from '../CheckAbility/CheckAbility';
import DiscoverPlans from '../DiscoverPlans/DiscoverPlans';
import RangeOfEvernet from '../RangeOfEvernet/RangeOfEvernet';
import Testimonials from '../Testimonials/Testimonials';
import SubFooter from '../Footer/SubFooter';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div className="">
            <div className="background-img">
              <div className="bg-black background-transparent bg-opacity-20">
                <HeaderContactLink></HeaderContactLink>
                <Navbar></Navbar>
                <div className="mt-10 mx-4 md:mx-16 flex items-center">
                  <div className="flex space-x-3">
                    <div className="h-8 w-8 rounded-full flex items-center justify-center bg-white">
                      <FontAwesomeIcon className="text-red-500" icon={faWifi} />
                    </div>
                    <p className="text-white my-font font-semibold pt-1">Evernet Broadband Service</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 mx-4 md:mx-16 mt-5">
                  <h1 className="text-white font-semibold my-font text-6xl">Connect The World With<span className="text-red-500"> Evernet</span></h1>
                </div>
                <div className="grid md:grid-cols-6 mx-4 md:mx-16 mt-5">
                  <div className="">
                    <p className="text-white my-font"><FontAwesomeIcon icon={faCheckCircle} /> Cell Phone Connection</p>
                    <p className="text-white my-font"><FontAwesomeIcon icon={faCheckCircle} /> Home Broadband</p>
                    <p className="text-white my-font"><FontAwesomeIcon icon={faCheckCircle} /> Home Security</p>
                    <p className="text-white my-font"><FontAwesomeIcon icon={faCheckCircle} /> 99% Internet Uptime</p>
                  </div>
                  <div className="mt-5 md:mt-0">
                    <p className="text-white my-font"><FontAwesomeIcon icon={faCheckCircle} /> Download 1Gbps</p>
                    <p className="text-white my-font"><FontAwesomeIcon icon={faCheckCircle} /> Evernet Tv Box</p>
                    <p className="text-white my-font"><FontAwesomeIcon icon={faCheckCircle} /> Mobile Connection</p>
                    <p className="text-white my-font"><FontAwesomeIcon icon={faCheckCircle} /> 24/7 Customer Support</p>
                  </div>
                </div>
                <button className="mx-4 md:mx-16 mt-5 lg:mt-14 py-3 px-6 my-font rounded-full bg-red-500 hover:bg-red-700 focus:ring-2 ring-red-600 text-white focus:outline-none mb-14 lg:mb-24">See Packages</button>
              </div>
            </div>
            <MainSection></MainSection>
            <AboutEvernet></AboutEvernet>
            <div className="border-b border-gray-300 mb-10"></div>
            <Features></Features>
            <CheckAbility></CheckAbility>
            <DiscoverPlans></DiscoverPlans>
            <RangeOfEvernet></RangeOfEvernet>
            <Testimonials></Testimonials>
            <SubFooter></SubFooter>
            <Footer></Footer>
          </div>
    );
};

export default Home;