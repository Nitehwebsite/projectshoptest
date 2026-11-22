import React from 'react';
import { Link } from 'react-router-dom';
import { Search, User, Heart, ShoppingCart } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white py-4 px-4 shadow-sm">
      <div className="container mx-auto flex items-center justify-between gap-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 text-blue-600 font-bold text-2xl tracking-tight hover:opacity-90 transition-opacity">
          <div className="bg-blue-600 text-white p-1 rounded-md">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
          </div>
          <div>
            TechNova
            <div className="text-[10px] font-normal text-slate-500 -mt-1 tracking-normal">Smarter Today. Brighter Tomorrow.</div>
          </div>
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex flex-1 max-w-2xl relative">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <Search size={18} className="text-slate-400" />
          </div>
          <input 
            type="text" 
            className="w-full pl-10 pr-4 py-2 bg-slate-100 border border-transparent rounded-l-md focus:outline-none focus:bg-white focus:border-blue-500 transition-colors text-sm"
            placeholder="Search for products, brands or more..."
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-r-md transition-colors">
            <Search size={18} />
          </button>
        </div>

        {/* Icons */}
        <div className="flex items-center gap-6">
          <Link to="/login" className="hidden lg:flex items-center gap-2 group hover:text-blue-600 transition-colors">
            <User size={24} className="text-slate-700 group-hover:text-blue-600" />
            <div className="text-sm">
              <div className="font-semibold text-slate-900 leading-tight group-hover:text-blue-600">Sign In</div>
              <div className="text-slate-500 text-xs flex items-center group-hover:text-blue-500">
                My Account
                <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </div>
            </div>
          </Link>
          
          <a href="#" className="flex flex-col items-center justify-center text-slate-700 hover:text-blue-600 transition-colors">
            <Heart size={24} />
            <span className="text-xs mt-1 hidden sm:block">Wishlist</span>
          </a>

          <a href="#" className="flex flex-col items-center justify-center text-slate-700 hover:text-blue-600 relative transition-colors">
            <div className="relative">
              <ShoppingCart size={24} />
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-white">0</span>
            </div>
            <span className="text-xs mt-1 hidden sm:block">Cart</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

