import React, { useState } from 'react';
import { projectsData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';
import { 
  FolderGit2, Sparkles, ArrowUpRight, ExternalLink, 
  Layers, CheckCircle2, AlertTriangle, Eye, Image as ImageIcon 
} from 'lucide-react';
import { GithubIcon, KaggleIcon } from './SocialIcons';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const categories = ['All', 'Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP', 'Clustering'];

  const filteredProjects = selectedCategory === 'All'
    ? projectsData
    : projectsData.filter(p => p.category.toLowerCase() === selectedCategory.toLowerCase() || p.tags.some(t => t.toLowerCase() === selectedCategory.toLowerCase()));

  return (
    <section id="projects" className="py-24 bg-[#07090E] relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 font-mono text-xs mb-4">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>APPLIED PRODUCTION & RESEARCH PROJECTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            End-to-End <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-cyan-300 to-emerald-400">Engineering Work</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Real-world systems spanning recommendation, computer vision, demand forecasting, medical imaging classification, and spatial clustering — built with algorithmic rigor and deployable architectures.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-12">
          {categories.map((cat) => {
            const isSelected = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/25'
                    : 'bg-[#0E131F] border border-white/10 text-slate-400 hover:text-slate-200 hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel rounded-2xl border border-white/10 hover:border-indigo-500/40 transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:shadow-xl hover:shadow-indigo-500/10"
            >
              {/* Project Card Header with Visual / Artwork Banner */}
              <div className="relative">
                {project.image ? (
                  <div className="relative h-48 w-full overflow-hidden bg-[#0A0D14] border-b border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E131F] via-[#0E131F]/30 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
                        {project.category}
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="h-28 w-full bg-gradient-to-r from-indigo-950/40 via-[#0E131F] to-cyan-950/30 p-4 border-b border-white/5 flex items-start justify-between">
                    <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-indigo-500/15 text-indigo-300 border border-indigo-500/30">
                      {project.category}
                    </span>
                    <div className="text-[10px] font-mono text-slate-500 truncate max-w-[160px]">
                      {project.domain.split('/')[0]}
                    </div>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 pt-5 border-b border-white/5">
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-4">
                  {project.shortDesc}
                </p>

                {/* Key Metric Spotlight */}
                <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-center justify-between">
                  <div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Key Result</div>
                    <div className="text-xs font-bold font-mono text-emerald-400">{project.keyMetric}</div>
                  </div>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400/80 shrink-0" />
                </div>
              </div>

              {/* Card Footer: Tags & Action Buttons */}
              <div className="p-6 pt-4 flex-1 flex flex-col justify-between">
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.slice(0, 5).map((t, idx) => (
                    <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/5 text-slate-300 border border-white/10">
                      {t}
                    </span>
                  ))}
                  {project.tags.length > 5 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/5 text-slate-500">
                      +{project.tags.length - 5}
                    </span>
                  )}
                </div>

                {/* Card Actions */}
                <div className="flex items-center gap-2 pt-4 border-t border-white/5">
                  <button
                    onClick={() => setActiveProject(project)}
                    className="flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-indigo-600/20 hover:bg-indigo-600 text-indigo-300 hover:text-white border border-indigo-500/30 text-xs font-semibold transition-all duration-200 cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Details</span>
                  </button>

                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-300 hover:text-white transition-colors"
                      title="GitHub Repository"
                    >
                      <GithubIcon className="w-4 h-4" />
                    </a>
                  )}

                  {project.kaggleUrl && (
                    <a
                      href={project.kaggleUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2.5 rounded-xl bg-cyan-950/30 hover:bg-cyan-900/40 border border-cyan-500/30 text-cyan-300 transition-colors"
                      title="Kaggle Notebook / Model"
                    >
                      <KaggleIcon className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Deep-Dive Technical Modal Drawer */}
      {activeProject && (
        <ProjectModal
          project={activeProject}
          onClose={() => setActiveProject(null)}
        />
      )}
    </section>
  );
}
