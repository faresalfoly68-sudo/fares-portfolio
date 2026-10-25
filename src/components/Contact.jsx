import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Mail, MapPin, Send, Copy, Check, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon, KaggleIcon } from './SocialIcons';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all fields before sending.');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // Send directly to Fares's email via FormSubmit AJAX API
      const response = await fetch('https://formsubmit.co/ajax/' + personalInfo.email, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
          _template: 'table'
        })
      });

      const data = await response.json();
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        // Fallback to mailto if service is unreachable
        setStatus('fallback');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('fallback');
    }
  };

  return (
    <section id="contact" className="py-24 bg-[#07090E] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="text-xs font-mono font-semibold tracking-wider text-indigo-400 uppercase mb-2">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            Let's Build Something <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300">Intelligent</span>
          </h2>
          <p className="text-sm text-slate-400 max-w-lg mx-auto">
            Have a problem that could be solved with AI? Send me a message and it will go directly to my personal email.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-4xl mx-auto items-start">
          {/* Direct Details (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-[#0E131F]/80 border border-white/10 space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 mb-1.5 block">Direct Email</label>
                <div className="flex items-center justify-between p-3 rounded-xl bg-black/40 border border-white/10">
                  <span className="text-xs font-mono text-slate-200 truncate select-all">{personalInfo.email}</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-colors cursor-pointer"
                    title="Copy Email"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
                {copied && <span className="text-[11px] text-emerald-400 font-mono mt-1 block">Copied to clipboard</span>}
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 mb-1.5 block">Location</label>
                <div className="flex items-center gap-2 p-3 rounded-xl bg-black/40 border border-white/10 text-xs text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 mb-2 block">Professional Profiles</label>
                <div className="flex items-center gap-2">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-black/40 border border-white/10 hover:border-indigo-500/40 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <LinkedinIcon className="w-3.5 h-3.5 text-indigo-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-black/40 border border-white/10 hover:border-indigo-500/40 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5 text-slate-300" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.kaggle}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 p-2.5 rounded-xl bg-black/40 border border-white/10 hover:border-cyan-500/40 text-xs text-slate-300 hover:text-white transition-colors"
                  >
                    <KaggleIcon className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Kaggle</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Form (7 cols) */}
          <div className="md:col-span-7">
            <form onSubmit={handleSubmit} className="p-6 sm:p-7 rounded-2xl bg-[#0E131F]/80 border border-white/10 space-y-4">
              <div>
                <label className="text-xs font-mono text-slate-400 mb-1.5 block">Your Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Sarah Jenkins"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-indigo-500 text-xs text-slate-200 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 mb-1.5 block">Your Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="sarah@company.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-indigo-500 text-xs text-slate-200 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs font-mono text-slate-400 mb-1.5 block">Your Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Describe your project, collaboration, or requirements..."
                  className="w-full px-3.5 py-2.5 rounded-xl bg-black/40 border border-white/10 focus:border-indigo-500 text-xs text-slate-200 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>

              {status === 'error' && (
                <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMessage || 'Please fill in all fields.'}</span>
                </div>
              )}

              {status === 'success' && (
                <div className="p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-2.5 animate-in fade-in duration-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-sm text-white mb-0.5">Message Sent Successfully!</div>
                    <div>Thank you for reaching out. Your message has been sent directly to Fares's inbox.</div>
                  </div>
                </div>
              )}

              {status === 'fallback' && (
                <div className="p-4 rounded-xl bg-indigo-500/15 border border-indigo-500/30 text-slate-200 text-xs space-y-2">
                  <p>Message ready to dispatch! Click below to send directly via your email client:</p>
                  <a
                    href={`mailto:${personalInfo.email}?subject=${encodeURIComponent(`Inquiry from ${formData.name}`)}&body=${encodeURIComponent(
                      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
                    )}`}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Send via Email Client</span>
                  </a>
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white text-xs font-semibold shadow-md shadow-indigo-500/25 transition-all cursor-pointer disabled:opacity-50"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{status === 'submitting' ? 'Sending directly to Fares...' : 'Send Message'}</span>
              </button>
            </form>
          </div>
        </div>

        {/* Final CTA Banner */}
        <div className="mt-16 max-w-3xl mx-auto text-center p-8 rounded-3xl bg-gradient-to-b from-[#0E131F] to-[#07090E] border border-indigo-500/20">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Have an idea, a problem, or an AI challenge?
          </h3>
          <p className="text-slate-400 text-xs sm:text-sm mb-5">
            "{personalInfo.tagline}"
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${personalInfo.email}`}
              className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-lg shadow-indigo-500/25 transition-all"
            >
              Start a Conversation
            </a>
            <a
              href="#projects"
              className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-slate-200 text-xs font-semibold transition-all"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
