import React, { useEffect } from 'react';
import { 
  X, CheckCircle2, AlertTriangle, ExternalLink, 
  Terminal, Database, Cpu, Layers, ArrowRight, ShieldAlert 
} from 'lucide-react';
import { GithubIcon, KaggleIcon } from './SocialIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0E131F] border border-white/15 rounded-3xl shadow-2xl shadow-black/80 p-6 sm:p-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-start justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <div className="flex flex-wrap items-center gap-2 mb-2">
              <span className="text-xs font-mono px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                {project.domain}
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white border border-white/10 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Banner Image (if available) */}
        {project.image && (
          <div className="mt-6 rounded-2xl overflow-hidden border border-white/10 max-h-72 w-full bg-[#07090E]">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        {/* Modal Body */}
        <div className="space-y-8 py-6">
          
          {/* Disclaimer (if applicable) */}
          {project.disclaimer && (
            <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-500/40 text-amber-300 text-xs leading-relaxed flex items-start gap-3">
              <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>{project.disclaimer}</div>
            </div>
          )}

          {/* Problem & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-xs font-mono text-rose-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>The Real-World Problem</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {project.problem}
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/10">
              <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Key Result & Metric Context</span>
              </div>
              <div className="text-base font-bold font-mono text-white mb-1.5">
                {project.keyMetric}
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                {project.metricContext}
              </p>
            </div>
          </div>

          {/* Dataset Specifications */}
          <div className="p-5 rounded-2xl bg-white/[0.02] border border-white/10">
            <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Database className="w-4 h-4" />
              <span>Dataset & Scale</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
              {project.dataset}
            </p>
          </div>

          {/* End-to-End Pipeline Steps */}
          <div>
            <div className="text-xs font-mono text-indigo-400 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Layers className="w-4 h-4" />
              <span>End-to-End Engineering Pipeline</span>
            </div>
            <div className="space-y-2">
              {project.pipeline.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-black/30 border border-white/5 text-xs text-slate-300 font-mono">
                  <span className="w-5 h-5 rounded-md bg-indigo-600/30 text-indigo-300 flex items-center justify-center text-[10px] shrink-0">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* User Flow */}
          {project.userFlow && (
            <div className="p-5 rounded-2xl bg-[#07090E] border border-indigo-500/20">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                Operational User Flow
              </div>
              <div className="font-mono text-xs text-cyan-300 leading-relaxed">
                {project.userFlow}
              </div>
            </div>
          )}

          {/* Quantified Results */}
          <div>
            <div className="text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
              Verified Technical Outcomes
            </div>
            <div className="space-y-2">
              {project.results.map((res, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2.5">
              Technologies & Frameworks
            </div>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, idx) => (
                <span key={idx} className="text-xs font-mono px-3 py-1 rounded-lg bg-white/5 text-slate-300 border border-white/10">
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer / Action Links */}
        <div className="pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/15 text-white text-xs font-semibold transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>View on GitHub</span>
              </a>
            )}

            {project.kaggleUrl && (
              <a
                href={project.kaggleUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-950/40 hover:bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-colors font-mono"
              >
                <KaggleIcon className="w-4 h-4" />
                <span>View on Kaggle</span>
              </a>
            )}

            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-500/25 transition-colors"
              >
                <span>Live Demo</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white text-xs font-semibold transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
