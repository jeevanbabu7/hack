import React from 'react';
import { ChevronLeft, ChevronRight, Brush, Camera, PenTool, Image, Frame, Layers, Scissors, Palette } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';
const UserDashboard = () => {
  // const { user, signOut } = useAuth();
  const images = [
    "https://images.pexels.com/photos/3735762/pexels-photo-3735762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/8770237/pexels-photo-8770237.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://images.pexels.com/photos/4705623/pexels-photo-4705623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  ];

  const services = [
    { id: 'know-your-waste', icon: <Brush size={24} />, title: "Know your waste", description: "An ai  powerd waste identification service" },
    { id: 'cell-donate', icon: <Camera size={24} />, title: "Sell E-waste", description: "You can sell your E-wastes for a better price " },
    { id: 'components', icon: <PenTool size={24} />, title: "Buy Components", description: "Buy refurbished electronic components for a better price" },
    { id: 'upcycling', icon: <Image size={24} />, title: "DIY Decors", description: "DIY Upcycling with ai and a marrket place to by decors" },
    { id: 'student-service', icon: <Frame size={24} />, title: "Budget friendly Repair", description: "Technical Professional students offers affordable repairing services " },
    { id: 'dispose-Hazzard', icon: <Layers size={24} />, title: "Hazard waste Disposal", description: "service offered by certified recyclers and their door step pick up service" },
    { id: 'Buy-used-products', icon: <Scissors size={24} />, title: "Buy used Electroni products", description: "An E-commerce Facility to purchase used electronics products near you" }
  ];  
  return (
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
  );
};

export default UserDashboard;