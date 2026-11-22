import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const PromoBanners = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Flash Offers Banner */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-slate-900 to-indigo-900 rounded-xl overflow-hidden relative flex flex-col justify-center p-8 min-h-[220px] shadow-lg group"
        >
          <div className="absolute top-0 right-0 h-full w-1/2 opacity-30 flex justify-end items-center -mr-8 group-hover:scale-110 transition-transform duration-700">
            <div className="w-64 h-64 bg-indigo-500 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 text-white max-w-sm">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="text-pink-500 animate-pulse" fill="currentColor" size={24} />
              <h3 className="text-2xl font-black italic uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500">Flash Offers</h3>
            </div>
            <p className="text-slate-300 font-medium mb-1">Top Tech. Lower Prices.</p>
            <p className="text-slate-400 text-sm mb-6">Hurry, Limited Time Only!</p>
            
            <div className="flex items-center gap-4">
              <button className="bg-white text-slate-900 hover:bg-slate-100 font-semibold py-2 px-4 rounded-full flex items-center gap-2 text-sm transition-transform active:scale-95">
                Shop Now <ArrowRight size={16} />
              </button>
              
              <div className="flex gap-2">
                <div className="flex flex-col items-center">
                  <span className="bg-slate-800/80 backdrop-blur-sm text-white font-bold px-2 py-1 rounded text-lg border border-slate-700">12</span>
                  <span className="text-[10px] text-slate-400 mt-1 uppercase">Hrs</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="bg-slate-800/80 backdrop-blur-sm text-white font-bold px-2 py-1 rounded text-lg border border-slate-700">36</span>
                  <span className="text-[10px] text-slate-400 mt-1 uppercase">Mins</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="bg-slate-800/80 backdrop-blur-sm text-white font-bold px-2 py-1 rounded text-lg border border-slate-700">18</span>
                  <span className="text-[10px] text-slate-400 mt-1 uppercase">Secs</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* New Arrivals Banner */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-xl overflow-hidden relative flex flex-col justify-center p-8 min-h-[220px] shadow-lg group"
        >
          <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-200 via-transparent to-transparent group-hover:opacity-60 transition-opacity duration-700"></div>
          
          <motion.div 
            animate={{ rotate: [12, 16, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute right-4 top-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg transform rotate-12"
          >
            NEW
          </motion.div>
          
          <div className="relative z-10 text-slate-900 max-w-sm">
            <h3 className="text-3xl font-bold mb-2">New Arrivals</h3>
            <p className="text-slate-600 font-medium mb-1">Be the First to Experience</p>
            <p className="text-slate-500 text-sm mb-6">What's Next!</p>
            
            <button className="bg-slate-900 text-white hover:bg-slate-800 font-semibold py-2 px-6 rounded-full flex items-center gap-2 text-sm transition-transform active:scale-95 shadow-md hover:shadow-lg">
              Explore Now <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default PromoBanners;

