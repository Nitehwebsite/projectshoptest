import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopBar from './components/layout/TopBar';
import Header from './components/layout/Header';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans">
        {/* Layout Header */}
        <TopBar />
        <Header />
        <Navbar />
        
        {/* Main Content */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryId" element={<CategoryPage />} />
            <Route path="/login" element={<AuthPage />} />
          </Routes>
        </main>
        
        {/* Layout Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
