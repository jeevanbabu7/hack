import React, { useState } from 'react';
import { AlertCircle, Upload, MapPin, Calendar, Phone } from 'lucide-react';

const wasteTypes = [
  {
    color: 'red',
    description: 'Explosive, radioactive and cytotoxic wastes',
    examples: 'Contaminated equipment, radioactive materials, chemotherapy waste'
  },
  {
    color: 'yellow',
    description: 'Chemical and pharmaceutical wastes',
    examples: 'Expired medicines, laboratory chemicals, disinfectants'
  },
  {
    color: 'white',
    description: 'Infectious and pathological wastes',
    examples: 'Blood samples, body fluids, human tissues'
  },
  {
    color: 'blue',
    description: 'General medical wastes',
    examples: 'Paper, packaging, non-contaminated items'
  }
];

function Hazard() {
  const [formData, setFormData] = useState({
    wasteType: '',
    location: '',
    pincode: '',
    phone: '',
    landmark: '',
    pickupDate: '',
    image: null as File | null
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 3000);
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, image: e.target.files[0] });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Hazardous Waste Disposal Request
          </h1>
          <p className="text-gray-600">
            Please fill out the form below to schedule a hazardous waste pickup
          </p>
        </div>

        {/* Waste Type Information Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {wasteTypes.map((type) => (
            <div 
              key={type.color}
              className={`p-4 rounded-lg border ${
                type.color === 'red' ? 'bg-red-50 border-red-200' :
                type.color === 'yellow' ? 'bg-yellow-50 border-yellow-200' :
                type.color === 'white' ? 'bg-gray-50 border-gray-200' :
                'bg-blue-50 border-blue-200'
              }`}
            >
              <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                {type.color.charAt(0).toUpperCase() + type.color.slice(1)} Category
              </h3>
              <p className="text-sm text-gray-600 mt-1">{type.description}</p>
              <p className="text-xs text-gray-500 mt-1">Examples: {type.examples}</p>
            </div>
          ))}
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8">
          <div className="space-y-6">
            {/* Waste Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Waste Type
              </label>
              <select
                required
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                value={formData.wasteType}
                onChange={(e) => setFormData({ ...formData, wasteType: e.target.value })}
              >
                <option value="">Select waste type</option>
                {wasteTypes.map((type) => (
                  <option key={type.color} value={type.color}>
                    {type.color.charAt(0).toUpperCase() + type.color.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Upload Waste Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <Upload className="mx-auto h-12 w-12 text-gray-400" />
                  <div className="flex text-sm text-gray-600">
                    <label className="relative cursor-pointer rounded-md font-medium text-blue-600 hover:text-blue-500">
                      <span>Upload a file</span>
                      <input
                        type="file"
                        className="sr-only"
                        accept="image/*"
                        onChange={handleImageChange}
                        required
                      />
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Location Details */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Panchayath
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    required
                    className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pincode
                </label>
                <input
                  type="text"
                  required
                  pattern="[0-9]{6}"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.pincode}
                  onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Phone className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Landmark
                </label>
                <input
                  type="text"
                  required
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  value={formData.landmark}
                  onChange={(e) => setFormData({ ...formData, landmark: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Pickup Date
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <Calendar className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    className="pl-10 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-end">
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Schedule Pickup
              </button>
            </div>
          </div>
        </form>

        {/* Success Message */}
        {showSuccess && (
          <div className="fixed bottom-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
            Pickup scheduled successfully!
          </div>
        )}
      </div>
    </div>
  );
}

export default Hazard;