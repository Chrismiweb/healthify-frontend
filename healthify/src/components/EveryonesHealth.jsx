import React from 'react';

const EveryonesHealth = () => (
  <section className="min-h-screen bg-[#587CC1] relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-lg animate-ping"></div>
    </div>

    <div className="container mx-auto px-6 py-6 relative z-10">
        <h3 className="text-3xl lg:text-4xl text-white font-bold leading-tight">Everyone’s Health matters to us</h3>
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
        {/* Left Content - Image */}
        <div className="flex justify-center items-center">
          <img
            src="/Everyone'sHealth.jpg" // Place your image in public as 'family.jpg' or update the path accordingly
            alt="Family enjoying outdoors"
            className="rounded-xl shadow-lg max-w-full h-auto object-cover"
          />
        </div>

        {/* Right Content - Header and Sub-header */}
        <div className="text-left text-gray-900 space-y-8 lg:pl-8">
          {/* <h1 className="text-3xl lg:text-4xl font-bold leading-tight">
            Access quality healthcare within minutes
          </h1> */}
          <p className="text-lg text-white leading-relaxed max-w-lg">
           We are working towards a healthier Nigeria, bringing greater convenience and value to healthcare access. We have carefully designed an array of healthcare plans that ensures there is something for everyone, including seniors.Healthify offers innovative healthcare solutions with flexibility, to provide quality healthcare experiences with peace of mind for the insured, anywhere, anytime.
          </p>
        </div>
      </div>
    </div>

    {/* Bottom Wave */}
    {/* <div className="absolute bottom-0 left-0 right-0">
      <svg viewBox="0 0 1200 120" className="w-full h-12 fill-current text-white">
        <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"></path>
      </svg>
    </div> */}
  </section>
);

export default EveryonesHealth;