import React from 'react';
import { Truck, RotateCcw, MonitorSmartphone } from 'lucide-react';

const TopBar = () => {
  return (
    <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 flex justify-between items-center">
      <div className="flex items-center gap-4">
        <a href="#" className="flex items-center gap-1 hover:text-white transition-colors">
          <Truck size={14} />
          <span>Free Shipping on All Orders Over $50</span>
        </a>
        <a href="#" className="hidden sm:flex items-center gap-1 border-l border-slate-700 pl-4 hover:text-white transition-colors">
          <RotateCcw size={14} />
          <span>Easy Returns</span>
        </a>
        <a href="#" className="hidden md:flex items-center gap-1 border-l border-slate-700 pl-4 hover:text-white transition-colors">
          <MonitorSmartphone size={14} />
          <span>Tech for a Better Tomorrow</span>
        </a>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1 cursor-pointer hover:text-white group">
          <span>PKR</span>
          <svg className="w-3 h-3 group-hover:text-white text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
        </div>
        <a href="#" className="hidden sm:block border-l border-slate-700 pl-4 hover:text-white transition-colors">Help</a>
        <a href="#" className="border-l border-slate-700 pl-4 hover:text-white transition-colors">Track Order</a>
      </div>
    </div>
  );
};

export default TopBar;

