import React from 'react';
import ProductCard from '../ui/ProductCard';
import { recommendedProducts } from '../../data';
import { ArrowRight } from 'lucide-react';

const RecommendedProducts = () => {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-end mb-6">
        <h2 className="text-2xl font-bold text-slate-900">Recommended for You</h2>
        <a href="#" className="text-blue-600 font-medium flex items-center gap-1 hover:underline text-sm">
          View All <ArrowRight size={16} />
        </a>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {recommendedProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default RecommendedProducts;

