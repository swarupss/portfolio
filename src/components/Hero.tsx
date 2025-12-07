import { useState, useEffect } from 'react';
import { Download, Mail } from 'lucide-react';
import { personalInfo, stats, links, calculateYearsOfExperience } from '../data/manageData';

export default function Hero() {
  const [counts, setCounts] = useState({ years: 0, tb: 0, workflows: 0 });

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    const targets = { 
      years: calculateYearsOfExperience(), 
      tb: stats.dataProcessed, 
      workflows: stats.etlWorkflows 
    };
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;

      setCounts({
        years: Math.min(targets.years * progress, targets.years),
        tb: Math.min(targets.tb * progress, targets.tb),
        workflows: Math.min(targets.workflows * progress, targets.workflows),
      });

      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-[#E7EBF0] to-white dark:from-[#020B24] dark:via-[#082B70] dark:to-[#020B24]"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#005CFF] dark:bg-[#00E1FF] opacity-20 animate-float"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 10}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-white/20 dark:bg-[#082B70]/50 backdrop-blur-sm rounded-full border border-[#005CFF]/20 dark:border-[#00E1FF]/20">
              <span className="text-sm font-medium text-[#005CFF] dark:text-[#00E1FF]">
                Welcome to my Portfolio
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white leading-tight">
              {personalInfo.name.first}{' '}
              <span className="bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">
                {personalInfo.name.last}
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-medium">
              {personalInfo.title}
            </p>

            <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
              {personalInfo.description}
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={scrollToContact}
                className="group px-8 py-3 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] text-white rounded-full font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(0,225,255,0.5)] transition-all duration-300 flex items-center gap-2"
              >
                <Mail size={20} />
                Hire Me
              </button>

              <a
                href={links.cvLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group px-8 py-3 bg-white/80 dark:bg-[#082B70] text-gray-900 dark:text-white rounded-full font-medium hover:scale-105 hover:shadow-[0_0_30px_rgba(0,225,255,0.3)] transition-all duration-300 backdrop-blur-sm border border-gray-200 dark:border-[#00E1FF]/20 flex items-center gap-2"
              >
                <Download size={20} />
                View CV
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center p-4 bg-white/50 dark:bg-[#082B70]/30 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-[#00E1FF]/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,225,255,0.2)] transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">
                  {counts.years.toFixed(1)}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Years Experience
                </div>
              </div>

              <div className="text-center p-4 bg-white/50 dark:bg-[#082B70]/30 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-[#00E1FF]/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,225,255,0.2)] transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">
                  {Math.floor(counts.tb)}+ TB
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Data Processed
                </div>
              </div>

              <div className="text-center p-4 bg-white/50 dark:bg-[#082B70]/30 backdrop-blur-sm rounded-2xl border border-gray-200 dark:border-[#00E1FF]/20 hover:scale-105 hover:shadow-[0_0_20px_rgba(0,225,255,0.2)] transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">
                  {Math.floor(counts.workflows)}+
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  ETL Workflows
                </div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-full blur-3xl opacity-30 animate-pulse"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/20 dark:border-[#00E1FF]/20 shadow-2xl hover:scale-105 transition-transform duration-500">
                <img
                  src={personalInfo.profileImage}
                  alt={personalInfo.name.full}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
