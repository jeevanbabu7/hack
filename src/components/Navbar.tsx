import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Palette } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Outlet } from 'react-router-dom';
export function Navbar() {
  const location = useLocation();
  const {user} = useAuth();

  const scrollToSection = (sectionId: string) => {
    // Only scroll if we're on the home page
    if (location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If not on the home page, navigate to home with hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <>
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Palette className="h-8 w-8 text-purple-600" />
            <span className="text-2xl font-bold text-purple-600">REART</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-600 hover:text-purple-600"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-600 hover:text-purple-600"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-600 hover:text-purple-600"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-600 hover:text-purple-600"
            >
              Contact
            </button>

            {/* Auth Buttons */}
            {!user && (
              <div className="flex space-x-4">
                <Link
                  to="/login"
                  className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300"
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="px-4 py-2 border border-purple-600 text-purple-600 rounded-md hover:bg-purple-600 hover:text-white transition-colors duration-300"
                >
                  Signup
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
    <Outlet />
    </>
  );
}
