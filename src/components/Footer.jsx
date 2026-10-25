import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="py-8 bg-[#05070B] border-t border-white/5 text-slate-500 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-200">{personalInfo.name}</span>
            <span>•</span>
            <span className="font-mono text-slate-400">{personalInfo.title}</span>
          </div>

          <div className="text-center sm:text-right">
            <div className="text-slate-400 text-xs italic">
              "{personalInfo.tagline}"
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px]">
          <div>
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <a href="#home" className="hover:text-slate-300 transition-colors">Back to top ↑</a>
            <span>•</span>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-indigo-400 transition-colors">LinkedIn</a>
            <span>•</span>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-slate-200 transition-colors">GitHub</a>
            <span>•</span>
            <a href={personalInfo.kaggle} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">Kaggle</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
