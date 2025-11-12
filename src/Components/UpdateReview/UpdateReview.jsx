import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Swal from 'sweetalert2';

const UpdateReview = () => {
    const { _id } = useParams();
    const [review, setReview] = useState(null);

    useEffect(() => {
        if (_id) {
            fetch(`http://localhost:3000/review/${_id}`)
                .then(res => res.json())
                .then(data => setReview(data))
                .catch(err => console.error(err));
        }
    }, [_id]);

    if (!review) return <p className="text-center mt-10">Loading...</p>;

    const handleUpdate = (e) => {
        e.preventDefault();
        const review_text = e.target.review_text.value;

        fetch(`http://localhost:3000/review/${_id}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ review_text })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire('Success!', 'Your review has been updated.', 'success');
                } else {
                    Swal.fire('Info', 'No changes were made.', 'info');
                }
            })
            .catch(err => Swal.fire('Error!', 'Something went wrong', 'error', err));
    };

    return (
        <div className="flex justify-center items-center min-h-screen px-4 my-20">
            <div className="bg-white shadow-2xl rounded-3xl w-full max-w-xl p-8 transform transition-all hover:scale-[1.01]">
                <h2 className="text-3xl font-extrabold text-center mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Update Your Review
                </h2>

                <form onSubmit={handleUpdate} className="space-y-6">
                    <div>
                        <label className="block text-gray-700 font-semibold mb-2 text-lg">
                            Your Review
                        </label>
                        <textarea
                            name="review_text"
                            defaultValue={review.review_text}
                            className="w-full min-h-[150px] p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all text-gray-800 resize-none shadow-sm"
                            placeholder="Write your updated review here..."
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-lg py-3 rounded-2xl shadow-md hover:shadow-xl hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                         Save Changes
                    </button>
                </form>

                <p className="text-center text-gray-500 mt-6 text-sm">
                    Thank you for keeping your review updated
                </p>
            </div>
        </div>

    );
};

export default UpdateReview;
