import { Zap, Cloud, Shield, Rocket, Database } from 'lucide-react';

const impacts = [
  {
    icon: Zap,
    title: 'ETL Performance Optimization',
    description: 'Reduced execution time by 30% using pushdown optimization and SQL tuning.',
  },
  {
    icon: Cloud,
    title: 'Cloud Data Migration',
    description: 'Migrated legacy pipelines to cloud via IICS → 40% cost reduction.',
  },
  {
    icon: Shield,
    title: 'Data Quality Framework',
    description: 'Achieved 98% validation accuracy using automated quality checks.',
  },
  {
    icon: Rocket,
    title: 'Big-Data Performance',
    description: 'Boosted processing speed of 100M+ row datasets using Spark optimization.',
  },
  {
    icon: Database,
    title: 'Warehouse & SCD Engineering',
    description: 'Built scalable warehouse frameworks with SCD-1 / SCD-2 + star/snowflake models.',
  },
];

export default function Impact() {
  return (
    <section id="impact" className="py-20 bg-gradient-to-b from-[#E7EBF0] to-white dark:from-[#082B70] dark:to-[#020B24]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Impact <span className="bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">Highlights</span>
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {impacts.map((impact, index) => (
            <div
              key={index}
              className="group relative bg-white/80 dark:bg-[#082B70]/50 backdrop-blur-xl rounded-3xl p-8 border border-gray-200 dark:border-[#00E1FF]/20 shadow-xl hover:shadow-[0_0_50px_rgba(0,225,255,0.4)] hover:scale-110 hover:-translate-y-2 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#005CFF]/5 to-[#00C1FF]/5 dark:from-[#00E1FF]/5 dark:to-[#005CFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                  <impact.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#005CFF] dark:group-hover:text-[#00E1FF] transition-colors">
                  {impact.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {impact.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
