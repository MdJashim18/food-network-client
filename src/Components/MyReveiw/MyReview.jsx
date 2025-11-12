import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaStar } from 'react-icons/fa';
import { Link, useParams } from 'react-router';

const MyReview = () => {
    const { _id } = useParams()
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);


    useEffect(() => {
        if (user?.email) {
            fetch(`http://localhost:3000/reviews?email=${user.email}`)
                .then(res => res.json())
                .then(data => setReviews(data))
                .catch(err => console.error('Error fetching reviews:', err));
        }
    }, [user?.email]);


    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to delete this review?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/review/${_id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Your review has been removed.', 'success');
                            setReviews(reviews.filter(review => review._id !== _id));
                        }
                    });
            }
        });
    };


    return (
        <div className="max-w-6xl mx-auto p-6 mt-10 bg-base-200 rounded-2xl shadow-lg my-20">
            <h2 className="text-2xl font-bold mb-6 text-center">My Reviews ({reviews.length})</h2>

            <div className="overflow-x-auto">
                <table className="table">
                    <thead>
                        <tr className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                            <th>SL</th>
                            <th>Food</th>
                            <th>Restaurant</th>
                            <th>Review</th>
                            <th>Rating</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            reviews.map((review, index) => (
                                <tr key={review._id} className="hover:bg-gray-100 transition">
                                    <td>{index + 1}</td>
                                    <td className="font-semibold">
                                        <div className="flex justify-center items-center gap-3">
                                            <img
                                                src={review.food_image}
                                                alt={review.food_name}
                                                className="w-12 h-12 rounded-xl object-cover"
                                            />
                                            {review.food_name}
                                        </div>
                                    </td>
                                    <td className=''>{review.restaurant_name}</td>
                                    <td className="max-w-xs">
                                        <p className="text-gray-700 text-sm line-clamp-2">{review.review_text}</p>
                                    </td>
                                    <td className='flex justify-center gap-1 items-center'><FaStar className='text-orange-300'></FaStar> {review.star_rating}</td>
                                    <td>{review.date_time}</td>
                                    <td>
                                        <div className="flex gap-2">
                                            <Link to={`/updateReview/${review._id}`}
                                                className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
                                            >
                                                Update
                                            </Link>
                                            <button
                                                onClick={() => handleDelete(review._id)}
                                                className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReview;
