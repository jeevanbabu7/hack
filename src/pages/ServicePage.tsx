import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const serviceDetails = {
  'know-your-waste': {
    title: 'Know your waste',
    description: 'Our Know your waste service brings your vision to life through skilled artistry and attention to detail. We work closely with you to understand your requirements and create unique pieces that perfectly match your aesthetic preferences.',
    features: [
      'Personal consultation with professional artists',
      'Multiple concept sketches and revisions',
      'Choice of mediums and styles',
      'Regular progress updates',
      'Professional finishing and delivery'
    ]
  },
  'cell-donate': {
    title: 'Sell E-waste',
    description: 'Professional photography services specialized in capturing artwork in its best light. We ensure your pieces are documented with the highest quality for portfolios, catalogs, or digital preservation.',
    features: [
      'High-resolution photography',
      'Professional lighting setup',
      'Multiple angles and details',
      'Digital post-processing',
      'Format optimization for different uses'
    ]
  },
  'comp-sale': {
    title: 'Buy Components',
    description: 'Buy refurbished electronic components for a better price combining traditional artistic principles with cutting-edge digital tools. Perfect for contemporary projects requiring versatile and scalable artwork.',
    features: [
      'Custom digital artwork creation',
      'Vector and raster illustrations',
      'Character design and concept art',
      'Commercial use rights',
      'Multiple file format delivery'
    ]
  },
  'upcycling': {
    title: 'DIY Decors',
    description: 'Expert restoration services to preserve and revitalize artwork. Our skilled conservators use proven techniques and materials to carefully restore pieces while maintaining their historical integrity.',
    features: [
      'Condition assessment and documentation',
      'Careful cleaning and repair',
      'Color matching and retouching',
      'Structural reinforcement',
      'Preventive conservation advice'
    ]
  },
  'student-service': {
    title: 'Budget friendly Repair',
    description: 'Custom framing solutions that enhance and protect your artwork. We offer a wide selection of frames and mounting options to complement any piece and interior design.',
    features: [
      'Custom frame design consultation',
      'Museum-quality materials',
      'UV-protective glass options',
      'Archival mounting techniques',
      'Professional installation available'
    ]
  },
  'Dispose-Hazzard': {
    title: 'Art Consultation',
    description: 'service offered by certified recyclers and their door step pick up service. Our experts help you make informed decisions about acquiring, displaying, and maintaining artwork.',
    features: [
      'Collection strategy development',
      'Market analysis and valuation',
      'Acquisition assistance',
      'Display planning',
      'Collection management advice'
    ]
  },
  'Buy-used-products': {
    title: 'Buy used Electroni products',
    description: 'An E-commerce Facility to purchase used electronics products near you ensuring your pieces are displayed safely and beautifully. We handle everything from planning to final placement.',
    features: [
      'Site assessment and planning',
      'Professional mounting hardware',
      'Precise placement and leveling',
      'Lighting recommendations',
      'Safety and security considerations'
    ]
  }
};

export function ServicePage() {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  
  const service = serviceId ? serviceDetails[serviceId as keyof typeof serviceDetails] : null;

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <button
        onClick={() => navigate(-1)}
        className="fixed top-24 left-4 flex items-center text-gray-600 hover:text-purple-600 transition-colors duration-300"
      >
        <ArrowLeft className="h-6 w-6 mr-2" />
        Back
      </button>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">{service.title}</h1>
          
          <div className="bg-white rounded-lg shadow-md p-8 mb-8">
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {service.description}
            </p>
            
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">What We Offer</h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="h-6 w-6 text-purple-600 mr-3">•</span>
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Request This Service</h2>
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
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Project Details</label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-300"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}