import { Award, Star, Trophy } from 'lucide-react';
import { achievementsData } from '../data/manageData';

const icons = [Award, Star, Trophy];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 bg-gradient-to-b from-[#E7EBF0] to-white dark:from-[#082B70] dark:to-[#020B24]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Awards & <span className="bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">Achievements</span>
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => {
            const IconComponent = icons[index % icons.length];
            return (
              <div
                key={index}
                className="group relative bg-white/80 dark:bg-[#082B70]/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-[#00E1FF]/20 shadow-xl hover:shadow-[0_0_50px_rgba(0,225,255,0.5)] hover:scale-105 hover:-rotate-2 transition-all duration-500"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-full flex items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <div className="mt-8 text-center">
                  <p className="text-lg font-semibold text-gray-900 dark:text-white leading-relaxed">
                    {achievement.title}
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-[#005CFF]/5 to-[#00C1FF]/5 dark:from-[#00E1FF]/5 dark:to-[#005CFF]/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
