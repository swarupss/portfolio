import { Code2, Database, Cloud } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-[#020B24]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          About <span className="bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">Me</span>
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] mx-auto mb-12 rounded-full"></div>

        <div className="bg-white/50 dark:bg-[#082B70]/30 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-gray-200 dark:border-[#00E1FF]/20 shadow-xl hover:shadow-[0_0_40px_rgba(0,225,255,0.2)] transition-all duration-500 hover:scale-[1.02]">
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-6">
            I am a results-driven Data Engineer with over 4.3 years of experience designing scalable data pipelines, optimizing ETL workflows, and implementing cloud-based data transformation solutions across diverse sectors including healthcare, aviation, and FMCG. With expertise in Informatica PowerCenter, IICS, Azure Data Factory, Azure Databricks, Apache Spark, SQL, Hadoop, and advanced warehousing models, I specialize in building reliable, high-performance data systems that drive impactful business decisions.
          </p>

          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 mb-8">
            I am passionate about automation, performance engineering, scalable architecture, and enabling organizations to unlock the true potential of their data.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center p-6 bg-white/60 dark:bg-[#020B24]/50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="p-4 bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-2xl mb-4">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">ETL Expert</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Building robust data pipelines</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/60 dark:bg-[#020B24]/50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="p-4 bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-2xl mb-4">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Cloud Native</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Azure & Big Data solutions</p>
            </div>

            <div className="flex flex-col items-center p-6 bg-white/60 dark:bg-[#020B24]/50 rounded-2xl hover:scale-105 transition-transform duration-300">
              <div className="p-4 bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-2xl mb-4">
                <Code2 className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Performance</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 text-center">Optimization & automation</p>
            </div>
          </div>

          <div className="relative p-6 bg-gradient-to-r from-[#005CFF]/10 to-[#00C1FF]/10 dark:from-[#00E1FF]/10 dark:to-[#005CFF]/10 rounded-2xl border-l-4 border-[#005CFF] dark:border-[#00E1FF]">
            <p className="text-xl font-semibold text-gray-900 dark:text-white italic text-center">
              "Engineered data + optimized systems = powerful outcomes."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
