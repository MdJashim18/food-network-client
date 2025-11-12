import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';
import { useParams } from 'react-router';

const Favorites = () => {
    const { _id } = useParams()
    const { user } = use(AuthContext);
    const [favorites, setFavorites] = useState([]);
    console.log(user)

    useEffect(() => {
        if (user?.email) {

            fetch(`http://localhost:3000/favorites/email?email=${user.email}`)
                .then(res => res.json())
                .then(data => {
                    setFavorites(data);
                })
                .catch(err => console.error('Error fetching favorites:', err));
        }
    }, [user?.email]);
    
    const handleDelete = (_id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You want to remove this favorite?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/favorites/${_id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire('Deleted!', 'Favorite removed.', 'success');
                            setFavorites(favorites.filter(fav => fav._id !== _id));
                        }
                    });
            }
        });
    };

    return (
        <div className="max-w-5xl mx-auto my-20">
            <h2 className="text-3xl font-extrabold mb-8 text-center text-purple-600">
                My Favorites ({favorites.length})
            </h2>

            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 shadow-lg rounded-xl overflow-hidden">
                    <thead className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white">
                        <tr>
                            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
                                Food
                            </th>
                            <th className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-100">
                        {favorites.map((fav) => (
                            <tr key={fav._id} className="bg-gradient-to-r from-gray-50 to-white rounded-xl">
                                <td className="px-6 py-4 flex items-center gap-4">
                                    <img
                                        src={fav.photo}
                                        alt={fav.food_name}
                                        className="w-16 h-16 rounded-full object-cover border-2 border-purple-300"
                                    />
                                    <span className="font-semibold text-gray-800 text-lg">
                                        {fav.food_name}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-center">
                                    <button
                                        onClick={() => handleDelete(fav._id)}
                                        className="bg-red-500 cursor-pointer text-white px-5 py-2 rounded-full font-medium"
                                    >
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

export default Favorites;
