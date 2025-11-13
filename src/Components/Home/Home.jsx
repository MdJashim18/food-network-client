import React, { useContext } from 'react';
import BaImg1 from '../../assets/B2.jpg';
import BaImg2 from '../../assets/B4.jpg';
import BaImg3 from '../../assets/B5.jpg';
import BaImg4 from '../../assets/B6.jpg';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link, useLoaderData } from 'react-router';
import Foods from '../Foods/Foods';

const Home = () => {
    const { user } = useContext(AuthContext);
    const foodData = useLoaderData();
    console.log(user);
    console.log(foodData);

    const topRatedFoods = [...foodData].sort((a, b) => b.rating - a.rating).slice(0, 6);

    return (
        <div className="max-w-7xl mx-auto">
           
            <div className="carousel w-full h-[70vh] rounded-2xl overflow-hidden">
                <div id="slide1" className="carousel-item relative w-full">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img src={BaImg1} className="w-full object-cover" alt="Food" />
                    <div className="absolute z-20 text-white w-full text-center top-1/2 transform -translate-y-1/2 px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
                            Taste the Perfect <span className="text-amber-400 block">Flavors</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                            Experience culinary excellence with our handcrafted dishes made from the freshest ingredients.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-primary bg-amber-500 border-amber-500 hover:bg-amber-600 hover:border-amber-600 text-white px-8 py-3">
                                Order Now
                            </button>
                            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                                View Menu
                            </button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide4" className="btn btn-circle bg-black/50 hover:bg-black/70 border-none text-white">❮</a>
                        <a href="#slide2" className="btn btn-circle bg-black/50 hover:bg-black/70 border-none text-white">❯</a>
                    </div>
                </div>

                <div id="slide2" className="carousel-item relative w-full">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img src={BaImg2} className="w-full object-cover" alt="Fresh Ingredients" />
                    <div className="absolute z-20 text-white w-full text-center top-1/2 transform -translate-y-1/2 px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
                            Fresh & Organic <span className="text-green-400 block">Ingredients</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                            We source only the finest organic ingredients to create healthy and delicious meals for you.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-primary bg-green-600 border-green-600 hover:bg-green-700 hover:border-green-700 text-white px-8 py-3">
                                Our Story
                            </button>
                            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide1" className="btn btn-circle bg-black/50 hover:bg-black/70 border-none text-white">❮</a>
                        <a href="#slide3" className="btn btn-circle bg-black/50 hover:bg-black/70 border-none text-white">❯</a>
                    </div>
                </div>

                <div id="slide3" className="carousel-item relative w-full">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img src={BaImg3} className="w-full object-cover" alt="Chef" />
                    <div className="absolute z-20 text-white w-full text-center top-1/2 transform -translate-y-1/2 px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
                            Master Chefs <span className="text-red-400 block">At Work</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                            Our experienced chefs bring passion and creativity to every dish they create.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-primary bg-red-500 border-red-500 hover:bg-red-600 hover:border-red-600 text-white px-8 py-3">
                                Book Table
                            </button>
                            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                                Meet Our Team
                            </button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide2" className="btn btn-circle bg-black/50 hover:bg-black/70 border-none text-white">❮</a>
                        <a href="#slide4" className="btn btn-circle bg-black/50 hover:bg-black/70 border-none text-white">❯</a>
                    </div>
                </div>

                <div id="slide4" className="carousel-item relative w-full">
                    <div className="absolute inset-0 bg-black/40 z-10"></div>
                    <img src={BaImg4} className="w-full object-cover" alt="Dining" />
                    <div className="absolute z-20 text-white w-full text-center top-1/2 transform -translate-y-1/2 px-4">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif">
                            Unforgettable <span className="text-purple-400 block">Dining Experience</span>
                        </h1>
                        <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
                            Create lasting memories with our exceptional ambiance and world-class service.
                        </p>
                        <div className="flex gap-4 justify-center">
                            <button className="btn btn-primary bg-purple-500 border-purple-500 hover:bg-purple-600 hover:border-purple-600 text-white px-8 py-3">
                                Reserve Now
                            </button>
                            <button className="btn btn-outline border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3">
                                View Gallery
                            </button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between z-30">
                        <a href="#slide3" className="btn btn-circle bg-black/50 hover:bg-black/70 border-none text-white">❮</a>
                        <a href="#slide1" className="btn btn-circle bg-black/50 hover:bg-black/70 border-none text-white">❯</a>
                    </div>
                </div>
            </div>

           
            <div className="max-w-7xl mx-auto px-4">
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
