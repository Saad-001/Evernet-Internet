import React from 'react';
import image1 from '../../Images/footerImgs/Technology.png';
import image2 from '../../Images/footerImgs/Interect.png';
import image3 from '../../Images/footerImgs/cloudTech.png';
import image4 from '../../Images/footerImgs/ZQJ5D8-800x167.png';
import './subfooter.css';

const SubFooter = () => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 mx-4 lg:mx-16 pt-14 pb-14">
            <div className="p-6">
                <img className="footerImgs" src={image1} alt="" />
            </div>
            <div className="p-6">
                <img className="footerImgs" src={image2} alt="" />
            </div>
            <div className="p-6">
                <img className="footerImgs" src={image3} alt="" />
            </div>
            <div className="p-7">
                <img className="footerImgs" src={image4} alt="" />
            </div>
        </div>
    );
};

export default SubFooter;