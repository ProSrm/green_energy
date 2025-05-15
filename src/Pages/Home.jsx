import React from 'react';
import homevideo from "/ac.mp4";

const HomePage = () => {
    return (
        <div className="relative">
            {/* video and text overlay */}
            <div className="relative h-screen w-full overflow-hidden">
                <video
                    autoPlay
                    muted
                    loop
                    className="absolute top-0 left-0 w-full h-full object-cover"
                >
                    <source src={homevideo} type="video/mp4" />
                </video>


                <div className="absolute bottom-8 left-8 text-white z-10 max-w-2xl">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-lg">
                        Welcome to My Website
                    </h1>
                    <p className="text-lg md:text-xl drop-shadow-lg">
                        This is a modern React homepage layout with a video background.
                    </p>
                </div>
            </div>

            {/* product section */}
            <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
                    Featured Products
                </h2>

                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Product Image</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Product One</h3>
                            <p className="text-gray-600 mt-2">Amazing product description here</p>
                            <button className="mt-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition">
                                View Details
                            </button>
                        </div>
                    </div>


                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Product Image</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Product Two</h3>
                            <p className="text-gray-600 mt-2">Another great product description</p>
                            <button className="mt-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition">
                                View Details
                            </button>
                        </div>
                    </div>


                    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
                        <div className="h-48 bg-gray-200 flex items-center justify-center">
                            <span className="text-gray-500">Product Image</span>
                        </div>
                        <div className="p-6">
                            <h3 className="text-xl font-semibold text-gray-800">Product Three</h3>
                            <p className="text-gray-600 mt-2">Third excellent product description</p>
                            <button className="mt-4 px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600 transition">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePage;