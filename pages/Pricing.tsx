
import React, { useState, useEffect } from 'react';

const ROICalculator = () => {
  const [employees, setEmployees] = useState(50);
  const [hourlyRate, setHourlyRate] = useState(45);
  const [hoursSaved, setHoursSaved] = useState(5);
  const [savings, setSavings] = useState(0);

  useEffect(() => {
    // Annual savings calculation: employees * hourlyRate * hoursSavedPerWeek * 50 weeks
    const annualSavings = employees * hourlyRate * hoursSaved * 50;
    setSavings(annualSavings);
  }, [employees, hourlyRate, hoursSaved]);

  return (
    <div className="bg-slate-900 rounded-[2rem] p-8 lg:p-12 text-white border border-white/5 shadow-2xl overflow-hidden relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full"></div>
      <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-black tracking-tight">ROI Calculator</h3>
            <p className="text-slate-400 text-sm">Estimate your annual efficiency gains with FlowPoint Solutions.</p>
          </div>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-300">Team Size</span>
                <span className="text-primary">{employees} Employees</span>
              </div>
              <input 
                type="range" min="10" max="1000" step="10" 
                value={employees} onChange={(e) => setEmployees(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
            
            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-300">Avg. Hourly Rate</span>
                <span className="text-primary">${hourlyRate}/hr</span>
              </div>
              <input 
                type="range" min="20" max="250" step="5" 
                value={hourlyRate} onChange={(e) => setHourlyRate(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex justify-between text-sm font-bold">
                <span className="text-slate-300">Weekly Hours Saved per Employee</span>
                <span className="text-primary">{hoursSaved} Hours</span>
              </div>
              <input 
                type="range" min="1" max="20" step="1" 
                value={hoursSaved} onChange={(e) => setHoursSaved(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
              />
            </div>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-[2rem] text-center flex flex-col gap-4 items-center">
          <span className="text-slate-400 text-xs font-black uppercase tracking-[0.2em]">Estimated Annual Savings</span>
          <div className="text-5xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">
            ${savings.toLocaleString()}
          </div>
          <p className="text-slate-400 text-sm max-w-[240px]">
            Based on average digital transformation metrics across our portfolio.
          </p>
          <button className="mt-6 bg-primary hover:bg-primary/90 text-white px-10 py-4 rounded-xl font-bold transition-all shadow-xl shadow-primary/40 w-full">
            Get Full Audit
          </button>
        </div>
      </div>
    </div>
  );
};

const PricingCard = ({ plan, price, desc, items, featured, buttonText, billingNote }: any) => (
  <div className={`relative flex flex-col p-10 rounded-3xl border-2 transition-all duration-300 ${
    featured 
      ? 'border-primary bg-primary/5 shadow-2xl scale-105 z-10 dark:bg-primary/10' 
      : 'border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-sm hover:border-slate-300 dark:hover:border-slate-600'
  }`}>
    {featured && (
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-[10px] font-black tracking-widest uppercase">
        Enterprise Choice
      </div>
    )}
    <div className="mb-10">
      <h3 className="text-xl font-black mb-2 text-slate-900 dark:text-white uppercase tracking-tight">{plan}</h3>
      <div className="flex flex-col">
        <div className="flex items-baseline gap-1">
          <span className={`text-5xl font-black ${featured ? 'text-primary' : 'text-slate-900 dark:text-white'}`}>
            {price}
          </span>
          {price !== 'Custom' && (
            <span className="text-slate-500 font-bold text-sm tracking-tight">/mo</span>
          )}
        </div>
        {billingNote && <span className="text-[10px] text-slate-400 font-bold mt-1 uppercase tracking-tight">{billingNote}</span>}
      </div>
      <p className="mt-6 text-sm text-slate-500 dark:text-slate-400 leading-relaxed font-medium">{desc}</p>
    </div>
    <button className={`w-full py-4 mb-10 font-black rounded-2xl transition-all uppercase text-xs tracking-widest ${
      featured 
        ? 'bg-primary text-white hover:bg-primary/90 shadow-2xl shadow-primary/40' 
        : 'bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white hover:bg-primary hover:text-white'
    }`}>
      {buttonText}
    </button>
    <div className="space-y-5">
      {items.map((item: string, idx: number) => (
        <div key={idx} className="flex items-start gap-4 text-sm font-medium">
          <span className="material-symbols-outlined text-primary text-lg mt-0.5">check_circle</span>
          <span className="text-slate-600 dark:text-slate-300 leading-tight">{item}</span>
        </div>
      ))}
    </div>
  </div>
);

const Pricing: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
      <div className="text-center mb-20 flex flex-col gap-6">
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 dark:text-white">
          Invest in <span className="text-primary">Scale.</span>
        </h2>
        <p className="text-xl text-slate-500 dark:text-slate-400 max-w-2xl mx-auto font-medium">
          Transparent, high-performance pricing designed for the ambitious enterprise. 
          No hidden fees, just exponential value.
        </p>
      </div>

      <div className="flex justify-center mb-20">
        <div className="flex p-1.5 bg-slate-100 dark:bg-slate-800 rounded-2xl w-full max-w-sm shadow-inner border border-slate-200 dark:border-slate-700">
          <button 
            onClick={() => setIsAnnual(false)}
            className={`flex-1 flex items-center justify-center h-12 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${!isAnnual ? 'bg-white dark:bg-slate-700 shadow-xl text-primary' : 'text-slate-500'}`}
          >
            Monthly
          </button>
          <button 
            onClick={() => setIsAnnual(true)}
            className={`flex-1 flex items-center justify-center h-12 rounded-xl text-sm font-black uppercase tracking-widest transition-all ${isAnnual ? 'bg-white dark:bg-slate-700 shadow-xl text-primary' : 'text-slate-500'}`}
          >
            Annual <span className="ml-2 bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded-full">-20%</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
        <PricingCard 
          plan="Standard"
          price={isAnnual ? "$60" : "$75"}
          billingNote={isAnnual ? "Billed annually ($720/yr)" : "Billed monthly"}
          desc="Essential tools for teams ready to baseline their efficiency."
          buttonText="Start Now"
          items={["Core Workflow Automation", "Up to 50 active projects", "24/5 Email Support", "Weekly Insight Reports", "Basic API Access"]}
        />
        <PricingCard 
          plan="Professional"
          price={isAnnual ? "$127" : "$159"}
          billingNote={isAnnual ? "Billed annually ($1,524/yr)" : "Billed monthly"}
          desc="Our flagship plan for rapidly expanding digital operations."
          buttonText="Free 14-Day Trial"
          featured={true}
          items={["Advanced AI Orchestration", "Unlimited active projects", "24/7 Priority Support", "Daily Real-time Analytics", "Full Enterprise API", "Custom Integrations", "SLA Guarantee"]}
        />
        <PricingCard 
          plan="Global"
          price="Custom"
          desc="Bespoke infrastructure for multinational conglomerate scale."
          buttonText="Consult Strategist"
          items={["White-labeled Infrastructure", "Dedicated Success Squad", "On-premise deployment option", "Global Support Network", "Custom Security Protocols", "Infinite Scalability"]}
        />
      </div>

      <div className="mb-20">
        <ROICalculator />
      </div>

      <div className="text-center py-24 border-t border-slate-200 dark:border-slate-800">
         <div className="flex flex-col gap-12">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">Powering the Fortune 500</h4>
            <div className="flex flex-wrap justify-center items-center gap-16 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
              <span className="text-3xl font-black italic">GLOBALX</span>
              <span className="text-3xl font-black italic">PRIME</span>
              <span className="text-3xl font-black italic">ORBIT</span>
              <span className="text-3xl font-black italic">LUMINA</span>
              <span className="text-3xl font-black italic">VECTOR</span>
            </div>
         </div>
      </div>
    </div>
  );
};

export default Pricing;
