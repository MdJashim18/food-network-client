import React, { use } from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const Foods = ({ food }) => {
    const { user } = use(AuthContext)
    const { photo, food_name, restaurant_name, restaurant_location, reviewer_name, rating, _id } = food;

    const handleAddFavorite = (e) => {
        e.preventDefault();
        const newFavorite = {
            food_name,
            photo,
            email: user.email,
        };

        fetch('http://localhost:3000/favorites', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newFavorite)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Success!",
                        text: "Your review has been added.",
                        icon: "success"
                    });
                    e.target.reset();
                }
            })
            .catch(err => {
                console.error(err);
                Swal.fire({
                    title: "Error!",
                    text: "Could not add review. Please try again.",
                    icon: "error"
                });
            });

    };
    return (
        <div className="card bg-gradient-to-br from-white to-gray-50 w-96 shadow-xl hover:shadow-2xl transition-all duration-500  border border-gray-100 rounded-2xl overflow-hidden group">
            <figure className=" overflow-hidden p-5">
                <img
                    src={photo}
                    alt="Crispy Chicken Wings"
                    className="w-full rounded-2xl h-64 object-cover transition-transform duration-700 group-hover:scale-105"
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
                    <div className="flex items-center gap-2 text-gray-600">
                        <div>
                            <p className="font-semibold text-gray-500 text-xs">RESTAURANT</p>
                            <p className="font-medium">{restaurant_name}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-2 text-gray-600">
                        <div>
                            <p className="font-semibold text-gray-500 text-xs">LOCATION</p>
                            <p className="font-medium">{restaurant_location}</p>
                        </div>
                    </div>
                </div>


                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <div className="flex items-center gap-2">
                        <div>
                            <p className="text-xs text-gray-500">Reviewed by</p>
                            <p className="text-sm font-medium text-gray-700">{reviewer_name}</p>
                        </div>
                    </div>

                    <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold px-3 py-2 rounded-full shadow-lg flex items-center gap-1">
                        <span className="text-sm"><FaStar /> </span>
                        <span>{rating} </span>
                    </div>
                </div>

                <div className='flex justify-between '>
                    <div className=''>
                        <Link to={`/foodDetails/${_id}`} className='btn font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white rounded-2xl'>View Details</Link>
                    </div>
                    <div>
                        <button onClick={handleAddFavorite} className='btn font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent hover:bg-[#632EE3] rounded-2xl'>Favorite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Foods;