import React, { useState } from 'react';
import { PlusCircle, X, Upload } from 'lucide-react';
import axios from 'axios';

interface Crop {
  id: string;
  name: string;
  description: string;
  quantity: number;
  unit: string;
  price: number;
  image: string;
  farmerId: string;
}

const FarmerMarketplace: React.FC = () => {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [isAddingCrop, setIsAddingCrop] = useState(false);
  const [newCrop, setNewCrop] = useState({
    name: '',
    description: '',
    quantity: '',
    unit: 'kg',
    price: '',
    image: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://backend-server-devdemons.vercel.app/api/farmer/crops', newCrop);
      setCrops([...crops, response.data]);
      setIsAddingCrop(false);
      setNewCrop({
        name: '',
        description: '',
        quantity: '',
        unit: 'kg',
        price: '',
        image: ''
      });
    } catch (error) {
      console.error('Error adding crop:', error);
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setNewCrop({ ...newCrop, image: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-green-800">Farmer Marketplace</h1>
        <button
          onClick={() => setIsAddingCrop(true)}
          className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          <PlusCircle className="mr-2" size={20} />
          Add New Crop
        </button>
      </div>

      {isAddingCrop && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Add New Crop</h2>
              <button
                onClick={() => setIsAddingCrop(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={24} />
              </button>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Crop Name</label>
                <input
                  type="text"
                  required
                  value={newCrop.name}
                  onChange={(e) => setNewCrop({ ...newCrop, name: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  required
                  value={newCrop.description}
                  onChange={(e) => setNewCrop({ ...newCrop, description: e.target.value })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  rows={3}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Quantity</label>
                  <div className="mt-1 flex rounded-md shadow-sm">
                    <input
                      type="number"
                      required
                      min="0"
                      value={newCrop.quantity}
                      onChange={(e) => setNewCrop({ ...newCrop, quantity: e.target.value })}
                      className="block w-full rounded-l-md border-gray-300 focus:border-green-500 focus:ring-green-500"
                    />
                    <select
                      value={newCrop.unit}
                      onChange={(e) => setNewCrop({ ...newCrop, unit: e.target.value })}
                      className="rounded-r-md border-l-0 border-gray-300 bg-gray-50"
                    >
                      <option value="kg">kg</option>
                      <option value="tons">tons</option>
                      <option value="pieces">pieces</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price (USD)</label>
                  <input
                    type="number"
                    required
                    min="0"
                    step="0.01"
                    value={newCrop.price}
                    onChange={(e) => setNewCrop({ ...newCrop, price: e.target.value })}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Crop Image</label>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                  {newCrop.image ? (
                    <div className="space-y-1 text-center">
                      <img
                        src={newCrop.image}
                        alt="Crop preview"
                        className="mx-auto h-32 w-32 object-cover rounded-md"
                      />
                      <button
                        type="button"
                        onClick={() => setNewCrop({ ...newCrop, image: '' })}
                        className="text-sm text-red-600 hover:text-red-700"
                      >
                        Remove image
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-1 text-center">
                      <Upload className="mx-auto h-12 w-12 text-gray-400" />
                      <div className="flex text-sm text-gray-600">
                        <label className="relative cursor-pointer rounded-md font-medium text-green-600 hover:text-green-700">
                          <span>Upload a file</span>
                          <input
                            type="file"
                            accept="image/*"
                            className="sr-only"
                            onChange={handleImageUpload}
                          />
                        </label>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="flex justify-end space-x-3">
                <button
                  type="button"
                  onClick={() => setIsAddingCrop(false)}
                  className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                >
                  Add Crop
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {crops.map((crop) => (
          <div key={crop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{crop.name}</h3>
              <p className="text-gray-600 mb-2">{crop.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">
                  {crop.quantity} {crop.unit}
                </span>
                <span className="text-green-600 font-semibold">
                  ${crop.price}/{crop.unit}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FarmerMarketplace;