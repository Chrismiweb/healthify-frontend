import React from 'react';
import { MessageCircle, Video, Heart, Lock } from 'lucide-react';

const TeleHealthFeatures = () => {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-green-300/20 rounded-full blur-2xl animate-bounce"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-purple-300/20 rounded-full blur-lg animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/4 w-36 h-36 bg-pink-300/15 rounded-full blur-xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Personalized Tele Health
          </h1>
          <p className="text-xl text-gray-600">
            Check out our features
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[calc(100vh-300px)]">
          {/* Left Content - Phone Mockup */}
          <div className="flex justify-center items-center">
            <div className="relative">
              {/* Phone Frame */}
              <div className="w-60 h-[500px] bg-black rounded-[3rem] p-3 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="w-full h-full bg-gradient-to-b from-blue-500 to-blue-600 rounded-[2.5rem] overflow-hidden relative">
                  {/* Status Bar */}
                  <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                    <span className="font-medium">10:00</span>
                    <div className="flex items-center space-x-1">
                      <span className="text-xs">LTE</span>
                      <div className="flex space-x-1">
                        <div className="w-1 h-3 bg-white rounded"></div>
                        <div className="w-1 h-3 bg-white rounded"></div>
                        <div className="w-1 h-3 bg-white/70 rounded"></div>
                      </div>
                      <div className="w-6 h-3 border border-white rounded-sm">
                        <div className="w-4 h-2 bg-white rounded-sm m-0.5"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Video Call Interface */}
                  <div className="px-4 py-2">
  <div className="bg-gray-800 rounded-2xl overflow-hidden h-96 relative">
    {/* Doctor's Video */}
    <div className="w-full h-full flex items-center justify-center relative">
      <img
        src="/FemaleDoctor.jpg" // Place your image in public as 'doctor1.jpg' or update the path accordingly
        alt="Doctor"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ zIndex: 0 }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-teal-400/30 to-blue-500/30"></div>
      <div className="text-center text-white relative z-10">
        <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto overflow-hidden">
          <img
            src="/doctor1.jpg"
            alt="Doctor"
            className="w-full h-full object-cover rounded-full"
          />
        </div>
        <h3 className="text-lg font-semibold">Miss Kareemah</h3>
        <p className="text-sm opacity-90">Ringing...</p>
      </div>
    </div>
    
    {/* Call Controls */}
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
      <button className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
        <span className="text-white text-xl">📞</span>
      </button>
    </div>
  </div>
</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full animate-bounce"></div>
              <div className="absolute -bottom-8 -left-8 w-12 h-12 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
            </div>
          </div>

          {/* Right Content - Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Instant Messaging */}
            <div className="text-center group">
              <div className="w-32 h-32  rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <MessageCircle className="w-28 h-28 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Instant Messaging</h3>
              <p className="text-gray-600  text-sm  leading-relaxed">
                Chat with licensed<br />
                medical practitioners!
              </p>
            </div>

            {/* Video Call */}
            <div className="text-center group">
              <div className="w-32 h-32  rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">

                <Video className="w-28 h-28 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Video call</h3>
              <p className="text-gray-600  text-sm  leading-relaxed">
                Video call licensed<br />
                medical practitioners!
              </p>
            </div>

            {/* Wellness & Lifestyle */}
            <div className="text-center group">
              <div className="w-32 h-32  rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <Heart className="w-28 h-28 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Wellness & lifestyle</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Track your<br />
                fitness journey!
              </p>
            </div>

            {/* Secured Connections */}
            <div className="text-center group">
              <div className="w-32 h-32  rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                <Lock className="w-28 h-28 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Secured connections</h3>
              <p className="text-gray-600  text-sm leading-relaxed">
                Secure connections<br />
                with your doctor!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" className="w-full h-12 fill-current text-gray-50">
          <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default TeleHealthFeatures;