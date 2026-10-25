import React from 'react';
import { personalInfo, numericalHighlights } from '../data/portfolioData';
import { ExternalLink, CheckCircle, ShieldCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from './SocialIcons';

export default function ImpactBar() {
  return (
    <section className="relative z-20 -mt-6 mb-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container with Glassmorphism & High-tech Border */}
      <div className="p-6 sm:p-7 rounded-3xl bg-[#0E131F]/90 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/80">
        
        {/* Top: Verified Numbers */}
        <div className="mb-6">
          <div className="flex items-center justify-between gap-4 mb-4 pb-3 border-b border-white/5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-mono font-semibold tracking-wider text-cyan-400 uppercase">
                Engineering Track Record & Practical Impact
              </span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 hidden sm:inline-block">
              Practical Execution & Applied Problem Solving
            </span>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {numericalHighlights.map((stat, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-black/40 border border-white/5 text-center hover:border-indigo-500/40 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400 mb-1 group-hover:scale-105 transition-transform">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-slate-200 mb-0.5">{stat.label}</div>
                <div className="text-[11px] font-mono text-slate-400 leading-tight">{stat.context}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom: High-Profile Verified Profiles & Fast Proof Links */}
        <div className="pt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-xs font-mono text-slate-300 flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Verify technical code repositories, notebooks, and professional credentials:</span>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#07090E] hover:bg-indigo-950/40 border border-white/10 hover:border-indigo-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-all group"
            >
              <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400 group-hover:scale-110 transition-transform" />
              <span>LinkedIn Profile</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#07090E] hover:bg-slate-900 border border-white/10 hover:border-slate-400 text-xs font-semibold text-slate-200 hover:text-white transition-all group"
            >
              <GithubIcon className="w-3.5 h-3.5 text-slate-300 group-hover:scale-110 transition-transform" />
              <span>GitHub Repositories</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <a
              href={personalInfo.kaggle}
              target="_blank"
              rel="noreferrer"
              className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-[#07090E] hover:bg-cyan-950/40 border border-white/10 hover:border-cyan-400 text-xs font-semibold text-slate-200 hover:text-white transition-all group"
            >
              <KaggleIcon className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform" />
              <span>Kaggle Notebooks</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
