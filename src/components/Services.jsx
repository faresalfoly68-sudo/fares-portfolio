import React from 'react';
import { servicesData } from '../data/portfolioData';
import { 
  Sparkles, CheckCircle, Brain, Cpu, Database, Eye, 
  MessageSquare, Bot 
} from 'lucide-react';

const serviceIcons = {
  ml: Brain,
  dl: Cpu,
  cv: Eye,
  nlp: MessageSquare,
  rag: Database,
  automation: Bot
};

export default function Services() {
  return (
    <section id="services" className="py-24 bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>VALUE PROPOSITION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            What Can Fares Actually <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-400">Build For You?</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Service solutions designed around outcomes — engineered to solve problems, save time, and build measurable value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc) => {
            const Icon = serviceIcons[svc.id] || Brain;
            const isEmerging = svc.status.toLowerCase().includes('emerging');
            return (
              <div 
                key={svc.id}
                className={`p-6 rounded-2xl border flex flex-col justify-between transition-all ${
                  isEmerging
                    ? 'bg-amber-950/15 border-amber-500/30'
                    : 'bg-[#0E131F]/80 border-white/10 hover:border-indigo-500/40'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                      isEmerging ? 'bg-amber-500/20 text-amber-300' : 'bg-white/5 text-slate-400'
                    }`}>
                      {svc.status}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-1">{svc.title}</h3>
                  <div className="text-xs font-mono text-cyan-400 mb-2 italic">"{svc.tagline}"</div>
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">{svc.desc}</p>
                </div>

                <div className="pt-3 border-t border-white/5">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-2">Deliverables:</div>
                  <ul className="space-y-1">
                    {svc.deliverables.map((del, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle className="w-3 h-3 text-emerald-400 shrink-0" />
                        <span>{del}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
