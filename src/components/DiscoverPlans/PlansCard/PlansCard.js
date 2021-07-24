import { faCheckCircle, faLaptop, faLaptopHouse, faMobile, faTv, faWifi } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { buildStyles, CircularProgressbarWithChildren } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const PlansCard = () => {
    const ProgressValue1 = 32;
    const ProgressValue2 = 50;
    const ProgressValue3 = 66;
    const ProgressValue4 = 80;
    const ProgressValue5 = 100;

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <div className="mt-10">
            <Carousel
                className=""
                swipeable={true}
                draggable={false}
                showDots={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                infinite={true}
                autoPlay={false}
                autoPlaySpeed={500}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                containerClass="carousel-container"
                removeArrowOnDeviceType={["tablet", "mobile"]}
                deviceType={this?.props.deviceType}
                dotListClass="custom-dot-list-style"
                itemClass="mx-2 max-w-xs"
            >
                <div className="border border-gray-300 rounded-md p-5">
                    <div>
                        <div className="flex items-center justify-end">
                            <div className="py-1 px-3 md:py-2 md:px-6 inline-block bg-green-600 rounded-full">
                                <p className="my-font text-lg text-gray-100">Promo</p>
                            </div>
                        </div>
                        <div className="mx-16 mt-5">
                            <CircularProgressbarWithChildren styles={buildStyles({pathColor: "rgb(239, 68, 68)"})} value={ProgressValue1}>
                                <p className="text-sm my-font text-gray-700">Up to</p>
                                <p className="text-2xl font-bold text-gray-700">32</p>
                                <p className="my-font text-gray-700 text-sm">Mbps</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className="rounded-full bg-white shadow-lg h-12 w-12 flex items-center justify-center mx-auto mt-10">
                            <FontAwesomeIcon className="text-red-500 text-lg" icon={faWifi} />
                        </div>
                        <p className="text-center my-font text-2xl text-gray-700 mt-5 font-semibold">Internet</p>
                        <div className="flex items-center justify-center mt-3">
                            <div>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Home Broadband</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Cell Phone Connection</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Home Security</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> 99% Internet Uptime</p>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <p className="text-4xl my-font font-semibold text-gray-700">$24.00<span className="text-sm text-gray-700 my-font">/Month</span></p>
                        </div>
                        <div className="text-center mt-5">
                            <button className="bg-red-500 text-gray-100 my-font py-2 px-4 md:py-3 md:px-14 rounded-full border-none focus:outline-none hover:bg-red-700">Purchase</button>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-300 rounded-md p-5">
                    <div>
                        <div className="flex items-center justify-end">
                            <div className="py-1 px-3 md:py-2 md:px-6 inline-block bg-green-600 rounded-full">
                                <p className="my-font text-lg text-gray-100">Promo</p>
                            </div>
                        </div>
                        <div className="mx-16 mt-5">
                            <CircularProgressbarWithChildren styles={buildStyles({pathColor: "rgb(239, 68, 68)"})} value={ProgressValue2}>
                                <p className="text-sm my-font text-gray-700">Up to</p>
                                <p className="text-2xl font-bold text-gray-700">50</p>
                                <p className="my-font text-gray-700 text-sm">Mbps</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className="flex space-x-3 justify-center">
                            <div className="rounded-full bg-white shadow-lg h-12 w-12 flex items-center justify-center mt-10">
                                <FontAwesomeIcon className="text-red-500 text-lg" icon={faWifi} />
                            </div>
                            <div className="rounded-full bg-white shadow-lg h-12 w-12 flex items-center justify-center mt-10">
                                <FontAwesomeIcon className="text-red-500 text-lg" icon={faTv} />
                            </div>
                        </div>
                        <p className="text-center my-font text-2xl text-gray-700 mt-5 font-semibold">Internet + TV</p>
                        <div className="flex items-center justify-center mt-3">
                            <div>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Home Broadband</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Cell Phone Connection</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Home Security</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> 99% Internet Uptime</p>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <p className="text-4xl my-font font-semibold text-gray-700">$32.00<span className="text-sm text-gray-700 my-font">/Month</span></p>
                        </div>
                        <div className="text-center mt-5">
                            <button className="bg-red-500 text-gray-100 my-font py-2 px-4 md:py-3 md:px-14 rounded-full border-none focus:outline-none hover:bg-red-700">Purchase</button>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-300 rounded-md p-5">
                    <div>
                        <div className="flex items-center justify-end">
                            <div className="py-1 px-3 md:py-2 md:px-6 inline-block bg-green-600 rounded-full">
                                <p className="my-font text-lg text-gray-100">Promo</p>
                            </div>
                        </div>
                        <div className="mx-16 mt-5">
                            <CircularProgressbarWithChildren styles={buildStyles({pathColor: "rgb(239, 68, 68)"})} value={ProgressValue3}>
                                <p className="text-sm my-font text-gray-700">Up to</p>
                                <p className="text-2xl font-bold text-gray-700">80</p>
                                <p className="my-font text-gray-700 text-sm">Mbps</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className="flex space-x-3 justify-center">
                            <div className="rounded-full bg-white shadow-lg h-12 w-12 flex items-center justify-center mt-10">
                                <FontAwesomeIcon className="text-red-500 text-lg" icon={faWifi} />
                            </div>
                            <div className="rounded-full bg-white shadow-lg h-12 w-12 flex items-center justify-center mt-10">
                                <FontAwesomeIcon className="text-red-500 text-lg" icon={faTv} />
                            </div>
                            <div className="rounded-full bg-white shadow-lg h-12 w-12 flex items-center justify-center mt-10">
                                <FontAwesomeIcon className="text-red-500 text-lg" icon={faMobile} />
                            </div>
                        </div>
                        <p className="text-center my-font text-2xl text-gray-700 mt-5 font-semibold">Internet + TV + Phone</p>
                        <div className="flex items-center justify-center mt-3">
                            <div>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Home Broadband</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Cell Phone Connection</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Home Security</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> 99% Internet Uptime</p>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <p className="text-4xl my-font font-semibold text-gray-700">$44.00<span className="text-sm text-gray-700 my-font">/Month</span></p>
                        </div>
                        <div className="text-center mt-5">
                            <button className="bg-red-500 text-gray-100 my-font py-2 px-4 md:py-3 md:px-14 rounded-full border-none focus:outline-none hover:bg-red-700">Purchase</button>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-300 rounded-md p-5">
                    <div>
                        <div className="flex items-center justify-end">
                            <div className="py-1 px-3 md:py-2 md:px-6 inline-block bg-green-600 rounded-full">
                                <p className="my-font text-lg text-gray-100">Promo</p>
                            </div>
                        </div>
                        <div className="mx-16 mt-5">
                            <CircularProgressbarWithChildren styles={buildStyles({pathColor: "rgb(239, 68, 68)"})} value={ProgressValue4}>
                                <p className="text-sm my-font text-gray-700">Up to</p>
                                <p className="text-2xl font-bold text-gray-700">100</p>
                                <p className="my-font text-gray-700 text-sm">Mbps</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className="flex justify-center space-x-3">
                            <div className="rounded-full bg-white shadow-lg h-12 w-12 flex items-center justify-center mt-10">
                                <FontAwesomeIcon className="text-red-500 text-lg" icon={faWifi} />
                            </div>
                            <div className="rounded-full bg-white shadow-lg h-12 w-12 flex items-center justify-center mt-10">
                                <FontAwesomeIcon className="text-red-500 text-lg" icon={faLaptop} />
                            </div>
                        </div>
                        <p className="text-center my-font text-2xl text-gray-700 mt-5 font-semibold">Internet + Laptop</p>
                        <div className="flex items-center justify-center mt-3">
                            <div>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Home Broadband</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Cell Phone Connection</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Home Security</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> 99% Internet Uptime</p>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <p className="text-4xl my-font font-semibold text-gray-700">$54.00<span className="text-sm text-gray-700 my-font">/Month</span></p>
                        </div>
                        <div className="text-center mt-5">
                            <button className="bg-red-500 text-gray-100 my-font py-2 px-4 md:py-3 md:px-14 rounded-full border-none focus:outline-none hover:bg-red-700">Purchase</button>
                        </div>
                    </div>
                </div>

                <div className="border border-gray-300 rounded-md p-5">
                    <div>
                        <div className="flex items-center justify-end">
                            <div className="py-1 px-3 md:py-2 md:px-6 inline-block bg-green-600 rounded-full">
                                <p className="my-font text-lg text-gray-100">Promo</p>
                            </div>
                        </div>
                        <div className="mx-16 mt-5">
                            <CircularProgressbarWithChildren styles={buildStyles({pathColor: "rgb(239, 68, 68)"})} value={ProgressValue5}>
                                <p className="text-sm my-font text-gray-700">Up to</p>
                                <p className="text-2xl font-bold text-gray-700">10</p>
                                <p className="my-font text-gray-700 text-sm">Gbps</p>
                            </CircularProgressbarWithChildren>
                        </div>
                        <div className="flex space-x-3 justify-center">
                            <div className="rounded-full bg-white shadow-lg h-12 w-12 flex items-center justify-center mt-10">
                                <FontAwesomeIcon className="text-red-500 text-lg" icon={faWifi} />
                            </div>
                            <div className="rounded-full bg-white shadow-lg h-12 w-12 flex items-center justify-center mt-10">
                                <FontAwesomeIcon className="text-red-500 text-lg" icon={faLaptopHouse} />
                            </div>
                        </div>
                        <p className="text-center my-font text-2xl text-gray-700 mt-5 font-semibold">Office Connection</p>
                        <div className="flex items-center justify-center mt-3">
                            <div>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Home Broadband</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Cell Phone Connection</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> Home Security</p>
                                <p className="text-gray-700 my-font"><FontAwesomeIcon className="text-red-500" icon={faCheckCircle} /> 99% Internet Uptime</p>
                            </div>
                        </div>
                        <div className="text-center mt-5">
                            <p className="text-4xl my-font font-semibold text-gray-700">$250.00<span className="text-sm text-gray-700 my-font">/Month</span></p>
                        </div>
                        <div className="text-center mt-5">
                            <button className="bg-red-500 text-gray-100 my-font py-2 px-4 md:py-3 md:px-14 rounded-full border-none focus:outline-none hover:bg-red-700">Purchase</button>
                        </div>
                    </div>
                </div>
            </Carousel>
        </div>
    );
};

export default PlansCard;