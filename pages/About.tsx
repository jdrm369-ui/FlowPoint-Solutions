
import React from 'react';

const LeadershipCard = ({ name, role, bio }: any) => (
  <div className="flex flex-col gap-6 p-10 rounded-[2.5rem] bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 transition-all duration-500 hover:border-primary hover:shadow-2xl hover:shadow-primary/5 group">
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-3 mb-2">
        <div className="size-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-500"></div>
        <p className="text-primary text-[10px] font-black uppercase tracking-[0.3em]">{role}</p>
      </div>
      <h4 className="text-slate-900 dark:text-white text-3xl font-black tracking-tighter group-hover:translate-x-1 transition-transform duration-500">{name}</h4>
    </div>
    <div className="h-px w-full bg-slate-200 dark:bg-slate-800"></div>
    <p className="text-slate-500 dark:text-slate-400 text-lg leading-relaxed font-medium">
      {bio}
    </p>
    <div className="mt-auto pt-4">
      <div className="flex gap-4">
        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors cursor-pointer">share</span>
        <span className="material-symbols-outlined text-slate-400 group-hover:text-primary transition-colors cursor-pointer">alternate_email</span>
      </div>
    </div>
  </div>
);

const About: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative min-h-[460px] flex flex-col gap-6 rounded-[3rem] items-center justify-center p-12 text-center overflow-hidden shadow-2xl">
            <div className="absolute inset-0 z-0">
               <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
                className="w-full h-full object-cover opacity-30 dark:opacity-50" 
                alt="Modern Office" 
               />
               <div className="absolute inset-0 bg-primary/80 dark:bg-slate-900/90 mix-blend-multiply"></div>
            </div>
            <div className="relative z-10 flex flex-col gap-6 max-w-4xl">
              <span className="text-white/70 font-black text-xs uppercase tracking-[0.5em]">Our Identity</span>
              <h1 className="text-white text-5xl font-black leading-tight tracking-tighter md:text-7xl">
                Engineering the <br/> Human-Digital Flow.
              </h1>
              <p className="text-white/90 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                We believe that the most powerful technology is that which disappears into the workflow. We are architects of efficiency and builders of digital bridges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-24 bg-background-light dark:bg-background-dark/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 text-center items-center mb-20">
            <h2 className="text-slate-900 dark:text-white text-4xl md:text-6xl font-black tracking-tighter">Our North Star</h2>
            <div className="w-24 h-2 bg-primary rounded-full mb-4"></div>
            <p className="text-slate-500 dark:text-slate-400 text-xl max-w-2xl font-medium leading-relaxed">
              Redefining operational excellence through the lens of human-centric digital innovation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="group flex flex-col gap-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <span className="material-symbols-outlined text-9xl">visibility</span>
              </div>
              <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-3xl">visibility</span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">Our Vision</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg">
                To be the global leader in providing seamless, automated digital workflows. We envision a world where technology is an intuitive extension of human intent, eliminating friction and fostering innovation.
              </p>
            </div>

            <div className="group flex flex-col gap-6 rounded-[2.5rem] border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-12 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-8 opacity-5">
                <span className="material-symbols-outlined text-9xl">rocket_launch</span>
              </div>
              <div className="size-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined text-3xl">rocket_launch</span>
              </div>
              <h3 className="text-slate-900 dark:text-white text-3xl font-black tracking-tight">Our Mission</h3>
              <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium text-lg">
                To empower businesses with innovative technology that optimizes processes and maximizes ROI. We are dedicated to delivering scalable, high-impact solutions that solve the toughest operational challenges.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Section - Text Focused */}
      <section className="py-32 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-4 mb-20 text-center">
            <span className="text-primary font-black text-xs tracking-[0.5em] uppercase">The Strategy Team</span>
            <h2 className="text-slate-900 dark:text-white text-5xl md:text-7xl font-black tracking-tighter">Core Architects</h2>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl mx-auto font-medium">
              The minds behind the flow. A diverse team of strategists and engineers dedicated to your transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <LeadershipCard 
              name="Eliana Valencia" 
              role="Commercial Director"
              bio="Leading global expansion and corporate strategy with a focus on delivering high-fidelity digital solutions for enterprise scale."
            />
            <LeadershipCard 
              name="Juan Diego Rodriguez" 
              role="Project Leader"
              bio="Orchestrating technical implementation and architectural integrity across our most complex digital transformation initiatives."
            />
            <LeadershipCard 
              name="Santiago Ruiz Pineda" 
              role="Marketing Specialist"
              bio="Defining the FlowPoint narrative and building digital growth funnels that resonate with the modern digital-first enterprise."
            />
          </div>
        </div>
      </section>

      {/* Bottom Motivational CTA */}
      <div className="w-full py-32 bg-slate-900 flex justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(19,127,236,0.1),transparent)]"></div>
        <div className="max-w-4xl px-6 flex flex-col items-center gap-10 text-white relative z-10">
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-tight">Be the architect <br/> of your legacy.</h2>
          <p className="text-white/60 text-xl font-medium leading-relaxed max-w-2xl italic">
            "Don't wait for the future to happen. Design the systems that make the future inevitable. Your transformation starts with a single optimized flow."
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-6">
            <button className="bg-primary text-white px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-primary/90 transition-all shadow-2xl shadow-primary/40">Launch Your Project</button>
            <button className="bg-white/10 border border-white/20 text-white backdrop-blur-md px-12 py-5 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/20 transition-all">Download Roadmap</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
