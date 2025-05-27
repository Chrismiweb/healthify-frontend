import React from 'react';

const DoctorSection = () => {
    return (
        <section className="relative min-h-screen bg-gray-800 overflow-hidden">
            {/* Background overlay with medical professional image */}
            <div className="absolute inset-0 bg-black/60 z-10"></div>
            
            {/* Background image - you'll need to add your actual image */}
            <div 
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/doctor.jpg')" // Replace with your actual image path
                }}
            ></div>

            {/* Animated background elements */}
            <div className="absolute inset-0 z-5">
                <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-bounce"></div>
            </div>

            {/* Content */}
            <div className="relative z-20 container mx-auto px-6 py-16 flex items-left min-h-screen">
                <div className="max-w-md text-white space-y-8">
                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                        Are you a doctor?
                    </h1>

                    <div className="text-left space-y-6 text-lg leading-relaxed">
                        <p className="text-gray-200">
                            Healthify is available to all healthcare providers 
                            including practitioners, specialists, therapists, 
                            counsellors, and more.
                        </p>

                        <p className="text-left text-gray-200">
                            Need more information about doctors on 
                            Healthify? Contact our doctor liaison team at{' '}
                            <span className="text-blue-400 font-semibold">
                                liason@healthify.com
                            </span>
                        </p>

                        <p className="text-left text-gray-200">
                            If you are interested in providing healthcare services, 
                            click the join us button below!
                        </p>
                    </div>

                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Join Healthify
                    </button>
                </div>
            </div>

            {/* Bottom decorative wave */}
            <div className="absolute bottom-0 left-0 right-0 z-20">
                <svg viewBox="0 0 1200 60" className="w-full h-8 fill-current text-white/10">
                    <path d="M0,30 C200,60 400,0 600,30 C800,60 1000,0 1200,30 L1200,60 L0,60 Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default DoctorSection;