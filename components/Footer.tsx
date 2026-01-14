
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 py-16">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="flex flex-col gap-6">
          <Link to="/" className="flex items-center gap-2">
            <img 
              src="https://raw.githubusercontent.com/ai-gen-assets/logos/main/fp-logo.png" 
              className="h-8 w-auto object-contain" 
              alt="FlowPoint Logo" 
              onError={(e) => {
                e.currentTarget.src = "https://placehold.co/100x100/137fec/ffffff?text=FP";
              }}
            />
            <h2 className="text-lg font-black tracking-tighter text-slate-900 dark:text-white">FlowPoint</h2>
          </Link>
          <p className="text-sm text-slate-500 leading-relaxed font-medium">
            Pioneering the future of business operations through process intelligence and digital excellence.
          </p>
          <div className="flex gap-4">
            <button className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-lg">share</span>
            </button>
            <button className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-500 hover:text-primary transition-colors">
              <span className="material-symbols-outlined text-lg">groups</span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-400">Solutions</h4>
          <Link to="/" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Process Mapping</Link>
          <Link to="/services" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Digital Twin</Link>
          <Link to="/services" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Automation</Link>
          <Link to="/services" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">AI Insights</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-400">Company</h4>
          <Link to="/about" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">About Us</Link>
          <Link to="/about" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Careers</Link>
          <Link to="/about" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Newsroom</Link>
          <Link to="/contact" className="text-sm font-medium text-slate-500 hover:text-primary transition-colors">Contact</Link>
        </div>

        <div className="flex flex-col gap-4">
          <h4 className="font-black text-[10px] uppercase tracking-[0.3em] text-slate-400">Subscribe</h4>
          <p className="text-sm text-slate-500 font-medium">Get the latest transformation insights in your inbox.</p>
          <div className="flex gap-2">
            <input 
              className="bg-slate-100 dark:bg-slate-900 border-none rounded-lg text-sm px-4 py-2 w-full focus:ring-2 focus:ring-primary dark:text-white" 
              placeholder="Email" 
              type="email" 
            />
            <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center">
              <span className="material-symbols-outlined text-sm">send</span>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-slate-100 dark:border-slate-900 flex flex-col md:flex-row justify-between gap-4 text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">
        <p>© 2024 FlowPoint Solutions. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-primary">Privacy Policy</Link>
          <Link to="/" className="hover:text-primary">Terms of Service</Link>
          <Link to="/" className="hover:text-primary">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
