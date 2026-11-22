import React from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { navigationLinks } from '../../data';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="container mx-auto px-4 flex items-center">
        {/* All Categories Dropdown */}
        <button className="flex items-center gap-2 font-semibold text-slate-800 py-3 pr-6 border-r border-slate-200 cursor-pointer hover:text-blue-600 focus:outline-none transition-colors">
          <Menu size={20} />
          <span>All Categories</span>
        </button>

        {/* Links */}
        <ul className="hidden md:flex flex-1 items-center justify-center gap-2 lg:gap-4 overflow-x-auto whitespace-nowrap py-2">
          {navigationLinks.slice(1).map((link, index) => (
            <li key={index}>
              <Link 
                to={link.href} 
                className={`block text-sm font-medium transition-all px-3 py-2 rounded-md active:scale-95 ${
                  link.isHighlight 
                    ? 'text-red-500 hover:text-red-600 hover:bg-red-50 active:bg-red-100' 
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50 active:bg-slate-100'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

