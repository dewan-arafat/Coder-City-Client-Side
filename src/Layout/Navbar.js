import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link
                                    to="/courses"
                                    title="Courses"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    title="Blog"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faq"
                                    title="FAQ"
                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <Link to="/" className="ml-2 text-xl font-bold tracking-wide text-purple-800 uppercase">Coder City</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <li>
                            <Link
                                to="/courses"
                                title="Courses"
                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400"
                            >
                                Courses
                            </Link>
                        </li>
                        <li><Link
                            to="/blog"
                            title="Blog"
                            className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            Blog
                        </Link></li>
                        <li><Link
                            to="/faq"
                            title="FAQ"
                            class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                            FAQ
                        </Link></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <Link
                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                        {
                            user?.uid ?
                                <>
                                    <img src={user?.photoURL} alt="" className='w-8 h-8 rounded-lg inline' />
                                    <span>{user?.displayName}  </span>
                                    <button onClick={handleLogOut} className="btn btn-outline btn-accent">Log Out</button>
                                </>
                                :
                                <>
                                    <Link
                                        to="/login"
                                        aria-label="Sign in"
                                        title="Sign in"
                                        class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-purple-400 mx-2"
                                    >
                                        Log in
                                    </Link>
                                    <Link
                                        to="/register"
                                        class="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                                        aria-label="Sign up"
                                        title="Sign up"
                                    >
                                        Register
                                    </Link>
                                </>


                        }

                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Navbar;