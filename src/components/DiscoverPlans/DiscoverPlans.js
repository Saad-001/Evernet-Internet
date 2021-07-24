import { faClipboardList } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import PlansCard from './PlansCard/PlansCard';

const DiscoverPlans = () => {
    return (
        <div id="packages" className="mt-5 mb-10">
            <div className="flex rounded-full items-center mx-auto mb-4 justify-center h-10 w-10 bg-red-500">
                <FontAwesomeIcon className="text-lg text-white" icon={faClipboardList} />
            </div>
            <div className="text-center">
                <p className="text-red-500 my-font mb-2 text-2xl text-semibold">Evernet Pricing</p>
                <h1 className="text-gray-700 text-4xl my-font font-extrabold">Discover Our Best Plans</h1>
            </div>
            <div className="mx-4 lg:mx-16">
                <PlansCard></PlansCard>
            </div>
        </div>
    );
};

export default DiscoverPlans;