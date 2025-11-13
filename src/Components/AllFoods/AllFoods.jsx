import React from 'react';
import { Link, useLoaderData } from 'react-router';
import AllFoodsCard from '../AllFoodsCard/AllFoodsCard';

const AllFoods = () => {
    const allData = useLoaderData();

    return (
        <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl text-center mt-10 font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                All Foods
            </h2>

           
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 justify-items-center">
                {allData.map((food) => (
                    <AllFoodsCard key={food._id} food={food} />
                ))}
            </div>

            <div className="flex justify-center items-center my-10">
                <Link
                    to="/"
                    className="btn font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white mt-4"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
};

export default AllFoods;
