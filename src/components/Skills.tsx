import { useEffect, useRef } from 'react';
import { skillsData } from '../data/manageData';

export default function Skills() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 1.2;

    const autoScroll = () => {
      scrollAmount += scrollSpeed;
      
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
        scrollAmount = 0;
      } else {
        scrollContainer.scrollLeft = scrollAmount;
      }
    };

    const intervalId = setInterval(autoScroll, 8);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#020B24]">
      <div className="w-full overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
            Technical <span className="bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">Skills</span>
          </h2>

          <div className="h-1 w-24 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] mx-auto rounded-full"></div>
        </div>

        <div 
          ref={scrollRef}
          className="flex gap-6 md:gap-8 overflow-x-hidden px-4 py-8 md:py-12 scrollbar-hide"
          style={{ scrollBehavior: 'auto', msOverflowStyle: 'none', scrollbarWidth: 'none' }}
        >
          {/* Duplicate the cards for seamless loop */}
          {[...skillsData, ...skillsData].map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="flex-shrink-0 w-[75vw] sm:w-[55vw] md:w-[40vw] lg:w-[30vw] xl:w-[25vw] max-w-[380px] bg-white/80 dark:bg-[#082B70]/50 backdrop-blur-xl rounded-3xl p-5 md:p-6 lg:p-7 border-2 border-gray-200 dark:border-[#00E1FF]/20 shadow-xl hover:shadow-[0_0_50px_rgba(0,225,255,0.6)] hover:scale-105 hover:border-[#00E1FF] transition-all duration-500"
            >
              <h3 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white mb-3 md:mb-4 lg:mb-5 mt-2 text-center bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">
                {category.category}
              </h3>
              
              <div className="grid grid-cols-2 gap-2.5 md:gap-3 lg:gap-3.5 pb-2">
                {category.technologies.map((tech, techIndex) => (
                  <div
                    key={techIndex}
                    className="group flex flex-col items-center justify-center p-2 sm:p-2.5 md:p-3 my-1.5 bg-white dark:bg-white rounded-xl border border-gray-200 dark:border-[#00E1FF]/10 hover:border-[#005CFF] dark:hover:border-[#00E1FF] hover:shadow-[0_0_25px_rgba(0,225,255,0.4)] hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                  >
                    <img 
                      src={tech.logo} 
                      alt={tech.name}
                      className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 mb-1 sm:mb-1.5 md:mb-2 object-contain group-hover:scale-125 transition-transform duration-300"
                    />
                    <p className="text-[9px] sm:text-[10px] md:text-xs font-semibold text-gray-700 dark:text-gray-800 text-center leading-tight group-hover:text-[#005CFF] dark:group-hover:text-[#005CFF] transition-colors">
                      {tech.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
