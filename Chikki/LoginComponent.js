import React, { useState } from 'react';
import { IoCloseCircle } from "react-icons/io5";
import { ImUser } from "react-icons/im";
import { TbKeyFilled } from "react-icons/tb";
import { RiLock2Fill } from "react-icons/ri";
import { FaRegAddressCard } from "react-icons/fa";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { database } from './FirebaseComponent';
import { Link } from 'react-router-dom';

const LoginComponent = ({ closeLogin }) => {
    const [logerr, setLogerr] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginSuccess, setLoginSuccess] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(database, email, password);
            console.log('login successful');
            setLogerr('');
            setLoginSuccess(true); 
            setTimeout(() => {
                closeLogin();
                setLoginSuccess(false); 
            }, 2000); 
        } catch (err) {
            console.log(err);
            setLogerr(err.message);
        }
    }

    return (
        <div className="fixed w-full min-h-full flex justify-center lg:px-0 px-7 lg:items-center pt-24 lg:pt-0 top-0 z-20 bg-opacity-50 bg-black overflow-hidden">
            <div className="bg-white w-full md:w-3/5 lg:w-2/5 h-max ">
                <div className="p-1 px-4 h-11 flex items-center w-full bg-red-600 text-white font-sans">
                    <FaRegAddressCard className="text-3xl font-light" />
                    <span className="ml-4 flex w-full relative font-bold text-base font-sans">
                        SIGN IN OR REGISTER
                        <Link onClick={closeLogin}>
                            <IoCloseCircle className="text-3xl absolute right-0 hover:text-opacity-70 text-white cursor-pointer" />
                        </Link>
                    </span>
                </div>
                <div className="flex flex-col md:flex-row mt-8">
                    <div className="w-full md:w-1/2 border-r border-gray-300 px-6">
                        <form onSubmit={handleSubmit}>
                            <div className="border border-gray-300 flex w-full hover:shadow-md mb-5 font-sans">
                                <ImUser className="text-4xl px-2 text-gray-200 bg-userback" />
                                <input type="text" className="w-full px-2 focus:outline-none placeholder:text-black placeholder:font-sans" placeholder="Username" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            {logerr && <p className="text-red-600 text-xs">{logerr}</p>}
                            <div className="border border-gray-300 flex w-full hover:shadow-md mb-3">
                                <TbKeyFilled className="text-4xl px-2 text-gray-200 bg-userback" />
                                <input type="password" className="w-full px-2 focus:outline-none placeholder:text-black placeholder:font-sans" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            {logerr && <p className="text-red-600 text-xs">{logerr}</p>}
                            <p className="text-sm mb-2 hover:text-red-500 cursor-pointer font-sans">Forgot your password?</p>
                            <button className="shadow-2xl duration-75 font-sans hover:bg-red-600 bg-red-500 py-2 px-3 text-white text-xs font-bold flex justify-center items-center mb-3" type="submit">
                                <RiLock2Fill className="text-xl mr-2 font-sans" /> LOGIN
                            </button>
                        </form>
                    </div>
                    <div className="w-full md:w-1/2 px-6 mt-4 md:mt-0">
                        <p className="font-serif font-medium text-base">NEW HERE?</p>
                        <p className="text-sm -mt-1 mb-2 font-sans">Registration is free and easy!</p>
                        <ul className="list-disc font-bold list-inside font-customSerif text-gray-500 text-sm mb-3">
                            <li className="mb-1.5 font-sans">Faster checkout</li>
                            <li className="mb-1.5 font-sans">Save multiple shipping addresses</li>
                            <li className="mb-1.5 font-sans">View and track orders and more</li>
                        </ul>
                        <button className="shadow-2xl font-sans duration-75 hover:bg-red-600 bg-red-500 py-3 px-11 text-white text-xs font-bold flex justify-center items-center mb-3">
                            <Link to="account" onClick={closeLogin}>CREATE AN ACCOUNT</Link>
                        </button>
                    </div>
                </div>
            </div>
            {loginSuccess && (
                <div className="fixed top-1/2 left-1/2 font-sans transform -translate-x-1/2 -translate-y-1/2 bg-green-500 text-white py-2 px-4 rounded-md z-30">
                    Successfully Logged In!
                </div>
            )}
        </div>
    );
}

export default LoginComponent;
