
import React from 'react';
import { Link } from 'react-router-dom';

const ServicePillar = ({ title, description, image, items, icon }: any) => (
  <div className="group flex flex-col bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl overflow-hidden p-8 hover:translate-y-[-8px] hover:border-primary transition-all duration-500 hover:shadow-[0_20px_60px_-15px_rgba(19,127,236,0.15)]">
    <div className="relative w-full aspect-[4/3] rounded-2xl mb-8 overflow-hidden shadow-lg">
      <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 to-transparent"></div>
      <div className="absolute top-4 left-4 size-12 bg-white/90 backdrop-blur-md dark:bg-slate-900/90 rounded-xl flex items-center justify-center text-primary shadow-lg">
        <span className="material-symbols-outlined">{icon}</span>
      </div>
    </div>
    <div className="flex flex-col flex-1">
      <h3 className="text-2xl font-black mb-4 text-slate-900 dark:text-white tracking-tight">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm mb-8 leading-relaxed font-medium">
        {description}
      </p>
      <div className="flex flex-wrap gap-2 mb-10">
        {items.map((item: string, idx: number) => (
          <span key={idx} className="bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-slate-200 dark:border-slate-700">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-auto">
        <Link to="/contact" className="inline-flex items-center gap-2 text-primary font-bold text-sm group/btn">
          Explore Solution
          <span className="material-symbols-outlined text-[18px] group-hover/btn:translate-x-1 transition-transform">arrow_right_alt</span>
        </Link>
      </div>
    </div>
  </div>
);

const TestimonialCard = ({ quote, author, role, company }: any) => (
  <div className="bg-slate-50 dark:bg-slate-900/40 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 flex flex-col gap-8">
    <span className="material-symbols-outlined text-primary text-5xl opacity-40">format_quote</span>
    <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 italic leading-relaxed">
      "{quote}"
    </p>
    <div className="flex items-center gap-4 mt-auto">
      <div className="size-12 rounded-full bg-slate-200 overflow-hidden border-2 border-primary/20">
        <div className="w-full h-full bg-primary/10 flex items-center justify-center">
          <span className="material-symbols-outlined text-primary">person</span>
        </div>
      </div>
      <div>
        <h5 className="font-bold text-slate-900 dark:text-white">{author}</h5>
        <p className="text-xs font-medium text-slate-500">{role}, {company}</p>
      </div>
    </div>
  </div>
);

const Services: React.FC = () => {
  const pillars = [
    {
      title: "Orchestration",
      icon: "settings_suggest",
      description: "Cloud-native workflow management that automatically routes tasks, eliminates bottlenecks, and adapts to load in real-time.",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&q=80&w=800",
      items: ["Hyper-Automation", "Load Balancing"]
    },
    {
      title: "Digital Sovereignty",
      icon: "security",
      description: "Secure migration of legacy core systems into sovereign cloud clusters with zero-downtime cutover protocols.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800",
      items: ["Zero Trust", "Cloud Native"]
    },
    {
      title: "Cognitive Insights",
      icon: "psychology",
      description: "LLM-powered analysis of organizational data to predict market shifts and automate executive reporting streams.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      items: ["AI Predictions", "Real-time ROI"]
    },
    {
      title: "Mesh Integration",
      icon: "hub",
      description: "Low-latency data fabric connecting ERP, CRM, and bespoke systems into a unified intelligence ecosystem.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
      items: ["Data Fabric", "API-First"]
    }
  ];

  return (
    <div className="flex flex-col">
      <section className="max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24">
          <div className="max-w-3xl flex flex-col gap-6">
            <span className="text-primary font-black text-xs tracking-[0.4em] uppercase">The Portfolio</span>
            <h2 className="text-5xl lg:text-7xl font-black leading-[0.9] tracking-tighter text-slate-900 dark:text-white">
              Solutions for the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent-cyan">Unstoppable Enterprise.</span>
            </h2>
            <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              We provide the underlying infrastructure that allows modern organizations to move at the speed of thought. 
              Explore our core technological pillars.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-40">
          {pillars.map((pillar, idx) => (
            <ServicePillar key={idx} {...pillar} />
          ))}
        </div>

        <div className="mb-40">
          <div className="flex flex-col gap-4 text-center mb-16">
            <h4 className="text-primary font-black text-xs tracking-[0.4em] uppercase">Client Voice</h4>
            <h3 className="text-4xl font-black text-slate-900 dark:text-white tracking-tight">Trusted on the Frontlines</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <TestimonialCard 
              quote="FlowPoint didn't just optimize our workflows; they redesigned our entire operational philosophy. We've seen a 400% increase in deployment velocity since the integration."
              author="Marcus Vane"
              role="VP of Engineering"
              company="GlobalX Systems"
            />
            <TestimonialCard 
              quote="The Data Mesh architecture solved our siloed data problem within 6 months. We now have a unified view of our global operations that updates in sub-millisecond cycles."
              author="Elena Soros"
              role="Chief Data Officer"
              company="Aether FinTech"
            />
          </div>
        </div>
      </section>

      {/* Global CTA */}
      <section className="bg-primary py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col gap-10 items-center">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-tight">
            Rise Above the Ordinary.
          </h2>
          <p className="text-xl text-white/80 leading-relaxed max-w-2xl font-black italic">
            "The greatest danger in times of turbulence is not the turbulence; it is to act with yesterday's logic. Engineer your destiny today."
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-4">
            <Link to="/contact" className="bg-white text-primary px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-slate-50 transition-all shadow-2xl">
              Request Strategy Review
            </Link>
            <button className="bg-white/10 text-white backdrop-blur-md border-2 border-white/20 px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all">
              Discover Our Edge
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
