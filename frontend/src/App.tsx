import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import FarmerDashboard from './pages/FarmerDashboard';
import BuyerDashboard from './pages/BuyerDashboard';
import Marketplace from './pages/Marketplace';
import Contracts from './pages/Contracts';
import About from './pages/About'; 
import PrivateRoute from './components/PrivateRoute';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { loading } = useAuth();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/contracts" element={<Contracts />} />
          <Route path="/About" element={<About  />} />
          <Route 
            path="/farmer-dashboard" 
            element={
              <PrivateRoute role="farmer">
                <FarmerDashboard />
              </PrivateRoute>
            } 
          />
          <Route 
            path="/buyer-dashboard" 
            element={
              <PrivateRoute role="buyer">
                <BuyerDashboard />
              </PrivateRoute>
            } 
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
