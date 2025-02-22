import React from 'react';
import { Link } from 'react-router-dom';
import { Shield } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-16">
        <nav className="flex justify-between items-center mb-16">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">SecureApp</span>
          </div>
          <div className="space-x-4">
            <Link
              to="/login"
              className="px-6 py-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Sign Up
            </Link>
          </div>
        </nav>

        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Secure Access Management for Your Organization
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Role-based access control made simple. Manage users, admins, and managers with enterprise-grade security.
          </p>
          <div className="flex justify-center space-x-6">
            <Link
              to="/signup"
              className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-200 text-lg font-medium"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition duration-200 text-lg font-medium"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">User Access</h3>
            <p className="text-gray-600">Secure access to user-specific features and data with role-based permissions.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Admin Control</h3>
            <p className="text-gray-600">Complete oversight and management capabilities for system administrators.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold mb-4">Manager Dashboard</h3>
            <p className="text-gray-600">Dedicated tools and insights for team managers and supervisors.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;