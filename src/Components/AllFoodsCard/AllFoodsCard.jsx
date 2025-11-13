import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';

const AllFoodsCard = ({ food }) => {
    const { photo, food_name, restaurant_name, restaurant_location, reviewer_name, rating, _id } = food;

    return (
        <div className="card bg-gradient-to-br from-white to-gray-50 
                        w-full sm:w-72 md:w-80 
                        shadow-xl hover:shadow-2xl transition-all duration-500  
                        border border-gray-100 rounded-2xl overflow-hidden group">

           
            <figure className="overflow-hidden p-5">
                <img
                    src={photo}
                    alt={food_name}
                    className="w-full h-64 object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                />
            </figure>

           
            <div className="card-body p-6 space-y-4">

              
                <div className="space-y-2">
                    <h2 className="card-title text-xl font-bold text-gray-800 line-clamp-1">
                        {food_name}
                    </h2>
                    <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
                </div>

               
                <div className="grid grid-cols-2 gap-3 text-sm">
                    <div>
                        <p className="font-semibold text-gray-500 text-xs">RESTAURANT</p>
                        <p className="font-medium">{restaurant_name}</p>
                    </div>
                    <div>
                        <p className="font-semibold text-gray-500 text-xs">LOCATION</p>
                        <p className="font-medium">{restaurant_location}</p>
                    </div>
                </div>

                
                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <div>
                        <p className="text-xs text-gray-500">Reviewed by</p>
                        <p className="text-sm font-medium text-gray-700">{reviewer_name}</p>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1">
                        <FaStar className="text-sm" />
                        <span>{rating}</span>
                    </div>
                </div>

               
                <div className="flex justify-center items-center">
                    <Link
                        to={`/foodDetails/${_id}`}
                        className="btn w-full font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-4 rounded-2xl"
                    >
                        View Details
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AllFoodsCard;
