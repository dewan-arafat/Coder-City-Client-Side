import React from 'react';

const Blog = () => {
    return (
        <div >
            <div className="bg-gray-100 text-gray-800 pt-32">
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 mb-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2022</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-600 text-gray-50">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <a rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline"> what is cors?</a>
                        <p className="mt-2">Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
                                <span className="hover:underline text-gray-600">Leroy Jenkins</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 mb-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2020</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-600 text-gray-50">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <p rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">Why are you using firebase? What other options do you have to implement authentication?</p>
                        <p className="mt-2">Google Analytics for Firebase allows you to track your users' journey through realtime and custom reporting. As mentioned previously, Firebase supports IOS, Android, Web, and Unity products, allowing you to track your users across a wide range of devices.
                            Usually, authentication by a server entails the use of a user name and password. Other ways to authenticate can be through cards, retina scans, voice recognition, and fingerprints.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
                                <span className="hover:underline text-gray-600">Leroy Jenkins</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 mb-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2020</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-600 text-gray-50">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <p rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">How does the private route work?</p>
                        <p className="mt-2">The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
                                <span className="hover:underline text-gray-600">Leroy Jenkins</span>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="container max-w-4xl px-10 py-6 mx-auto rounded-lg shadow-sm bg-gray-50 pb-3">
                    <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Jun 1, 2020</span>
                        <a rel="noopener noreferrer" href="#" className="px-2 py-1 font-bold rounded bg-violet-600 text-gray-50">Javascript</a>
                    </div>
                    <div className="mt-3">
                        <p rel="noopener noreferrer" href="#" className="text-2xl font-bold hover:underline">What is Node? How does Node work?</p>
                        <p className="mt-2">What is this node?
                            Image result for What is Node? How does Node work?
                            Node. js is an open-source, cross-platform JavaScript runtime environment and library for running web applications outside the client's browser. Ryan Dahl developed it in 2009, and its latest iteration, version 15.14, was released in April 2021.Node is completely event-driven. Basically the server consists of one thread processing one event after another. A new request coming in is one kind of event. The server starts processing it and when there is a blocking IO operation, it does not wait until it completes and instead registers a callback function.</p>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                        <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-600">Read more</a>
                        <div>
                            <a rel="noopener noreferrer" href="#" className="flex items-center">
                                <img src="https://source.unsplash.com/50x50/?portrait" alt="avatar" className="object-cover w-10 h-10 mx-4 rounded-full bg-gray-500" />
                                <span className="hover:underline text-gray-600">Leroy Jenkins</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;