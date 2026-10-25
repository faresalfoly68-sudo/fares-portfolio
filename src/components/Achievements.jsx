import React, { useState } from 'react';
import { achievementsData } from '../data/portfolioData';
import { Award, Clock, FileText, X, ExternalLink, ShieldCheck, Eye } from 'lucide-react';

export default function Achievements() {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <section id="achievements" className="py-24 bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 font-mono text-xs mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>CREDENTIALS & SPECIALIZED TRAINING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Achievements & <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-cyan-300 to-indigo-400">Certifications</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Verified diplomas, training completions, and technical awards. Click any credential to inspect the certificate in full resolution.
          </p>
        </div>

        {/* Credentials Grid: Distinct elegant card layout with compact preview badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {achievementsData.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-2xl bg-gradient-to-b from-[#0E131F] to-[#0A0D15] border border-white/10 hover:border-amber-500/40 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-amber-500/5"
            >
              <div>
                {/* Header: Issuer Badge & Date */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-amber-500/15 text-amber-300 border border-amber-500/30 font-medium">
                    {item.issuer}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">{item.date}</span>
                </div>

                {/* Compact Thumbnail Container (Compact & Clickable) */}
                {item.image ? (
                  <div
                    onClick={() => setSelectedCert(item)}
                    className="relative mb-3.5 rounded-xl overflow-hidden h-36 bg-black/60 border border-white/10 cursor-pointer group/img"
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover object-center group-hover/img:scale-105 transition-transform duration-300"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white font-mono text-xs">
                      <Eye className="w-3.5 h-3.5 text-cyan-300" />
                      <span>Click to Enlarge</span>
                    </div>
                  </div>
                ) : (
                  <div className="mb-3.5 h-20 rounded-xl bg-black/30 border border-white/5 flex items-center justify-center text-slate-500 text-xs font-mono">
                    <ShieldCheck className="w-5 h-5 text-indigo-400 mr-2" />
                    <span>Verified Program Track</span>
                  </div>
                )}

                {/* Title & Description */}
                <h3 className="text-sm sm:text-base font-bold text-white mb-2 group-hover:text-amber-300 transition-colors leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3 mb-3">
                  {item.description}
                </p>
              </div>

              {/* Bottom Telemetry & Actions */}
              <div className="pt-3 border-t border-white/5 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <div className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3 h-3 text-slate-500" />
                  <span>{item.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  {item.image && (
                    <button
                      onClick={() => setSelectedCert(item)}
                      className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <Eye className="w-3 h-3" />
                      <span>View</span>
                    </button>
                  )}
                  {item.pdfUrl && (
                    <a
                      href={item.pdfUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-amber-400 hover:text-amber-300 transition-colors inline-flex items-center gap-1"
                    >
                      <span>PDF</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Resolution Certificate Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative w-full max-w-3xl bg-[#0E131F] border border-white/15 rounded-3xl p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white">{selectedCert.title}</h3>
                <div className="text-xs font-mono text-cyan-400">{selectedCert.issuer} — {selectedCert.date}</div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="rounded-2xl overflow-hidden border border-white/10 bg-black/80 mb-4 max-h-[68vh] flex items-center justify-center">
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                className="w-full h-auto max-h-[65vh] object-contain"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>{selectedCert.organization}</span>
              {selectedCert.pdfUrl && (
                <a
                  href={selectedCert.pdfUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold flex items-center gap-1.5 transition-colors"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Download Original PDF</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
