import React, { useState } from 'react';
import { Heart, Send, ChevronUp,ArrowUp} from 'lucide-react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'; 

const Footer = () => {
  const [email, setEmail] = useState('');
  const [selectedGender, setSelectedGender] = useState('');

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    if (email && selectedGender) {
      alert(`Subscribed! Email: ${email}, Gender: ${selectedGender}`);
      setEmail('');
      setSelectedGender('');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
     <div className="container mx-auto px-6 py-6">
  <div className="grid grid-cols-1 lg:grid-cols-5 gap-2 lg:gap-2">
    {/* Newsletter Subscription */}
    <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold mb-4">Subscribe for More</h3>
            <p className="text-gray-300 mb-6">
              Select an option below for personalized health tips delivered daily
            </p>
            
            {/* Gender Selection */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {[
                  { value: 'man', label: 'Man' },
                  { value: 'woman', label: 'Woman' },
                  { value: 'non-binary', label: 'Non-binary' },
                  { value: 'prefer-not-to-say', label: 'Prefer not to say' }
                ].map((option) => (
                  <label
                    key={option.value}
                    className="flex items-center space-x-2 cursor-pointer group"
                  >
                    <div className="relative">
                      <input
                        type="radio"
                        name="gender"
                        value={option.value}
                        checked={selectedGender === option.value}
                        onChange={(e) => setSelectedGender(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 rounded-full border-2 transition-all duration-200 ${
                        selectedGender === option.value
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-400 group-hover:border-blue-400'
                      }`}>
                        {selectedGender === option.value && (
                          <div className="w-2 h-2 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
                        )}
                      </div>
                    </div>
                    <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                      {option.label}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Email Input */}
            <form onSubmit={handleEmailSubmit} className="relative">
              <div className="flex">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email Address"
                  className="flex-1 bg-transparent border-b-2 border-gray-600 py-3 px-0 text-white placeholder-gray-400 focus:border-blue-500 focus:outline-none transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="ml-4 text-blue-500 hover:text-blue-400 transition-colors"
                >
                  <Send className="w-6 h-6" />
                </button>
              </div>
            </form>
          </div>

          {/* Navigation Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold text-blue-400">Navigation</h4>
            <ul className="space-y-3">
              {['Home', 'Provider Network', 'Help Desk', 'Member Portal'].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors hover:underline"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Health Insurance & Others */}
          <div className="space-y-6">
            
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Health Insurance</h4>
              <ul className="space-y-3">
                {['Individual & Family', 'Seniors', 'Corporate plan'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            
            
            
          </div>
          <div className="space-y-6">
              <h4 className="text-lg font-semibold text-blue-400 mb-4">Others</h4>
              <ul className="space-y-3">
                {['FAQ', 'About us', 'Contact', 'Careers'].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors hover:underline"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
        </div>

        {/* Social Media Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col items-center justify-between space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2 mb-2 ">
              <span className="text-xl">We</span>
              <Heart className="w-6 h-6 text-red-500 fill-current animate-pulse" />
              <span className="text-xl font-semibold">New Friends!</span>
            </div>
            
            <div className="flex items-center space-x-4">
  <span className="text-gray-300">Follow Us:</span>
  <div className="flex space-x-4">
    <a
      href="#"
      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:bg-gray-600 hover:text-blue-500 transform hover:scale-110"
      title="Facebook"
    >
      <FaFacebookF />
    </a>
    <a
      href="#"
      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:bg-gray-600 hover:text-blue-400 transform hover:scale-110"
      title="Twitter"
    >
      <FaTwitter />
    </a>
    <a
      href="#"
      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:bg-gray-600 hover:text-pink-500 transform hover:scale-110"
      title="Instagram"
    >
      <FaInstagram />
    </a>
    <a
      href="#"
      className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-xl transition-all duration-300 hover:bg-gray-600 hover:text-blue-600 transform hover:scale-110"
      title="LinkedIn"
    >
      <FaLinkedinIn />
    </a>
  </div>
</div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 bg-white hover:bg-blue-100 text-blue-600 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 z-50 flex items-center justify-center"
        title="Back to top"
      >
        <ArrowUp className="w-6 h-6" />
      </button>

      {/* Copyright */}
      <div className="bg-black py-4">
        <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
          <p>&copy; 2025 Healthify. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;