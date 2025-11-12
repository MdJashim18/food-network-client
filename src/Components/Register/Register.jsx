import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../Provider/AuthProvider';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';

const Register = () => {
    const { createUser, updateUser, setUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();
        setError('');
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;


        const uppercaseRegex = /[A-Z]/;
        const lowercaseRegex = /[a-z]/;

        if (password.length < 6) {
            setError('Password must be at least 6 characters long.');
            toast("Password must be at least 6 characters long!");
            return;
        }

        if (!uppercaseRegex.test(password)) {
            setError('Password must contain at least one uppercase letter.');
            toast("Password must contain at least one uppercase letter!");
            return;
        }

        if (!lowercaseRegex.test(password)) {
            setError('Password must contain at least one lowercase letter.');
            toast("Password must contain at least one lowercase letter!");
            return;
        }


        createUser(email, password).then(result => {

            const user = result.user
            updateUser({ displayName: name, photoURL: photo }).then(() => {
                setUser({ ...user, displayName: name, photoURL: photo })
                navigate("/")
            }).catch((error) => {

                console.log(error)
                setUser(user)
            });
            console.log(user)


        })
            .catch(error => {
                console.log(error.message)
                toast("Registration fails!");
            })
    };
    const handlePasswordToggle = (e) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                <form onSubmit={handleRegister}>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input type="text" name='name' className="input" placeholder="Name" required />

                            <label className="label">Photo URL</label>
                            <input type="text" name='photo' className="input" placeholder="Photo URL" />

                            <label className="label">Email</label>
                            <input type="email" name='email' className="input" placeholder="Email" required />

                            <label className="label">Password</label>
                            <div className='relative'>
                                <input type={showPassword ? 'text' : 'password'} name='password' className="input" placeholder="Password" />
                                <button onClick={handlePasswordToggle} className="btn btn-xs absolute top-2 right-5"> {showPassword ? <FaEyeSlash /> : <FaEye />} </button>
                            </div>


                            {error && <p className='text-red-500 text-sm mt-2'>{error}</p>}

                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                            <p className='font-semibold text-center pt-5'>
                                Already Have An Account?{" "}
                                <Link className='text-secondary' to="/login">Login</Link>
                            </p>
                        </fieldset>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default Register;