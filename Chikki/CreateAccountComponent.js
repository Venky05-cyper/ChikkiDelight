import React, { useState, useEffect } from 'react';
import img from './img/new.jpeg';
import { database } from './FirebaseComponent';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const CreateAccountComponent = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [signupError, setSignupError] = useState('');
    const [loginError, setLoginError] = useState('');
    const [hide, setHide] = useState(false);
    const [user, setUser] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const savedUser = localStorage.getItem('username');
        if (savedUser) {
            setUser(savedUser);
            setHide(true);
        }
    }, []);

    const handleSignup = async (e) => {
        e.preventDefault();
        setSignupError('');
        try {
            await createUserWithEmailAndPassword(database, email, password);
            console.log('Account created');
            localStorage.setItem('username', username); // Save username to local storage
            setUser(username); // Set the username after successful signup
            setHide(true);  // Hide the forms after successful signup
            navigate('/account');
        } catch (err) {
            setSignupError(err.message);
            console.log(err);
        }
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoginError('');
        try {
            await signInWithEmailAndPassword(database, email, password);
            console.log('Logged in successfully');
            localStorage.setItem('username', username); // Save username to local storage
            setUser(username); // Set the username after successful login
            setHide(true);  // Hide the forms after successful login
            navigate('/');
        } catch (err) {
            setLoginError(err.message);
            console.log(err);
        }
    };

    return (
        <div>
            <div className="w-full relative">
                <img src={img} alt="img" className="w-full h-48 object-cover" />
                <div className="absolute inset-0 bg-black bg-opacity-65 flex flex-col justify-center items-center">
                    <p className="font-serif text-2xl text-white lg:mt-16">My Account</p>
                    <p className="text-sm text-white font-sans">
                        <a href="/" className="hover:text-red-600">Home</a> | <span className="text-red-600">My Account</span>
                    </p>
                </div>
            </div>

            {!hide ? (
                <div className="px-4 py-10 sm:px-10 md:px-20 lg:px-44 bg-offwhite">
                    <div className="bg-white flex flex-col md:flex-row p-6 md:p-10 font-serif gap-8">
                        <div className="w-full md:w-1/2">
                            <form onSubmit={handleLogin}>
                                <h1 className="border-b pb-2 text-2xl font-sans">Login</h1>
                                <div className="mt-5 text-gray-600">
                                    <label htmlFor="loginEmail" className="text-xs font-sans">Username or email address <span className="text-red-600">*</span></label>
                                    <div className="w-full">
                                        <input 
                                            type="text" 
                                            id="loginEmail" 
                                            className="bg-offwhite px-4 py-1.5 focus:outline-none my-2 w-full" 
                                            onChange={(e) => setEmail(e.target.value)} 
                                        />
                                    </div>
                                    {loginError && <p className="text-xs text-red-600">{loginError}</p>}
                                </div>
                                <div className="mt-5 text-gray-600">
                                    <label htmlFor="loginPassword" className="text-xs font-sans">Password <span className="text-red-600">*</span></label>
                                    <div className="w-full">
                                        <input 
                                            type="password" 
                                            id="loginPassword" 
                                            className="bg-offwhite px-4 py-1.5 focus:outline-none my-2 w-full" 
                                            onChange={(e) => setPassword(e.target.value)} 
                                        />
                                    </div>
                                    {loginError && <p className="text-xs text-red-600">{loginError}</p>}
                                </div>
                                <div className="mt-5 text-gray-600 text-xs">
                                    <input type="checkbox" name="check" id="check" />
                                    <label htmlFor="check" className="ml-1 font-sans">Remember me</label>
                                </div>
                                <div className="mt-5 text-xs">
                                    <button className="bg-red-600 py-2.5 px-5 rounded text-white font-sans">Login</button>
                                </div>
                                <div className="mt-5 text-xs text-red-500">
                                    <span>Lost your password?</span>
                                </div>
                            </form>
                        </div>
                        <div className="w-full md:w-1/2">
                            <form onSubmit={handleSignup}>
                                <h1 className="border-b pb-2 text-2xl font-sans">Signup</h1>
                                <div className="mt-5 text-gray-600">
                                    <label htmlFor="signupUsername" className="text-xs font-sans">Username <span className="text-red-600">*</span></label>
                                    <div className="w-full">
                                        <input
                                            type="text"
                                            id="signupUsername"
                                            className="bg-offwhite px-4 py-1.5 focus:outline-none my-2 w-full"
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="mt-5 text-gray-600">
                                    <label htmlFor="signupEmail" className="text-xs font-sans">Email address <span className="text-red-600">*</span></label>
                                    <div className="w-full">
                                        <input
                                            type="email"
                                            id="signupEmail"
                                            className="bg-offwhite px-4 py-1.5 focus:outline-none my-2 w-full"
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        {signupError.includes('email') && <p className="text-xs text-red-600">{signupError}</p>}
                                    </div>
                                </div>
                                <div className="mt-5 text-gray-600">
                                    <label htmlFor="signupPassword" className="text-xs font-sans">Password <span className="text-red-600">*</span></label>
                                    <div className="w-full">
                                        <input
                                            type="password"
                                            id="signupPassword"
                                            className="bg-offwhite px-4 py-1.5 focus:outline-none my-2 w-full"
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        {signupError.includes('password') && <p className="text-xs text-red-600">{signupError}</p>}
                                    </div>
                                </div>
                                <div className="mt-5 text-sm">
                                    <button className="bg-red-600 py-2 px-5 rounded text-white font-sans">Signup</button>
                                </div>
                                {signupError && <p className="text-xs text-red-600">{signupError}</p>}
                            </form>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="px-4 py-12 sm:px-10 md:px-20 lg:px-44 bg-offwhite text-center pb-96">
                    <div className="bg-white flex flex-col justify-center p-6 md:p-10 lg:font-serif font-sans">
                        <h1 className="text-2xl">Welcome, {user}!</h1>
                        <p className="mt-5">You have successfully logged in.</p>
                    </div>
                </div>

            )}
        </div>
    );
};

export default CreateAccountComponent;
