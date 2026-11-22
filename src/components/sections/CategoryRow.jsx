import React from 'react';
import { Link } from 'react-router-dom';
import { categoryIcons } from '../../data';
import { motion } from 'framer-motion';

const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

const CategoryRow = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div 
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="flex justify-between items-center overflow-x-auto gap-4 pb-4 scrollbar-hide"
      >
        {categoryIcons.map((category, index) => (
          <motion.div key={index} variants={itemVariant}>
            <Link 
              to={`/category/${category.name.toLowerCase().replace(' ', '-')}`}
              className="flex flex-col items-center gap-3 min-w-[80px] md:min-w-[100px] cursor-pointer group"
            >
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4 group-hover:shadow-lg group-hover:shadow-blue-500/10 group-hover:-translate-y-2 group-hover:bg-blue-50 transition-all duration-300 border border-slate-200 group-hover:border-blue-200">
                <img src={category.image} alt={category.name} className="w-full h-full object-contain rounded-full opacity-70 group-hover:opacity-100 transition-opacity duration-300 mix-blend-multiply" />
              </div>
              <span className="text-sm font-medium text-slate-600 group-hover:text-blue-600 text-center transition-colors">
                {category.name}
              </span>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default CategoryRow;

