import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Navbar from './components/Navbar/Navbar1';
import Navbar1 from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs/AboutUs';
import Contact from './pages/Contact/Contact';
import Service from './pages/Service/ServiceDetails/ServiceDetails';
import Support from './pages/Products/Products';
import AuthPage from './pages/AuthPage';
import AdminDashboard from './pages/AdminDashboard/AdminDashboard';
import Products from './pages/Products/Products';

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar1 />
        <main>
          <Routes>
            <Route path="/auth/user" element={<AuthPage />} />
            <Route path="/auth/admin" element={<AuthPage />} />
            <Route path="/" element={<Homepage />} />
            {/* <Route path="/about" element={<AboutUs />} /> */}
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route path="/service" element={<Service />} />
            <Route path="/products" element={<Products />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
