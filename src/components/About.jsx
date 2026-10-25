import React from 'react';
import { aboutNarrative } from '../data/portfolioData';
import { UserCheck } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#07090E] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-3">
            <UserCheck className="w-3.5 h-3.5" />
            <span>ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Engineering Smarter Solutions for a Different Future
          </h2>
        </div>

        {/* Single cohesive narrative */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0E131F]/80 border border-white/10 space-y-6 text-slate-300 text-base leading-relaxed shadow-xl">
          {aboutNarrative.map((paragraph, idx) => (
            <p key={idx} className="leading-relaxed text-slate-300 text-sm sm:text-base">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
