import React from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ui/ProductCard';
import { trendingProducts, recommendedProducts } from '../data';

const CategoryPage = () => {
  const { categoryId } = useParams();
  
  // Format the category name for display (e.g., 'smart-home' -> 'Smart Home')
  const formattedCategory = categoryId
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  // Combine some dummy products for the listing
  const allDummyProducts = [...trendingProducts, ...recommendedProducts];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-slate-500 mb-6">
        Home / Categories / <span className="text-slate-800 font-medium">{formattedCategory}</span>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters sidebar (Placeholder) */}
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-white border border-slate-200 rounded-lg p-6 sticky top-4">
            <h3 className="font-bold text-lg mb-4 border-b pb-2">Filters</h3>
            
            <div className="mb-6">
              <h4 className="font-medium mb-3">Price Range</h4>
              <div className="flex items-center gap-2">
                <input type="text" placeholder="Min" className="w-full border rounded p-2 text-sm" />
                <span>-</span>
                <input type="text" placeholder="Max" className="w-full border rounded p-2 text-sm" />
              </div>
            </div>

            <div>
              <h4 className="font-medium mb-3">Brands</h4>
              <div className="space-y-2">
                {['Apple', 'Samsung', 'Sony', 'TechNova'].map(brand => (
                  <label key={brand} className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" className="rounded text-blue-600 focus:ring-blue-500" />
                    <span className="text-sm">{brand}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-slate-900">{formattedCategory}</h1>
            <select className="border border-slate-300 rounded-md py-2 px-4 text-sm bg-white focus:outline-none focus:border-blue-500">
              <option>Sort by: Featured</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
              <option>Newest Arrivals</option>
            </select>
          </div>

          {/* Just repeating the dummy products for the grid demo */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allDummyProducts.map((product, idx) => (
              <ProductCard key={`${product.id}-${idx}`} product={product} />
            ))}
            {allDummyProducts.map((product, idx) => (
              <ProductCard key={`dup-${product.id}-${idx}`} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;

