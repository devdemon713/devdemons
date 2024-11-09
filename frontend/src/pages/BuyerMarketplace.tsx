import React, { useState, useEffect } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
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
  farmerName: string;
}

const BuyerMarketplace: React.FC = () => {
  const [crops, setCrops] = useState<Crop[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await axios.get('https://backend-server-devdemons.vercel.app/api/crops');
        setCrops(response.data);
      } catch (error) {
        console.error('Error fetching crops:', error);
      }
    };

    fetchCrops();
  }, []);

  const filteredCrops = crops.filter((crop) => {
    const matchesSearch = crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crop.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || crop.unit === selectedCategory;
    const matchesPrice = (!priceRange.min || crop.price >= Number(priceRange.min)) &&
      (!priceRange.max || crop.price <= Number(priceRange.max));

    return matchesSearch && matchesCategory && matchesPrice;
  });

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-bold text-green-800">Available Crops</h1>

      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="grid md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Search Crops</label>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or description"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
            >
              <option value="all">All Categories</option>
              <option value="kg">Kilograms</option>
              <option value="tons">Tons</option>
              <option value="pieces">Pieces</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Price Range</label>
            <div className="flex space-x-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                className="w-1/2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                className="w-1/2 rounded-md border-gray-300 shadow-sm focus:border-green-500 focus:ring-green-500"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCrops.map((crop) => (
          <div key={crop.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              src={crop.image}
              alt={crop.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{crop.name}</h3>
              <p className="text-gray-600 mb-2">{crop.description}</p>
              <p className="text-sm text-gray-500 mb-2">Seller: {crop.farmerName}</p>
              <div className="flex justify-between items-center">
                <span className="text-green-600 font-semibold">
                  {crop.quantity} {crop.unit} available
                </span>
                <span className="text-green-600 font-semibold">
                  ${crop.price}/{crop.unit}
                </span>
              </div>
              <button
                className="mt-4 w-full flex items-center justify-center px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              >
                <ShoppingCart className="mr-2" size={20} />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BuyerMarketplace;