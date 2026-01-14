
import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudyCard = ({ company, result, metric, image }: any) => (
  <div className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 transition-all hover:shadow-2xl">
    <div className="aspect-video w-full overflow-hidden">
      <img 
        src={image} 
        alt={company} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        onError={(e) => {
          e.currentTarget.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800";
        }}
      />
    </div>
    <div className="p-8">
      <div className="flex items-center gap-2 mb-4">
        <span className="h-px w-8 bg-primary"></span>
        <span className="text-xs font-bold uppercase tracking-widest text-primary">{company}</span>
      </div>
      <h3 className="text-xl font-bold mb-2 text-slate-900 dark:text-white">{result}</h3>
      <div className="flex items-baseline gap-2 mt-4">
        <span className="text-3xl font-black text-primary">{metric}</span>
        <span className="text-sm text-slate-500">efficiency boost</span>
      </div>
      <Link to="/contact" className="mt-8 flex items-center gap-2 text-sm font-bold text-slate-900 dark:text-white group-hover:text-primary transition-colors">
        Read Case Study <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
      </Link>
    </div>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-24 lg:pt-32 lg:pb-40 bg-white dark:bg-background-dark">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full"></div>
          <div className="absolute bottom-[20%] left-[-10%] w-[400px] h-[400px] bg-accent-cyan/5 blur-[100px] rounded-full"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="flex flex-col gap-10">
              <div className="inline-flex items-center gap-3 bg-slate-100 dark:bg-slate-800/50 p-1 pr-4 rounded-full w-fit border border-slate-200 dark:border-slate-700">
                <span className="bg-primary text-white text-[10px] font-black uppercase px-2 py-1 rounded-full">New</span>
                <span className="text-xs font-bold text-slate-600 dark:text-slate-300">V3.0 Enterprise Engine is Live</span>
              </div>
              <div className="flex flex-col gap-6">
                <h1 className="text-6xl lg:text-8xl font-black leading-[1] tracking-tighter text-slate-900 dark:text-white">
                  Design for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">Hyper-Scale.</span>
                </h1>
                <p className="text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
                  We don't just build software. We engineer operational intelligence that transforms how modern enterprises breathe, move, and grow.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-5">
                <Link to="/contact" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl shadow-primary/40 text-center scale-100 hover:scale-105 active:scale-95">
                  Start Your Journey
                </Link>
                <Link to="/services" className="bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 hover:border-primary px-10 py-5 rounded-2xl text-lg font-bold transition-all text-center">
                  Explore Solutions
                </Link>
              </div>
              <div className="flex flex-col gap-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Powering Global Excellence</p>
                <div className="flex gap-8 items-center opacity-40 grayscale">
                  <span className="font-black text-xl italic tracking-tighter">HEXA</span>
                  <span className="font-black text-xl italic tracking-tighter">VERTEX</span>
                  <span className="font-black text-xl italic tracking-tighter">NEXUS</span>
                </div>
              </div>
            </div>
            
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent-cyan rounded-[2rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-700 shadow-2xl bg-slate-900">
                <img 
                  alt="Architecture visualization" 
                  className="w-full h-full object-cover aspect-[4/5] opacity-90" 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
                <div className="absolute bottom-10 left-10 right-10 flex flex-col gap-4">
                   <div className="p-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-bold">System Status</span>
                        <span className="text-emerald-400 flex items-center gap-1 text-xs font-bold">
                          <span className="size-1.5 bg-emerald-400 rounded-full animate-pulse"></span>
                          Operational
                        </span>
                      </div>
                      <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-primary w-4/5 h-full rounded-full"></div>
                      </div>
                      <p className="text-slate-300 text-[10px] mt-2 font-medium">Processing 1.2M events/sec in Q3 Cluster</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-24 bg-slate-50 dark:bg-slate-950/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="flex flex-col gap-4">
              <h2 className="text-primary font-black text-xs tracking-[0.3em] uppercase">Enterprise Impact</h2>
              <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Real Results, Real Scale.</h3>
            </div>
            <Link to="/services" className="text-primary font-bold flex items-center gap-2 group">
              View All Outcomes <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <CaseStudyCard 
              company="Fortis Logistics"
              result="Redefining Global Supply Chain"
              metric="42%"
              image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"
            />
            <CaseStudyCard 
              company="Aether FinTech"
              result="Instant Cross-Border Settlements"
              metric="98%"
              image="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800"
            />
            <CaseStudyCard 
              company="Lumina Energy"
              result="Grid-Scale Resource Allocation"
              metric="35x"
              image="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </div>
      </section>

      {/* Visualizing Transformation */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden relative border border-white/5 shadow-2xl">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(19,127,236,0.2),transparent_50%)]"></div>
          <div className="grid lg:grid-cols-2 gap-0 min-h-[600px]">
            <div className="p-12 lg:p-24 flex flex-col justify-center gap-10 relative z-10">
              <div className="size-16 bg-primary rounded-2xl flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-3xl">hub</span>
              </div>
              <div className="flex flex-col gap-6">
                <h2 className="text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">The DataFlow Architecture</h2>
                <p className="text-slate-400 text-lg leading-relaxed">
                  Our proprietary engine maps your organization's digital lifecycle in high-fidelity. We eliminate the fog of operation, giving you a crystal-clear path to optimization.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="text-primary font-black text-3xl mb-1">0.5ms</h4>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Latency Response</p>
                </div>
                <div>
                  <h4 className="text-primary font-black text-3xl mb-1">99.99%</h4>
                  <p className="text-slate-500 text-xs uppercase font-bold tracking-widest">Uptime Record</p>
                </div>
              </div>
            </div>
            <div className="relative bg-slate-800 min-h-[400px]">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1200" 
                alt="Cyber Infrastructure" 
                className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-slate-900 via-transparent to-transparent hidden lg:block"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                 <div className="relative size-64 flex items-center justify-center">
                    <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                    <div className="absolute inset-4 border border-accent-cyan/20 rounded-full animate-[spin_7s_linear_infinite_reverse]"></div>
                    <div className="size-24 bg-primary/20 backdrop-blur-3xl rounded-3xl flex items-center justify-center border border-primary/40">
                      <span className="material-symbols-outlined text-primary text-4xl animate-pulse">monitoring</span>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-6 py-24 text-center">
        <div className="bg-slate-100 dark:bg-slate-900/50 rounded-[3rem] p-12 lg:p-24 flex flex-col gap-10 items-center border border-slate-200 dark:border-slate-800">
          <h2 className="text-4xl lg:text-6xl font-black tracking-tight text-slate-900 dark:text-white max-w-4xl">Ready to engineer your new reality?</h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed font-bold">
            Believe in the impossible and redefine the boundaries of what your legacy can achieve. The future belongs to those who dare to architect it.
          </p>
          <div className="flex flex-col sm:flex-row gap-6">
            <Link to="/contact" className="bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-12 py-5 rounded-2xl text-lg font-bold transition-all shadow-2xl hover:bg-slate-800 dark:hover:bg-slate-100 scale-100 hover:scale-105">
              Contact Strategy Team
            </Link>
            <Link to="/pricing" className="bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 px-12 py-5 rounded-2xl text-lg font-bold transition-all hover:border-primary">
              See Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
