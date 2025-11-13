import React, { use } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Provider/AuthProvider';

const AddReview = () => {
    const { user } = use(AuthContext)

    const handleAddReview = (e) => {
        e.preventDefault();
        const review_text = e.target.review_text.value;
        const food_name = e.target.review_name.value;
        const food_image = e.target.food_image.value
        const restaurant_name = e.target.restaurant_name.value;
        const location = e.target.location.value;
        const star_rating = e.target.star_rating.value;

        const newReview = {
            food_name,
            food_image,
            restaurant_name,
            location,
            star_rating,
            review_text,
            email: user.email,
            date_time: new Date().toLocaleString()
        };

        fetch('https://food-network-api.vercel.app/review', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newReview)
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
        <div className="w-[95%]  mx-auto mt-12 p-8 bg-gradient-to-br from-white to-gray-100 rounded-3xl shadow-xl border border-gray-200 my-20">
            <h2 className="text-3xl font-bold mb-8 text-center text-purple-600">
                Add Your Review
            </h2>
            <form onSubmit={handleAddReview} className="space-y-5">

                <div>
                    <label className="label text-gray-700 font-semibold">Food Name</label>
                    <input
                        type="text"
                        name="review_name"
                        className="input input-bordered w-full rounded-xl px-4 py-2 border-gray-300 focus:ring-2 focus:ring-purple-400"
                        placeholder="Enter food name..."
                        required
                    />
                </div>
                <div>
                    <label className="label text-gray-700 font-semibold">Food Image URL</label>
                    <input
                        type="text"
                        name="food_image"
                        className="input input-bordered w-full rounded-xl px-4 py-2 border-gray-300 focus:ring-2 focus:ring-purple-400"
                        placeholder="Enter food image URL..."
                        required
                    />
                </div>


                <div>
                    <label className="label text-gray-700 font-semibold">Restaurant Name</label>
                    <input
                        type="text"
                        name="restaurant_name"
                        className="input input-bordered w-full rounded-xl px-4 py-2 border-gray-300 focus:ring-2 focus:ring-purple-400"
                        placeholder="Enter restaurant name..."
                        required
                    />
                </div>


                <div>
                    <label className="label text-gray-700 font-semibold">Location</label>
                    <input
                        type="text"
                        name="location"
                        className="input input-bordered w-full rounded-xl px-4 py-2 border-gray-300 focus:ring-2 focus:ring-purple-400"
                        placeholder="Enter location..."
                        required
                    />
                </div>


                <div>
                    <label className="label text-gray-700 font-semibold">Star Rating (1-5)</label>
                    <input
                        type="number"
                        name="star_rating"
                        className="input input-bordered w-full rounded-xl px-4 py-2 border-gray-300 focus:ring-2 focus:ring-purple-400"
                        min={1}
                        max={5}
                        defaultValue={5}
                        required
                    />
                </div>


                <div>
                    <label className="label text-gray-700 font-semibold">Review Text</label>
                    <textarea
                        name="review_text"
                        className="input input-bordered w-full rounded-xl px-4 py-3 border-gray-300 focus:ring-2 focus:ring-purple-400 resize-none h-32"
                        placeholder="Write your review here..."
                        required
                    />
                </div>


                <button
                    type="submit"
                    className="w-full bg-purple-500 text-white font-bold py-3 rounded-xl hover:bg-purple-600 transition-colors shadow-lg"
                >
                    Submit Review
                </button>
            </form>


        </div>

    );
};

export default AddReview;
