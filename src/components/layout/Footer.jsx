import React from 'react';
import { Lock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-slate-200">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 text-blue-600 font-bold text-xl tracking-tight mb-4">
              <div className="bg-blue-600 text-white p-1 rounded-md">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
              </div>
              <div>
                TechNova
                <div className="text-[9px] font-normal text-slate-500 -mt-1 tracking-normal">Smarter Today. Brighter Tomorrow.</div>
              </div>
            </div>
            
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-blue-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-pink-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-red-600">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-blue-700">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          {/* Shop */}

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">All Products</a></li>
              <li><a href="#" className="hover:text-blue-600">New Arrivals</a></li>
              <li><a href="#" className="hover:text-blue-600">Best Sellers</a></li>
              <li><a href="#" className="hover:text-blue-600">Deals</a></li>
              <li><a href="#" className="hover:text-blue-600">Gift Cards</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Track Order</a></li>
              <li><a href="#" className="hover:text-blue-600">Returns & Refunds</a></li>
              <li><a href="#" className="hover:text-blue-600">Help Center</a></li>
              <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-600">Size Guide</a></li>
            </ul>
          </div>
          
          {/* About */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">About</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><a href="#" className="hover:text-blue-600">Our Story</a></li>
              <li><a href="#" className="hover:text-blue-600">Sustainability</a></li>
              <li><a href="#" className="hover:text-blue-600">Careers</a></li>
              <li><a href="#" className="hover:text-blue-600">Blog</a></li>
              <li><a href="#" className="hover:text-blue-600">Press</a></li>
            </ul>
          </div>
          
          {/* App */}
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Download Our App</h4>
            <p className="text-sm text-slate-600 mb-4">Shop on the go</p>
            <div className="flex flex-col gap-3">
              <button className="bg-slate-900 text-white rounded-md py-2 px-4 flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M3 20.5v-17c0-.83.67-1.5 1.5-1.5h15c.83 0 1.5.67 1.5 1.5v17c0 .83-.67 1.5-1.5 1.5h-15c-.83 0-1.5-.67-1.5-1.5zm11-13h-4v4h4v-4z" /></svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none text-slate-300">GET IT ON</div>
                  <div className="font-bold text-sm leading-none mt-1">Google Play</div>
                </div>
              </button>
              <button className="bg-slate-900 text-white rounded-md py-2 px-4 flex items-center gap-2 hover:bg-slate-800 transition-colors">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1.6 15.17c-.4.07-1.27.18-2.31.18-1.52 0-2.61-.43-3.29-1.29-.69-.87-.8-2.02-.32-3.41.31-1.07.95-2.04 1.89-2.81.93-.76 2.01-1.15 3.19-1.15 1.15 0 2.21.36 3.09 1.05.86.68 1.48 1.63 1.77 2.76.08.31.12.65.12 1.01 0 1.48-.48 2.62-1.4 3.32-.93.7-2.11.96-3.44.75-.43-.07-.72-.34-.72-.74 0-.16.05-.33.15-.49.27-.47.66-.75 1.12-.86.72-.17 1.25-.56 1.6-1.14.35-.58.46-1.35.34-2.22-.16-1.2-.76-2.11-1.74-2.65-.96-.53-2.15-.55-3.44-.06-1.25.47-2.17 1.34-2.64 2.52-.39.99-.4 2.02-.02 3.01.37.95 1.05 1.55 1.95 1.74.83.18 1.62.1 2.3-.23.47-.23 1.01-.2 1.52.09.43.25.71.65.81 1.14.1.5-.02 1-.35 1.44-.37.5-.94.75-1.63.75h-.11z"/></svg>
                <div className="text-left">
                  <div className="text-[10px] leading-none text-slate-300">Download on the</div>
                  <div className="font-bold text-sm leading-none mt-1">App Store</div>
                </div>
              </button>
            </div>
          </div>
          
        </div>
        
        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-200 text-sm text-slate-500">
          <p>© 2026 TechNova. All rights reserved.</p>
          
          <div className="flex items-center gap-6 my-4 md:my-0">
            <div className="flex items-center gap-1">
              <Lock size={14} className="text-slate-700" />
              <span className="font-medium text-slate-700">Secure Shopping</span>
            </div>
            {/* Payment Icons Placeholder */}
            <div className="flex gap-2 text-slate-800 font-bold italic">
               <span className="text-blue-800">VISA</span>
               <span className="text-red-500">MasterCard</span>
               <span className="text-blue-500">PayPal</span>
            </div>
          </div>
          
          <div className="text-right">
            <p className="text-slate-400">Technology</p>
            <p className="font-semibold text-slate-600">Empowers Everyone</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

