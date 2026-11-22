import React from 'react';
import { ShieldCheck, Sparkles, ThumbsUp, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <motion.div 
        animate={{ 
          scale: [1, 1.05, 1],
          opacity: [0.2, 0.3, 0.2]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 right-0 w-1/2 h-full bg-blue-600 blur-3xl transform skew-x-12 translate-x-1/4"
      ></motion.div>
      
      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-6"
        >
          <p className="text-blue-300 font-medium tracking-widest text-sm uppercase">Next Gen Tech</p>
          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            A Smarter <br />
            Tomorrow <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Starts Here</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-md">
            Explore the latest devices. Upgrade your lifestyle.
          </p>
          
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-colors hover:bg-blue-500"
          >
            Shop the Future <ArrowRight size={20} />
          </motion.button>
          
          {/* Feature highlights below button */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-wrap gap-6 pt-8 mt-8 border-t border-slate-700/50"
          >
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <Sparkles size={16} className="text-blue-400" />
              <span>Innovative Products</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ShieldCheck size={16} className="text-blue-400" />
              <span>Trusted Brands</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <ThumbsUp size={16} className="text-blue-400" />
              <span>Better Everyday</span>
            </div>
          </motion.div>
        </motion.div>
        
        {/* Image Placeholder with floating animation */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative h-64 lg:h-[500px] w-full flex items-center justify-center"
        >
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-tr from-blue-900/40 to-slate-800/40 rounded-2xl border border-slate-600/50 backdrop-blur-md flex flex-col items-center justify-center p-8 shadow-2xl"
          >
            <span className="text-slate-300 text-xl font-medium mb-6 tracking-wide">Product Showcase Area</span>
            <div className="flex gap-6 items-end">
               <div className="w-40 h-28 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg shadow-xl border border-slate-600 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 skew-y-12 transform -translate-y-4"></div>
               </div>
               <div className="w-16 h-36 bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg shadow-xl border border-slate-600 relative overflow-hidden">
                 <div className="absolute top-0 left-0 w-full h-1/2 bg-white/5 skew-y-12 transform -translate-y-2"></div>
               </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 1, rotate: 3 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute top-4 right-4 text-right hidden md:block"
          >
            <p className="font-handwriting text-2xl text-cyan-300">Technology</p>
            <p className="font-handwriting text-2xl text-cyan-300">for a Brighter You</p>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-cyan-300 ml-auto mt-2"><path d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;

