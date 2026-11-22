import React from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
  return (
    <section className="bg-slate-900 text-white mt-8 py-16">
      <div className="container mx-auto px-4 relative overflow-hidden">
        
        {/* Background Graphic */}
        <div className="absolute right-0 top-0 hidden md:block opacity-20 pointer-events-none">
          <svg width="400" height="200" viewBox="0 0 400 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 200C100 200 150 100 250 100C350 100 400 0 400 0L400 200H0Z" fill="url(#paint0_linear)"/>
            <defs>
              <linearGradient id="paint0_linear" x1="200" y1="0" x2="200" y2="200" gradientUnits="userSpaceOnUse">
                <stop stopColor="#3B82F6"/>
                <stop offset="1" stopColor="#1E3A8A"/>
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-2">Join <span className="text-blue-400">TechNova+</span></h2>
            <p className="text-slate-400">Get exclusive deals, early access to new launches and personalized recommendations.</p>
          </div>
          
          <div className="w-full max-w-md">
            <form className="flex w-full bg-white rounded-md overflow-hidden p-1 shadow-lg">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="flex-1 px-4 py-3 text-slate-800 focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-sm transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="hidden lg:flex items-center gap-2 transform -rotate-3 mt-4">
             <Send size={20} className="text-blue-400" />
             <span className="font-handwriting text-blue-300 text-xl">Smarter Deals<br/>Straight to Your Inbox</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

