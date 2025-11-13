import React, { useContext } from 'react';
import BaImg1 from '../../assets/B2.jpg';
import BaImg2 from '../../assets/B4.jpg';
import BaImg3 from '../../assets/B5.jpg';
import BaImg4 from '../../assets/B6.jpg';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLoaderData } from 'react-router';
import Foods from '../Foods/Foods';
import Banner from '../Banner/Banner';

const Home = () => {
    const { user } = useContext(AuthContext);
    const foodData = useLoaderData();
    console.log(user);
    console.log(foodData);

    const topRatedFoods = [...foodData].sort((a, b) => b.rating - a.rating).slice(0, 6);

    return (
        <div className="w-[95%] mx-auto">
           
            <Banner></Banner>

           
            <div className="w-[95%]  mx-auto px-4">
                <h2 className="text-3xl text-center my-10 font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                    Top Rated Foods
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 justify-items-center">
                    {topRatedFoods.map((food) => (
                        <Foods key={food._id} food={food} />
                    ))}
                </div>
            </div>

            <div className="w-full flex justify-center my-10">
                <Link
                    to="/allFoods"
                    className="btn text-center py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold rounded-lg shadow-md hover:shadow-xl transition-all"
                >
                    View More
                </Link>
            </div>
        </div>
    );
};

export default Home;
