import { CheckCircle } from 'lucide-react';
import { experienceData } from '../data/manageData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#E7EBF0] to-white dark:from-[#082B70] dark:to-[#020B24]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Work <span className="bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] mx-auto mb-12 rounded-full"></div>

        <div className="space-y-8">
          {experienceData.map((exp, index) => (
            <div key={index} className="bg-white/80 dark:bg-[#082B70]/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-[#00E1FF]/20 shadow-xl hover:shadow-[0_0_40px_rgba(0,225,255,0.3)] hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-16 h-16 p-2 bg-white dark:bg-white rounded-xl flex items-center justify-center">
                      <img src={exp.companyLogo} alt={exp.company} className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                      <p className="text-lg font-semibold text-[#005CFF] dark:text-[#00E1FF]">{exp.company}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-4 py-1 bg-[#005CFF]/10 dark:bg-[#00E1FF]/10 text-[#005CFF] dark:text-[#00E1FF] rounded-full text-sm font-medium">
                      {exp.period}
                    </span>
                    <span className="px-4 py-1 bg-[#005CFF]/10 dark:bg-[#00E1FF]/10 text-[#005CFF] dark:text-[#00E1FF] rounded-full text-sm font-medium">
                      {exp.sector}
                    </span>
                  </div>

                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-700 dark:text-gray-300">
                        <CheckCircle className="w-5 h-5 text-[#005CFF] dark:text-[#00E1FF] flex-shrink-0 mt-0.5" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
          ))}
        </div>
      </div>
    </section>
  );
}
