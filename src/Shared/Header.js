import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Switch from '../Layout/Switch';
import { AuthContext } from '../Context/AuthProvider/AuthProvider';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <div className='bg-gray-300 fixed top-0 left-0 right-0'>
            <div class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between">
                    <div className="flex items-center">
                        <Link
                            to="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center mr-8"
                        >

                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                Coder City
                            </span>
                        </Link>
                        <ul className="flex items-center hidden space-x-8 lg:flex">
                            <li>
                                <Link
                                    to="/courses"
                                    aria-label="Courses"
                                    title="Courses"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    Courses
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/blog"
                                    aria-label="Blog"
                                    title="Blog"
                                    className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    Blog
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/faq"
                                    aria-label="FAQ"
                                    title="FAQ"
                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                >
                                    FAQ
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <ul class="flex items-center hidden space-x-8 lg:flex">
                        <li>
                            <Link
                                class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                            >
                                {
                                    user?.uid ?
                                        <>
                                            <img src={user?.photoURL} alt="" className='w-8 h-8 rounded-lg inline' />
                                            <span className='px-2'>{user?.displayName}  </span>
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
                        </li>
                        <li>
                            <Switch></Switch>
                        </li>
                        <li className='font-bold'> Dark Mode</li>

                    </ul>
                    <div class="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
                            onClick={() => setIsMenuOpen(true)}
                        >
                            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                <path
                                    fill="currentColor"
                                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                                />
                                <path
                                    fill="currentColor"
                                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div class="absolute top-0 left-0 w-full">
                                <div class="p-5 bg-white border rounded shadow-sm">
                                    <div class="flex items-center justify-between mb-4">
                                        <div>
                                            <a
                                                to="/"
                                                aria-label="Company"
                                                title="Company"
                                                class="inline-flex items-center"
                                            >
                                                <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                    Coder City
                                                </span>
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path
                                                        fill="currentColor"
                                                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                    />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <nav>
                                        <ul class="space-y-4">
                                            <li>
                                                <Link
                                                    to="/courses"
                                                    aria-label="Courses"
                                                    title="Courses"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Courses
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/blog"
                                                    aria-label="Courses"
                                                    title="Courses"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    Blog
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    to="/faq"
                                                    aria-label="FAQ"
                                                    title="FAQ"
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    FAQ
                                                </Link>
                                            </li>
                                            <li>
                                                <Link
                                                    class="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                                >
                                                    {
                                                        user?.uid ?
                                                            <>
                                                                <img src={user?.photoURL} alt="" className='w-8 h-8 rounded-lg inline' />
                                                                <span className='px-2'>{user?.displayName}  </span>
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
                                            </li>
                                            <li className='flex'>
                                                <Switch></Switch>
                                                <p className='font-bold pl-3'> Dark Mode</p>
                                            </li>



                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )
                        }
                    </div >
                </div >
            </div >
        </div >
    );
};

export default Header;