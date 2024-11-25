import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sprout, LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { currentUser, userRole, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Alert message for welcoming user
  useEffect(() => {
    if (currentUser) {
      alert(`Welcome to agro connect, ${currentUser.name || 'User'}!`);
    }
  }, [currentUser]);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  return (
    <header className="bg-primary-600 text-white shadow-md relative z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <Sprout size={32} />
          <span className="text-2xl font-bold">Agro Connect</span>
        </Link>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMobileMenu} 
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex">
          <ul className="flex space-x-6 items-center">
            <li><Link to="/marketplace" className="hover:text-primary-200">Marketplace</Link></li>
            <li><Link to="/contracts" className="hover:text-primary-200">Contracts</Link></li>
            {currentUser ? (
              <>
                {userRole === 'farmer' && (
                  <li><Link to="/farmer-dashboard" className="hover:text-primary-200">Farmer Dashboard</Link></li>
                )}
                {userRole === 'buyer' && (
                  <li><Link to="/buyer-dashboard" className="hover:text-primary-200">Buyer Dashboard</Link></li>
                )}
                <li><Link to="/About" className="hover:text-primary-200">About Us</Link></li>
                <li>
                  <button onClick={handleLogout} className="flex items-center hover:text-primary-200">
                    <LogOut size={20} className="mr-1" />
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/login" className="hover:text-primary-200">Login</Link></li>
                <li><Link to="/signup" className="hover:text-primary-200">Sign Up</Link></li>
                <li><Link to="/About" className="hover:text-primary-200">About Us</Link></li>
              </>
            )}
          </ul>
        </nav>
        
        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden absolute top-8 left-0 w-full bg-primary-600 z-50">
            <ul className="flex flex-col space-y-4 py-4 items-center">
              <li><Link to="/marketplace" className="hover:text-primary-200">Marketplace</Link></li>
              <li><Link to="/contracts" className="hover:text-primary-200">Contracts</Link></li>
              {currentUser ? (
                <>
                  {userRole === 'farmer' && (
                    <li><Link to="/farmer-dashboard" className="hover:text-primary-200">Farmer Dashboard</Link></li>
                  )}
                  {userRole === 'buyer' && (
                    <li><Link to="/buyer-dashboard" className="hover:text-primary-200">Buyer Dashboard</Link></li>
                  )}
                  <li><Link to="/About" className="hover:text-primary-200">About Us</Link></li>
                  <li>
                    <button onClick={handleLogout} className="flex items-center hover:text-primary-200">
                      <LogOut size={20} className="mr-1" />
                      Logout
                    </button>
                  </li>
                  
                </>
              ) : (
                <>
                  <li><Link to="/login" className="hover:text-primary-200">Login</Link></li>
                  <li><Link to="/signup" className="hover:text-primary-200">Sign Up</Link></li>
                  <li><Link to="/About" className="hover:text-primary-200">About Us</Link></li>
                </>
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
