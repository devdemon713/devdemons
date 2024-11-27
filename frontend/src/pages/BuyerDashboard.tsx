import React from 'react';
import { ShoppingCart, FileText, TrendingUp, Package, ClipboardList } from 'lucide-react';

const BuyerDashboard: React.FC = () => {
  const user = JSON.parse(localStorage.getItem('user') || '{}'); // Get logged in user's data

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold text-green-800 text-center mb-4">Buyer Dashboard</h1>
          
          {/* User Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
            {/* Name and Role */}
            <div className="flex space-x-4">
              <div className="bg-green-600 text-white p-6 rounded-lg shadow-md flex-1">
                <h2 className="text-xl font-semibold mb-2">Name</h2>
                <p className="text-2xl">{user.name}</p>
              </div>
              <div className="bg-green-600 text-white p-6 rounded-lg shadow-md flex-1">
                <h2 className="text-xl font-semibold mb-2">Role</h2>
                <p className="text-2xl">{user.role}</p>
              </div>
            </div>
            {/* Email and Location */}
            <div className="flex space-x-4">
              <div className="bg-green-600 text-white p-6 rounded-lg shadow-md flex-1">
                <h2 className="text-xl font-semibold mb-2">Email</h2>
                <p className="text-2xl">{user.email}</p>
              </div>
              <div className="bg-green-600 text-white p-6 rounded-lg shadow-md flex-1">
                <h2 className="text-xl font-semibold mb-2">Location</h2>
                <p className="text-2xl">{user.location}</p>
              </div>
            </div>
          </div>
          
          {/* Information Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <ShoppingCart className="text-green-600 mb-2" size={32} />
              <h2 className="text-xl font-semibold mb-2">Active Orders</h2>
              <p className="text-3xl font-bold">7</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <FileText className="text-green-600 mb-2" size={32} />
              <h2 className="text-xl font-semibold mb-2">Open Contracts</h2>
              <p className="text-3xl font-bold">4</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="text-green-600 mb-2" size={32} />
              <h2 className="text-xl font-semibold mb-2">Total Spent</h2>
              <p className="text-3xl font-bold">$18,750</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Package className="text-green-600 mb-2" size={32} />
              <h2 className="text-xl font-semibold mb-2">Received Deliveries</h2>
              <p className="text-3xl font-bold">15</p>
            </div>
          </div>

          {/* Recent Activity Card */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
            <ul className="space-y-4">
              <li className="flex items-center justify-between border-b pb-2">
                <span>New contract signed with Farm XYZ</span>
                <span className="text-sm text-gray-500">1 hour ago</span>
              </li>
              <li className="flex items-center justify-between border-b pb-2">
                <span>Payment sent for Order #5678</span>
                <span className="text-sm text-gray-500">1 day ago</span>
              </li>
              <li className="flex items-center justify-between border-b pb-2">
                <span>Delivery received for Contract #2345</span>
                <span className="text-sm text-gray-500">2 days ago</span>
              </li>
            </ul>
          </div>

          {/* Active Orders List */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4">Active Orders</h2>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Organic Tomatoes from Farm ABC</span>
                <span className="text-green-600 font-semibold">200 kg</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Sweet Corn from Farm XYZ</span>
                <span className="text-green-600 font-semibold">500 kg</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Fresh Lettuce from Farm DEF</span>
                <span className="text-green-600 font-semibold">100 kg</span>
              </li>
            </ul>
          </div>

          {/* Upcoming Deliveries List */}
          <div className="bg-white p-6 rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-4">Upcoming Deliveries</h2>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span>Order #5679 - Organic Tomatoes</span>
                <span className="text-gray-600">Expected in 2 days</span>
              </li>
              <li className="flex items-center justify-between">
                <span>Order #5680 - Sweet Corn</span>
                <span className="text-gray-600">Expected in 5 days</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyerDashboard;
