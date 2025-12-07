import { GraduationCap } from 'lucide-react';
import { educationData } from '../data/manageData';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-white dark:bg-[#020B24]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Education <span className="bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">Journey</span>
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group relative h-64 perspective-1000"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                <div className="absolute inset-0 backface-hidden bg-white/80 dark:bg-[#082B70]/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-[#00E1FF]/20 shadow-xl flex flex-col items-center justify-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-full flex items-center justify-center mb-4 shadow-lg">
                    <GraduationCap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#005CFF] dark:text-[#00E1FF] mb-2">
                    {edu.year}
                  </h3>
                  <p className="text-lg font-semibold text-gray-900 dark:text-white">
                    {edu.degree}
                  </p>
                </div>

                <div className="absolute inset-0 backface-hidden bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-3xl p-8 border border-[#00E1FF] shadow-[0_0_40px_rgba(0,225,255,0.4)] flex items-center justify-center text-center rotate-y-180">
                  <p className="text-white font-medium leading-relaxed">
                    {edu.institute}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
