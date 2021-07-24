import { faFacebook, faLinkedinIn, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HeaderContactLink = () => {
    return (
        <div className="max-w-7xl mx-auto px-8 pt-2 flex bg-transparent justify-between">
            <div className="text-white pt-1">
                <p className="my-font">Customer Service: 01993596075</p>
            </div>
            <div className="text-red-500 flex items-center justify-center space-x-3">
                <a href="https://www.facebook.com/Evernet-111463221175328" target="_blank" rel="noopener noreferrer"  className="py-1 px-2 bg-white rounded-full"><FontAwesomeIcon className="hover:text-blue-500 rounded-full" icon={faFacebook} /></a>
                <a href="https://www.linkedin.com/in/md-sa-ad-a88843210/" target="_blank" rel="noopener noreferrer" className="py-1 px-2 bg-white rounded-full"><FontAwesomeIcon className="hover:text-blue-500 rounded-full" icon={faLinkedinIn} /></a>
                <a href="https://www.youtube.com/watch?v=Sfzo4xm5eX8" target="_blank" rel="noopener noreferrer" className="py-1 px-2 bg-white rounded-full"><FontAwesomeIcon className="hover:text-red-600 rounded-full" icon={faYoutube} /></a>
            </div>
        </div>
    );
};

export default HeaderContactLink;