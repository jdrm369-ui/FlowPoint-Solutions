
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavbarProps {
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Solutions', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            <img 
              src="https://raw.githubusercontent.com/ai-gen-assets/logos/main/fp-logo.png" 
              className="h-12 w-auto object-contain" 
              alt="FlowPoint Logo" 
              onError={(e) => {
                // Fallback if image isn't found
                e.currentTarget.src = "https://placehold.co/100x100/137fec/ffffff?text=FP";
              }}
            />
          </div>
          <h2 className="text-xl font-black tracking-tighter text-slate-900 dark:text-white hidden sm:block">FlowPoint</h2>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs font-black uppercase tracking-widest transition-colors ${
                isActive(link.path) ? 'text-primary' : 'text-slate-600 dark:text-slate-300 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
          >
            <span className="material-symbols-outlined text-xl">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          <Link
            to="/contact"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-lg text-xs font-black uppercase tracking-widest transition-all shadow-lg shadow-primary/20 hidden sm:block"
          >
            Get Started
          </Link>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-slate-300"
          >
            <span className="material-symbols-outlined text-2xl">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-background-dark border-b border-slate-200 dark:border-slate-800 p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-sm font-black uppercase tracking-widest ${
                isActive(link.path) ? 'text-primary' : 'text-slate-600 dark:text-slate-300'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="bg-primary text-white text-center py-4 rounded-xl font-black uppercase tracking-widest text-sm mt-4"
          >
            Request Consultation
          </Link>
        </div>
      )}
    </header>
  );
};

export default Navbar;
