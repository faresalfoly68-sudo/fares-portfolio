import React from 'react';
import { educationInfo } from '../data/portfolioData';
import { GraduationCap, Calendar, MapPin, CheckCircle2 } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 bg-[#07090E] border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-xs mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
            Education
          </h2>
          <p className="text-slate-400 text-sm">
            Formal undergraduate academic studies in Artificial Intelligence.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-[#0E131F]/90 border border-indigo-500/30 shadow-xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
            <div>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-semibold uppercase mb-2 inline-block">
                Bachelor of Artificial Intelligence
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white">{educationInfo.degree}</h3>
              <div className="text-sm font-semibold text-cyan-400 mt-1">
                {educationInfo.institution} — {educationInfo.faculty}
              </div>
            </div>
            <div className="text-xs font-mono px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 font-bold self-start sm:self-auto">
              CGPA: {educationInfo.cgpa}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs font-mono text-slate-400 my-5 pt-3 border-t border-white/5">
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-slate-500" />
              <span>{educationInfo.period} (Expected {educationInfo.expectedGraduation})</span>
            </div>
            <div className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-slate-500" />
              <span>{educationInfo.location}</span>
            </div>
          </div>

          <div className="space-y-2.5 pt-2">
            {educationInfo.highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
