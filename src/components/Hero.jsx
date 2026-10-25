import React from 'react';
import { personalInfo } from '../data/portfolioData';
import profileImg from '../assets/fares-profile.jpg';
import { ArrowRight, Download, MapPin, Sparkles } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from './SocialIcons';

export default function Hero({ onDownloadCV }) {
  return (
    <section id="home" className="relative min-h-[92vh] pt-32 pb-20 flex items-center justify-center bg-[#07090E] overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left: Prominent Tagline & Supporting Narrative (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Status badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0E131F] border border-white/10 text-slate-300 text-xs font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Open to AI/ML Opportunities, Freelance Projects, Internships & Collaborations</span>
            </div>

            {/* Main Headline: AI / ML Engineer */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-indigo-300">
                  AI / ML
                </span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">
                  Engineer
                </span>
              </h1>

              {/* Supporting narrative in smaller font */}
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl">
                focused on building end-to-end solutions across Machine Learning, Deep Learning, Computer Vision, and NLP — turning real-world problems into intelligent systems.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs sm:text-sm font-semibold shadow-md shadow-indigo-500/25 transition-all hover:scale-[1.02] cursor-pointer"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#0E131F] hover:bg-[#151C2C] border border-white/10 hover:border-white/20 text-slate-200 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <span>Let's Work Together</span>
              </a>

              <button
                onClick={onDownloadCV}
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Links & Location */}
            <div className="flex flex-wrap items-center gap-5 pt-4 text-xs font-mono text-slate-400 border-t border-white/5">
              <div className="flex items-center gap-1.5 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
                >
                  <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400" />
                  <span>LinkedIn</span>
                </a>
                <span>•</span>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-slate-200 transition-colors"
                >
                  <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                  <span>GitHub</span>
                </a>
                <span>•</span>
                <a
                  href={personalInfo.kaggle}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
                >
                  <KaggleIcon className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Kaggle</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Portrait with Name and Title directly underneath (5 cols) */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-sm">
              {/* Photo */}
              <div className="rounded-2xl overflow-hidden aspect-[4/4.8] bg-[#0E131F] border border-white/10 shadow-2xl shadow-black/80">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                  loading="eager"
                />
              </div>

              {/* Name & Title Placed Directly Under The Photo */}
              <div className="mt-4 p-4 rounded-xl bg-[#0E131F]/90 border border-white/10 text-center">
                <h2 className="text-xl font-bold text-white tracking-tight">
                  {personalInfo.name}
                </h2>
                <div className="text-xs font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 mt-0.5">
                  {personalInfo.title}
                </div>
                <div className="text-[11px] font-mono text-slate-400 mt-1">
                  Egyptian Russian University · Cairo, Egypt
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
