import React, { useEffect, useState } from 'react';
import { Tractor, Package, FileText, TrendingUp } from 'lucide-react';

const FarmerDashboard: React.FC = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Fetch user data from local storage after login
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');
    setUser(storedUser);
  }, []);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <h2>Loading user data...</h2>
      </div>
    );
  }

  return (
    <div className="space-y-8 p-4 md:p-6">
      <h1 className="text-3xl font-bold text-green-800 text-center md:text-left">Farmer Dashboard</h1>

      {/* User Info Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Name */}
        <div className="bg-green-500 text-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Name</h2>
          <p className="text-2xl">{user.name}</p>
        </div>
        {/* Role */}
        <div className="bg-green-500 text-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Role</h2>
          <p className="text-2xl">{user.role}</p>
        </div>
        {/* Email */}
        <div className="bg-green-500 text-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-2xl">{user.email}</p>
        </div>
        {/* Location */}
        <div className="bg-green-500 text-white p-4 sm:p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-2">Location</h2>
          <p className="text-2xl">{user.location}</p>
        </div>
      </div>

      {/* Metrics Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <Tractor className="text-green-600 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">My Farms</h2>
          <p className="text-3xl font-bold">3</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <Package className="text-green-600 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Active Listings</h2>
          <p className="text-3xl font-bold">12</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <FileText className="text-green-600 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Open Contracts</h2>
          <p className="text-3xl font-bold">5</p>
        </div>
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
          <TrendingUp className="text-green-600 mb-2" size={32} />
          <h2 className="text-xl font-semibold mb-2">Total Revenue</h2>
          <p className="text-3xl font-bold">$24,500</p>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="flex items-center justify-between border-b pb-2">
            <span>New contract offer received</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </li>
          <li className="flex items-center justify-between border-b pb-2">
            <span>Listing for Organic Tomatoes updated</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </li>
          <li className="flex items-center justify-between border-b pb-2">
            <span>Payment received for Contract #1234</span>
            <span className="text-sm text-gray-500">3 days ago</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FarmerDashboard;
