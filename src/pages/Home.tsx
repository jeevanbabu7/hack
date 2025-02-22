import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Brush, Camera, PenTool, Image, Frame, Layers, Scissors, Palette } from 'lucide-react';

export function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  
  const images = [
    "https://images.pexels.com/photos/3735762/pexels-photo-3735762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8770237/pexels-photo-8770237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4705623/pexels-photo-4705623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const services = [
    { id: 'know-your-waste', icon: <Brush size={24} />, title: "Know your waste", description: "An ai  powerd waste identification service" },
    { id: 'cell-donate', icon: <Camera size={24} />, title: "Sell E-waste", description: "You can sell your E-wastes for a better price " },
    { id: 'comp-sale', icon: <PenTool size={24} />, title: "Buy Components", description: "Buy refurbished electronic components for a better price" },
    { id: 'upcycling', icon: <Image size={24} />, title: "DIY Decors", description: "DIY Upcycling with ai and a marrket place to by decors" },
    { id: 'student-service', icon: <Frame size={24} />, title: "Budget friendly Repair", description: "Technical Professional students offers affordable repairing services " },
    { id: 'Dispose-Hazzard', icon: <Layers size={24} />, title: "Hazard waste Disposal", description: "service offered by certified recyclers and their door step pick up service" },
    { id: 'Buy-used-products', icon: <Scissors size={24} />, title: "Buy used Electroni products", description: "An E-commerce Facility to purchase used electronics products near you" }
  ];
  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Image Slider */}
      <section id="home" className="pt-20">
        <div className="relative h-[600px] overflow-hidden">
          <img
            src={images[currentImage]}
            alt="Art gallery"
            className="w-full h-full object-cover transition-opacity duration-500"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center text-white px-4">
              <h1 className="text-5xl font-bold mb-4">Welcome to REART</h1>
              <p className="text-xl mb-8">Sustainability is the new luxury</p>
            </div>
          </div>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronLeft className="h-6 w-6 text-gray-800" />
          </button>
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 p-2 rounded-full"
          >
            <ChevronRight className="h-6 w-6 text-gray-800" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Us</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-600 leading-relaxed">
            Reart is a platform where people can find the correct methods to dispose of dangerous waste and electronic waste. It also has an online shop where you can buy product parts. We collect electronic waste, teach you how to make new things from old items (DIY upcycling), help students with services, and help you handle the disposal of hazardous waste, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.id}
                to={`/services/${service.id}`}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              >
                <div className="text-purple-600 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Contact Us</h2>
          <div className="max-w-lg mx-auto">
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Palette className="h-6 w-6" />
            <span className="text-xl font-bold">REART</span>
          </div>
          <p className="text-gray-400">© 2024 REART. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}