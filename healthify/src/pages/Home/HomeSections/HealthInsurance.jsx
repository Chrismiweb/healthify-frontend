import React from 'react';


const avatarImages = [
    '/Image2.jpg',
    '/image3.jpg',
    '/Image4.jpg',
    '/Image5.jpg',
    '/image6.jpg',
    '/Image7.jpg',
    '/Image8.jpg',
    '/Image9.jpg',
];


const HealthInsuranceHero = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0">
                <div className="absolute top-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-32 left-10 w-48 h-48 bg-orange-300/20 rounded-full blur-2xl animate-bounce"></div>
                <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-lg animate-ping"></div>
                <div className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-purple-300/15 rounded-full blur-xl animate-pulse"></div>
            </div>

            <div className="container mx-auto px-6 py-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
                    {/* Left Content - Text */}
                    <div className="text-left text-gray-900 space-y-8">
                        <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                            Health Insurance{' '}
                            <span className="block text-gray-800">
                                that puts you in{' '}
                                <span className="text-blue-600">control</span>
                            </span>
                        </h1>

                        <p className="text-xl text-gray-700 leading-relaxed max-w-lg">
                            Get access to premium healthcare facilities and services
                            that fit your specific need, time, and budget.
                        </p>

                        <p className="text-lg text-gray-600 leading-relaxed max-w-lg">
                            Healthify leverages technology to redefine{' '}
                            <span className="font-semibold text-blue-600">"quality healthcare"</span>{' '}
                            by making it simple, affordable, and wholistic.
                        </p>

                        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Learn more
                        </button>
                    </div>

                    {/* Right Content - Visual Elements */}
                    <div className="flex justify-center items-center">
                        <div className="space-y-6 w-full max-w-md">
                            {/* Family Image Card */}
                            <div className="relative group">
                                <div className="bg-gradient-to-br from-orange-100 to-red-100 rounded-3xl p-6 shadow-xl transform transition-all duration-300 group-hover:scale-105">
                                    <div className=" rounded-2xl p-6 shadow-lg">
                                        <div className="flex items-center justify-center mb-4">
                                            <img
                                                src="/Image1.jpg" // Update the path if your image is named differently or in another folder
                                                alt="Family"
                                                className="rounded-2xl shadow-lg object-cover w-full h-auto"
                                                style={{ objectPosition: 'center' }}
                                            />
                                        </div>

                                    </div>
                                </div>
                            </div>

                            {/* Happy Customers Card */}
                            <div className="relative group">
                                <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-6 shadow-xl transform transition-all duration-300 group-hover:scale-105">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-white font-bold text-lg">Happy Customers</h3>
                                        <div className="text-white font-bold text-2xl">
                                            100<span className="text-blue-200">%</span>
                                        </div>
                                    </div>

                                    <div className="flex -space-x-2 mb-4 justify-center">
                                        {avatarImages.map((src, i) => (
                                            <div
                                                key={i}
                                                className="w-10 h-10 rounded-full border-3 border-white overflow-hidden bg-gray-200 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110"
                                            >
                                                <img
                                                    src={src}
                                                    alt={`Avatar ${i + 1}`}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                        ))}
                                    </div>

                                    <div className="w-full bg-blue-800/50 rounded-full h-3 overflow-hidden">
                                        <div className="bg-gradient-to-r from-white to-blue-100 h-3 rounded-full shadow-inner animate-pulse" style={{ width: '100%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1200 120" className="w-full h-12 fill-current text-white">
                    <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default HealthInsuranceHero;