import React,{useState} from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="relative z-50">
      {/* Main Header */}
      <div className="flex justify-between items-center px-6 py-4 bg-transparent">
        <div className="flex items-center space-x-2">
          <img src="/logo.png" alt="Healthify Logo" className="h-8 w-auto" />
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8 text-white">
          <a href="/signup" className="hover:text-blue-300 transition-colors font-medium">SIGN UP</a>
          <a href="/login" className="hover:text-blue-300 transition-colors font-medium">LOGIN</a>
          <a href="#" className="hover:text-blue-300 transition-colors font-medium">FEATURES</a>
          <a href="#" className="hover:text-blue-300 transition-colors font-medium">BLOG</a>
          <a href="#" className="hover:text-blue-300 transition-colors font-medium">CONTACT</a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu}
          className="md:hidden text-white p-2 hover:bg-white/20 rounded-lg transition-colors"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-lg transform transition-all duration-300 ease-in-out ${
        isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <nav className="px-6 py-4 space-y-4">
          <a 
            href="/signup" 
            onClick={closeMenu}
            className="block text-gray-800 hover:text-purple-600 transition-colors font-medium py-2 border-b border-gray-200"
          >
            SIGN UP
          </a>
          <a 
            href="/login" 
            onClick={closeMenu}
            className="block text-gray-800 hover:text-purple-600 transition-colors font-medium py-2 border-b border-gray-200"
          >
            LOGIN
          </a>
          <a 
            href="#" 
            onClick={closeMenu}
            className="block text-gray-800 hover:text-purple-600 transition-colors font-medium py-2 border-b border-gray-200"
          >
            FEATURES
          </a>
          <a 
            href="#" 
            onClick={closeMenu}
            className="block text-gray-800 hover:text-purple-600 transition-colors font-medium py-2 border-b border-gray-200"
          >
            BLOG
          </a>
          <a 
            href="#" 
            onClick={closeMenu}
            className="block text-gray-800 hover:text-purple-600 transition-colors font-medium py-2"
          >
            CONTACT
          </a>
          
          {/* Mobile CTA Buttons */}
          <div className="pt-4 space-y-3">
            <button 
              onClick={closeMenu}
              className="w-full bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
            >
              Start Free Consultation
            </button>
            <button 
              onClick={closeMenu}
              className="w-full border-2 border-purple-600 text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-600 hover:text-white transition-colors"
            >
              Login to Account
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm -z-10"
          onClick={closeMenu}
        ></div>
      )}
    </header>
  );
};
export default Header;