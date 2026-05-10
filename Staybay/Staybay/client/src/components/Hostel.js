import React from 'react';
import {useDispatch} from 'react-redux'
import {Link} from "react-router-dom"
import StarRatings from "react-star-ratings";

const Hostel = ({hostel}) => {
    
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
        <div className="relative h-48 w-full">
            <img src={hostel.image} alt={hostel.name} className="absolute inset-0 w-full h-full object-cover" />
        </div>
        <div className="p-5 flex-grow flex flex-col justify-between">
            <div>
                <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 truncate">{hostel.name}</h3>
                    <p className="text-lg font-bold text-indigo-600 whitespace-nowrap ml-2">₹{hostel.price}<span className="text-sm text-gray-500 font-normal">/mo</span></p>
                </div>

                <div className="flex items-center mb-3">
                    <span className="text-sm font-medium text-gray-700 mr-2">{hostel.status}</span>
                    <StarRatings
                        rating={hostel.status}
                        starRatedColor="#F59E0B"
                        numberOfStars={5}
                        name="rating"
                        starSpacing="2px"
                        starDimension="16px"
                    />
                </div>

                <div className="flex items-center text-gray-500 text-sm mb-4">
                    <svg className="h-4 w-4 mr-1" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    <span className="truncate">{hostel.location}</span>
                </div>
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
                <Link to={`/hostel/${hostel._id}`} className="block w-full text-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200">
                    Check Details
                </Link>
            </div>
        </div>
    </div>
);
};

export default Hostel;