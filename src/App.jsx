import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImpactBar from './components/ImpactBar';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const handleDownloadCV = () => {
  const link = document.createElement('a');
  link.href = `${import.meta.env.BASE_URL}fares-cv.pdf`;
  link.download = 'Fares_Waleed_Alfoly_AI_CV.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col selection:bg-indigo-500/30 selection:text-indigo-300 font-sans">
      <Navbar onDownloadCV={handleDownloadCV} />
      <main className="flex-grow">
        <Hero onDownloadCV={handleDownloadCV} />
        <ImpactBar />
        <About />
        <Education />
        <Skills />
        <Services />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
