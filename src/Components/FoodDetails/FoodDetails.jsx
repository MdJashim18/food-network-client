import React, { useContext } from 'react';
import { useLoaderData, Link } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

const FoodDetails = () => {
    const { user } = useContext(AuthContext);
    const food = useLoaderData();

    const handleTryNow = (e) => {
        e.preventDefault();
        toast.success("You have successfully tried this food!");
        e.target.reset();
    };

    return (
        <div>
            <div className="max-w-6xl mx-auto p-6 bg-base-200 rounded-2xl shadow-lg my-10">
                <div className="flex flex-col md:flex-row items-center gap-8">

                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={food.photo}
                            alt={food.food_name}
                            className="rounded-2xl w-full md:w-[90%] object-cover shadow-md"
                        />
                    </div>

                    <div className="w-full md:w-1/2 space-y-4">
                        <h2 className="text-3xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">{food.food_name}</h2>

                        <div className="text-gray-700 space-y-2">
                            <p><span className="font-semibold">Restaurant:</span> {food.restaurant_name}</p>
                            <p><span className="font-semibold">Location:</span> {food.restaurant_location}</p>
                            <p><span className="font-semibold">Reviewer:</span> {food.reviewer_name}</p>
                            <p><span className="font-semibold">Rating:</span> {food.rating}</p>
                        </div>

                        <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-4">Buy Now</button>
                    </div>
                </div>

                <div className="divider"></div>

                <div className="mt-6">
                    <p className="text-gray-600 leading-relaxed text-justify">
                        {food.description || "No description available."}
                    </p>
                </div>
                <Link to="/" className='btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-4'>Back to home</Link>
            </div>
            <ToastContainer />
        </div>
    );
};

export default FoodDetails;
