import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { ShoppingBag, ShoppingCart } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { UploadForm } from '../components/UploadForm' 
import { PhotoList } from '../components/PhotoList'
import { PhotoDetail } from '../components/PhotoDetail'
import { Cart } from '../components/Cart'

function Components() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center text-green-600">
                <ShoppingBag className="h-6 w-6 mr-2" />
                <span className="text-lg font-semibold">Components Store</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link to="/cart" className="text-gray-600 hover:text-green-700">
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <Link
                to="/upload"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-green-600 hover:bg-green-700"
              >
                Add Product
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <Toaster position="bottom-right" />
    </div>
  )
}

export default Components