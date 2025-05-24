
import React from 'react';
import { Heart, Users, Video } from 'lucide-react';

const PhoneMockup = () => (
  <div className="relative">
    {/* Phone Frame */}
    <div className="w-64 h-[500px] bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
      <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
        {/* Status Bar */}
        <div className="bg-blue-500 h-8 flex items-center justify-between px-4 text-white text-xs">
          <span>10:00</span>
          <div className="flex items-center space-x-1">
            <span>LTE</span>
            <div className="w-4 h-2 border border-white rounded-sm">
              <div className="w-3/4 h-full bg-white rounded-sm"></div>
            </div>
          </div>
        </div>
        
        {/* App Content */}
        <div className="p-6 h-full bg-gray-50">
          {/* Doctor Images */}
          <div className="flex justify-center mb-6 relative">
            <div className="w-16 h-16 rounded-full bg-blue-100 border-2 border-white shadow-lg -mr-2 z-10">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
                <Users className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="w-16 h-16 rounded-full bg-pink-100 border-2 border-white shadow-lg -mr-2 z-20">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center">
                <Heart className="w-8 h-8 text-white" />
              </div>
            </div>
            <div className="w-16 h-16 rounded-full bg-green-100 border-2 border-white shadow-lg z-30">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
                <Video className="w-8 h-8 text-white" />
              </div>
            </div>
            <Heart className="absolute top-0 right-4 w-4 h-4 text-red-400 fill-current animate-pulse" />
          </div>
          
          {/* Login Form */}
          <div className="space-y-4">
            <div>
              <input 
                type="text" 
                placeholder="User Name" 
                className="w-full p-3 bg-white rounded-lg border border-gray-200 text-sm"
                readOnly
              />
            </div>
            <div>
              <input 
                type="password" 
                placeholder="Password" 
                className="w-full p-3 bg-white rounded-lg border border-gray-200 text-sm"
                readOnly
              />
            </div>
            <div className="text-right">
              <a href="#" className="text-xs text-blue-500">Forgot Password?</a>
            </div>
            <button className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium text-sm hover:bg-blue-600 transition-colors">
              LOGIN
            </button>
            <div className="text-center text-xs text-gray-600">
              Don't have an account? <a href="#" className="text-blue-500">Sign up</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    {/* Floating Elements */}
    <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/20 rounded-full animate-bounce"></div>
    <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-white/30 rounded-full animate-pulse"></div>
    <div className="absolute top-1/2 -left-8 w-4 h-4 bg-blue-400/40 rounded-full animate-ping"></div>
  </div>
);
export default PhoneMockup;