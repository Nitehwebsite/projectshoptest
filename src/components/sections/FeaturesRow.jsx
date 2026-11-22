import React from 'react';
import { Truck, ShieldCheck, HeadphonesIcon, Leaf } from 'lucide-react';

const FeaturesRow = () => {
  const features = [
    {
      icon: <Truck size={32} className="text-blue-500" />,
      title: 'Free Shipping',
      description: 'On Orders Over PKR 50,000'
    },
    {
      icon: <ShieldCheck size={32} className="text-blue-500" />,
      title: 'Easy Returns',
      description: 'Hassle-Free Within 7 Days'
    },
    {
      icon: <HeadphonesIcon size={32} className="text-blue-500" />,
      title: '24/7 Support',
      description: "We're Always Here"
    },
    {
      icon: <Leaf size={32} className="text-blue-500" />,
      title: 'Genuine Products',
      description: '100% Original & Trusted'
    }
  ];

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white border border-slate-100 rounded-2xl p-8 shadow-sm">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
              {feature.icon}
            </div>
            <div>
              <h4 className="font-semibold text-slate-900">{feature.title}</h4>
              <p className="text-sm text-slate-500">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesRow;

