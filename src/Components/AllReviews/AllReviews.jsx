import React, { useEffect, useState } from 'react';
import { FaStar } from 'react-icons/fa';
import { useLoaderData } from 'react-router';

const AllReviews = () => {
    const initialReviews = useLoaderData();
    const [reviews, setReviews] = useState(initialReviews || []);
    const [search, setSearch] = useState('');

    useEffect(() => {
        const fetchReviews = async () => {
            const url = search
                ? `https://food-network-api.vercel.app/reviews?search=${search}`
                : 'https://food-network-api.vercel.app/reviews';

            const res = await fetch(url);
            const data = await res.json();
            setReviews(data);
        };
        fetchReviews();
    }, [search]);

    const topRatedReview = [...reviews].sort((a, b) => b.star_rating - a.star_rating);

    return (
        <div className="p-6 w-7xl mx-auto">
            <div className="mb-6 flex justify-center">
                <input
                    type="text"
                    placeholder="Search by food name..."
                    className="input input-bordered w-full max-w-md"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <h2 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                Food Review Summary ({topRatedReview.length})
            </h2>

            <div className="overflow-x-auto bg-white shadow-xl rounded-2xl border border-gray-100">
                <table className="table w-full">
                    <thead className="bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white text-sm uppercase">
                        <tr>
                            <th>SL No.</th>
                            <th>Food</th>
                            <th>Restaurant</th>
                            <th>Location</th>
                            <th>Rating</th>
                            <th>Review</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {topRatedReview.map((review, index) => (
                            <tr key={review._id} className="hover:bg-gray-50 transition">
                                <td className="font-semibold">{index + 1}</td>
                                <td>
                                    <div className="flex items-center gap-4">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-14 w-14">
                                                <img
                                                    src={review.food_image}
                                                    alt={review.food_name}
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <p className="font-semibold text-gray-800">{review.food_name}</p>
                                            <p className="text-xs text-gray-500">ID: {review._id.slice(-6)}</p>
                                        </div>
                                    </div>
                                </td>

                                <td className="font-medium">{review.restaurant_name}</td>
                                <td className="text-gray-600">{review.location}</td>
                                <td>
                                    <div className="flex items-center gap-1 text-yellow-500">
                                        {Array.from({ length: review.star_rating }).map((_, i) => (
                                            <FaStar key={i} />
                                        ))}
                                        <span className="text-gray-600 ml-1">{review.star_rating}</span>
                                    </div>
                                </td>

                                <td className="max-w-xs text-gray-700 text-sm line-clamp-2">
                                    {review.review_text}
                                </td>

                                <td className="text-gray-600">{review.date_time}</td>

                                <td>
                                    <button className="btn btn-xs bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-105 transition">
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllReviews;
