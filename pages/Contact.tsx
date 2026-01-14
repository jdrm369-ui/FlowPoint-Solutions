
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-20 py-10 md:py-16 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Column */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tight text-slate-900 dark:text-white">
              Start Your <span className="text-primary">Transformation</span>
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-xl">
              Ready to optimize your business processes? Connect with our digital transformation experts today to begin your journey toward operational excellence.
            </p>
          </div>

          <div className="flex flex-col gap-8 py-4">
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Email Us</h4>
                <p className="text-lg font-medium text-slate-900 dark:text-white">hello@flowpoint.solutions</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined">call</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Call Us</h4>
                <p className="text-lg font-medium text-slate-900 dark:text-white">+1 (555) 012-3456</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 text-primary">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wider">Visit Us</h4>
                <p className="text-lg font-medium text-slate-900 dark:text-white">123 Innovation Drive, Tech Suite 400<br />San Francisco, CA 94105</p>
              </div>
            </div>
          </div>

          <div className="w-full h-64 rounded-xl overflow-hidden bg-slate-200 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-inner">
             <div 
              className="w-full h-full bg-cover bg-center grayscale opacity-80" 
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1524666041070-9d87656c25bb?auto=format&fit=crop&q=80&w=800')" }}
             ></div>
          </div>
        </div>

        {/* Right Column: Form */}
        <div className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800">
          <h3 className="text-2xl font-bold mb-8 text-slate-900 dark:text-white">Request a Consultation</h3>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Full Name</span>
                <input className="form-input rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 px-4 focus:ring-primary focus:border-primary dark:text-white" placeholder="John Doe" type="text" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Work Email</span>
                <input className="form-input rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 px-4 focus:ring-primary focus:border-primary dark:text-white" placeholder="john@company.com" type="email" />
              </label>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Company Name</span>
                <input className="form-input rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 px-4 focus:ring-primary focus:border-primary dark:text-white" placeholder="Acme Corp" type="text" />
              </label>
              <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Industry</span>
                <select className="form-select rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 h-12 px-4 focus:ring-primary focus:border-primary dark:text-white">
                  <option value="">Select an industry</option>
                  <option value="tech">Technology</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="finance">Finance</option>
                  <option value="healthcare">Healthcare</option>
                </select>
              </label>
            </div>
            <label className="flex flex-col gap-2">
              <span className="text-sm font-medium text-slate-700 dark:text-slate-300">Project Details</span>
              <textarea className="form-textarea rounded-lg border-slate-200 dark:border-slate-700 dark:bg-slate-800 px-4 py-3 focus:ring-primary focus:border-primary dark:text-white" placeholder="Tell us about your transformation goals..." rows={4}></textarea>
            </label>
            <button className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-primary/90 transition-all flex items-center justify-center gap-2" type="submit">
              <span>Request Consultation</span>
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
            <p className="text-center text-xs text-slate-400 mt-2">
              By clicking "Request Consultation", you agree to our <span className="underline cursor-pointer">Privacy Policy</span> and <span className="underline cursor-pointer">Terms of Service</span>.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
