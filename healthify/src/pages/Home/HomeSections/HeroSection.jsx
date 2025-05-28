import React from 'react';
import {Star, ArrowRight } from 'lucide-react';
import Header from '../../../components/Header';
import PhoneMockup from '../../../components/PhoneMockup';

const HeroSection = () => (
  <section className="min-h-screen bg-gradient-to-br from-[#B84646] to-[#2C2C65] relative overflow-hidden">
    {/* Animated Background Elements */}
    <div className="absolute inset-0">
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-400/20 rounded-full blur-2xl animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-pink-300/20 rounded-full blur-lg animate-ping"></div>
    </div>
    
    <Header />
    
    <div className="container mx-auto px-6 py-12 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-120px)]">
        {/* Left Content */}
        <div className="text-white space-y-8 lg:pr-8">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Star className="w-4 h-4 fill-current" />
              <span>Trusted by 10,000+ patients</span>
            </div>
            
            <h1 className="text-3xl lg:text-5xl font-bold leading-tight">
              Instantly Chat/Video
              <br />
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Call Licenced Medical
              </span>
              <br />
              doctors in Nigeria!
            </h1>
            
            <p className="text-xl text-white/90 text-justify leading-relaxed max-w-lg">
              Connect with certified healthcare professionals instantly. Get medical consultations, prescriptions, and health advice from the comfort of your home.
            </p>
          </div>
          
          <div className="flex item-center justify-center flex-col sm:flex-row gap-4">
            <button className="group border border-[#4369B2] text-white px-8 py-4 rounded-full font-semibold text-lg  transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
              <span>Start now for free!</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
           
          </div>
          
         
        </div>
        
        {/* Right Content - Phone Mockup */}
        <div className="flex justify-center lg:justify-end">
          <PhoneMockup />
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
export default HeroSection;