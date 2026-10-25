import React from 'react';
import { skillsData } from '../data/portfolioData';
import { Cpu, CheckCircle } from 'lucide-react';

export default function Skills() {
  const { categories, strongCapabilities } = skillsData;

  return (
    <section id="skills" className="py-24 bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>TECHNICAL CAPABILITIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Technical Matrix</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Core competencies engineered across machine learning, neural architectures, vision, NLP, and modern agentic systems.
          </p>
        </div>

        {/* Strong Practical Capabilities Spotlight */}
        <div className="mb-12 p-6 rounded-2xl bg-gradient-to-r from-indigo-950/40 via-[#0E131F] to-cyan-950/30 border border-indigo-500/30">
          <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-3">
            Strong Practical Capabilities (End-to-End)
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
            {strongCapabilities.map((cap, i) => (
              <div key={i} className="flex items-center gap-2 p-2.5 rounded-xl bg-white/[0.03] border border-white/5 text-xs font-semibold text-slate-200">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Streamlined Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => {
            const isEmerging = cat.isEmerging;
            return (
              <div 
                key={idx}
                className={`p-6 rounded-2xl border transition-all ${
                  isEmerging 
                    ? 'bg-amber-950/15 border-amber-500/30' 
                    : 'bg-[#0E131F]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-white/5">
                  <h3 className="text-sm font-bold text-white">{cat.name}</h3>
                  {isEmerging && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                      Emerging
                    </span>
                  )}
                  {cat.tier && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300">
                      {cat.tier}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill, sIdx) => (
                    <span
                      key={sIdx}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/5 hover:border-indigo-500/30 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
