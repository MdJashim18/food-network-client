import React, { use } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Loading from '../Loading/Loading';


const Profile = () => {
    const { user } = use(AuthContext);


    if (!user) {
        return <Loading></Loading>;
    }

    const { photoURL ,displayName, email } = user;

    return (
        <div className="w-11/12 mx-auto mb-10">



            <h1 className="text-3xl md:text-4xl text-center font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent my-8">
                Profile
            </h1>


            <div className="w-full md:w-8/12 lg:w-6/12 mx-auto p-5 md:p-8 shadow-2xl rounded-3xl bg-white">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-10">


                    <div className="relative w-8/12 sm:w-6/12 md:w-5/12 lg:w-4/12">
                        <div className="absolute -inset-3 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-2xl blur-lg opacity-30"></div>
                        <img
                            className="relative w-full aspect-square rounded-2xl object-cover border-4 border-white shadow-lg"
                            src={photoURL}
                            alt="Profile"
                        />
                    </div>


                    <div className="w-full md:w-7/12 text-center md:text-left mt-6 md:mt-0">
                        <h2 className="text-2xl font-semibold text-gray-500">
                            {displayName}
                        </h2>

                        <p className="text-lg text-gray-500 mb-4">{email}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Profile;