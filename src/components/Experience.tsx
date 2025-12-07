import { Briefcase, CheckCircle } from 'lucide-react';

const experiences = [
  {
    title: 'Data Engineer',
    company: 'Deloitte USI',
    period: '03/2025 – Present',
    sector: 'Healthcare',
    achievements: [
      'Designed & optimized large-scale ETL pipelines using IDMC, IICS & PowerCenter',
      'Built data ingestion using Azure Data Factory, Databricks & Spark',
      'Reduced pipeline execution time by 30%',
      'Implemented SCD Type-1 & Type-2 models for warehouse history tracking',
      'Automated insights with Power BI dashboards',
      'Refactored SQL resulting in performance improvements',
    ],
  },
  {
    title: 'ETL Developer',
    company: 'TCS',
    period: '04/2023 – 03/2025',
    sector: 'Aviation',
    achievements: [
      'Developed & maintained 60+ Informatica ETL mappings',
      'Improved ETL performance by 16%',
      'Ensured 99.9% uptime with Autosys & Control-M scheduling',
      'Achieved 98% data accuracy with validation frameworks',
    ],
  },
  {
    title: 'Software Engineer',
    company: 'Infosys',
    period: '07/2021 – 04/2023',
    sector: 'FMCG',
    achievements: [
      'Migrated 100+ on-prem ETL jobs to IICS, reducing operations cost by 40%',
      'Enhanced Spark-based processing improving performance by 35%',
      'Designed reusable components reducing development effort by 40%',
      'Led data migration achieving 99.5% success rate',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-[#E7EBF0] to-white dark:from-[#082B70] dark:to-[#020B24]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Work <span className="bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] mx-auto mb-12 rounded-full"></div>

        <div className="relative">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF]"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'
              }`}
            >
              <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-[#005CFF] dark:bg-[#00E1FF] rounded-full -ml-2 shadow-[0_0_20px_rgba(0,225,255,0.5)] z-10"></div>

              <div className={`ml-20 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                <div className="bg-white/80 dark:bg-[#082B70]/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-[#00E1FF]/20 shadow-xl hover:shadow-[0_0_40px_rgba(0,225,255,0.3)] hover:scale-105 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-xl">
                      <Briefcase className="w-6 h-6 text-white" />
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
