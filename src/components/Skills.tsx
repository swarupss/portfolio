const skillsData = [
  { category: 'ETL Tools', skills: 'Informatica PowerCenter, IDMC/IICS, Apache NiFi' },
  { category: 'Cloud', skills: 'Azure Data Factory, Azure Databricks' },
  { category: 'Big Data', skills: 'Spark, Hadoop, PySpark, HDFS' },
  { category: 'Programming', skills: 'Python, SQL, PL/SQL, Java' },
  { category: 'Databases', skills: 'Oracle, MySQL, SQL Server' },
  { category: 'Scheduling', skills: 'Autosys, Control-M' },
  { category: 'Data Modeling', skills: 'Star & Snowflake Schema, SCD' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-white dark:bg-[#020B24]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Technical <span className="bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] bg-clip-text text-transparent">Skills</span>
        </h2>

        <div className="h-1 w-24 bg-gradient-to-r from-[#005CFF] to-[#00C1FF] dark:from-[#00E1FF] dark:to-[#005CFF] mx-auto mb-12 rounded-full"></div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((item, index) => (
            <div
              key={index}
              className="group bg-white/80 dark:bg-[#082B70]/50 backdrop-blur-xl rounded-3xl p-6 border border-gray-200 dark:border-[#00E1FF]/20 shadow-lg hover:shadow-[0_0_40px_rgba(0,225,255,0.4)] hover:scale-105 hover:border-[#00E1FF] transition-all duration-500"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-[#005CFF] dark:group-hover:text-[#00E1FF] transition-colors">
                {item.category}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.skills}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
