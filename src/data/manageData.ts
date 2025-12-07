// Centralized data management for portfolio
// Edit these values to update your portfolio information

import profileImage from '../DPsss.png';

// Personal Information
export const personalInfo = {
  name: {
    first: 'Swarup Sekhar',
    last: 'Samal',
    full: 'Swarup Sekhar Samal',
  },
  title: 'Data Engineer',
  description: 'I design and build scalable data pipelines, optimize ETL workflows, and transform raw data into meaningful business intelligence.',
  profileImage: profileImage,
};

// Experience & Stats
export const stats = {
  experienceStartDate: '2021-07-01', // Format: YYYY-MM-DD
  dataProcessed: 50, // in TB
  etlWorkflows: 60,
};

// Contact Information
export const contactInfo = {
  email: 'workwithswarup.ss@gmail.com',
  phone: '+91-9937216549',
  linkedin: 'https://www.linkedin.com/in/swarupsamal/',
  github: 'https://github.com/swarupss',
  location: 'India',
};

// Links
export const links = {
  cvLink: 'https://drive.google.com/file/d/1-Q4FGMv68Sw6g5CxpykacMdstpl-WeUQ/view?usp=drive_link',
};

// About Section
export const aboutData = {
  paragraphs: [
    'I am a results-driven Data Engineer with over 4.3 years of experience designing scalable data pipelines, optimizing ETL workflows, and implementing cloud-based data transformation solutions across diverse sectors including healthcare, aviation, and FMCG. With expertise in Informatica PowerCenter, IICS, Azure Data Factory, Azure Databricks, Apache Spark, SQL, Hadoop, and advanced warehousing models, I specialize in building reliable, high-performance data systems that drive impactful business decisions.',
    'I am passionate about automation, performance engineering, scalable architecture, and enabling organizations to unlock the true potential of their data.'
  ],
  specialties: [
    {
      title: 'ETL Expert',
      description: 'Building robust data pipelines',
    },
    {
      title: 'Cloud Native',
      description: 'Azure & Big Data solutions',
    },
    {
      title: 'Performance',
      description: 'Optimization & automation',
    },
  ],
  quote: 'Engineered data + optimized systems = powerful outcomes.',
};

// Skills Section
export const skillsData = [
  {
    category: 'ETL Tools',
    technologies: [
      { name: 'Informatica PowerCenter', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d8/InformaticaLogo.png' },
      { name: 'IDMC/IICS', logo: 'https://upload.wikimedia.org/wikipedia/en/d/d8/InformaticaLogo.png' },
      { name: 'Apache NiFi', logo: 'https://icon-icons.com/download-file?file=https%3A%2F%2Fimages.icon-icons.com%2F2699%2FPNG%2F256%2Fapache_nifi_logo_icon_167863.png&id=167863&pack_or_individual=pack' },
    ]
  },
  {
    category: 'Cloud',
    technologies: [
      { name: 'Azure Data Factory', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLDCmAjWtz7OVdn3oK65AxNgNUyC94oaQOyA&s' },
      { name: 'Azure Databricks', logo: 'https://w7.pngwing.com/pngs/769/465/png-transparent-databricks-full-logo-tech-companies-thumbnail.png' },
      { name: 'Microsoft Azure', logo: 'https://www.svgrepo.com/show/448274/azure.svg' },
    ]
  },
  {
    category: 'Big Data',
    technologies: [
      { name: 'Apache Spark', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Apache_Spark_logo.svg/1280px-Apache_Spark_logo.svg.png' },
      { name: 'Hadoop', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Hadoop_logo.svg/1200px-Hadoop_logo.svg.png' },
      { name: 'PySpark', logo: 'https://miro.medium.com/v2/resize:fit:1400/0*GXffMouG6FlOV60X.jpeg' },
      { name: 'HDFS', logo: 'https://hadoop.apache.org/docs/r2.7.0/hadoop-project-dist/hadoop-hdfs/images/hdfs-logo.jpg' },
    ]
  },
  {
    category: 'Programming',
    technologies: [
      { name: 'Python', logo: 'https://www.svgrepo.com/show/452091/python.svg' },
      { name: 'SQL', logo: 'https://www.svgrepo.com/show/331760/sql-database-generic.svg' },
      { name: 'PL/SQL', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7QxpMsqD-LrpQPFv3FJJsftTZX1pxzW5gUw&s' },
      { name: 'Java', logo: 'https://www.svgrepo.com/show/452234/java.svg' },
    ]
  },
  {
    category: 'Databases',
    technologies: [
      { name: 'Oracle', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFcwTJmmxVBKmElB69dn8MwTej4VaPSiDsow&s' },
      { name: 'MySQL', logo: 'https://www.svgrepo.com/show/303251/mysql-logo.svg' },
      { name: 'SQL Server', logo: 'https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg' },
      { name: 'PostgreSQL', logo: 'https://www.svgrepo.com/show/354200/postgresql.svg' },
    ]
  },
  {
    category: 'Scheduling',
    technologies: [
      { name: 'Autosys', logo: 'https://www.aispl.co/images/logo.png' },
      { name: 'Control-M', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3VjGJRoBo0BbNguX4pKJvJhh8azXc16kAQ&s' },
      { name: 'Apache Airflow', logo: 'https://www.svgrepo.com/show/353380/airflow.svg' },
    ]
  },
  {
    category: 'Data Modeling',
    technologies: [
      { name: 'Star Schema', logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKYZgDOOJKvJW9BT5xK3rKrG5q5qHUfHiBA&s' },
      { name: 'Snowflake Schema', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Snowflake_Logo.svg/1280px-Snowflake_Logo.svg.png' },
      { name: 'SCD Type-1', logo: 'https://static.vecteezy.com/system/resources/previews/019/903/792/non_2x/scd-letter-logo-design-on-white-background-scd-creative-circle-letter-logo-concept-scd-letter-design-vector.jpg' },
      { name: 'SCD Type-2', logo: 'https://images.seeklogo.com/logo-png/61/1/scd-information-technologies-logo-png_seeklogo-617852.png' },
    ]
  },
];

// Work Experience
export const experienceData = [
  {
    title: 'Data Engineer',
    company: 'Deloitte USI',
    companyLogo: 'https://cdn.worldvectorlogo.com/logos/deloitte-1.svg',
    period: '03/2025 – Present',
    startDate: '2025-03',
    endDate: 'Present',
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
    companyLogo: 'https://cdn.worldvectorlogo.com/logos/tata-consultancy-services-1.svg',
    period: '04/2023 – 03/2025',
    startDate: '2023-04',
    endDate: '2025-03',
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
    companyLogo: 'https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg',
    period: '07/2021 – 04/2023',
    startDate: '2021-07',
    endDate: '2023-04',
    sector: 'FMCG',
    achievements: [
      'Migrated 100+ on-prem ETL jobs to IICS, reducing operations cost by 40%',
      'Enhanced Spark-based processing improving performance by 35%',
      'Designed reusable components reducing development effort by 40%',
      'Led data migration achieving 99.5% success rate',
    ],
  },
];

// Impact Highlights
export const impactData = [
  {
    title: 'ETL Performance Optimization',
    description: 'Reduced execution time by 30% using pushdown optimization and SQL tuning.',
  },
  {
    title: 'Cloud Data Migration',
    description: 'Migrated legacy pipelines to cloud via IICS → 40% cost reduction.',
  },
  {
    title: 'Data Quality Framework',
    description: 'Achieved 98% validation accuracy using automated quality checks.',
  },
  {
    title: 'Big-Data Performance',
    description: 'Boosted processing speed of 100M+ row datasets using Spark optimization.',
  },
  {
    title: 'Warehouse & SCD Engineering',
    description: 'Built scalable warehouse frameworks with SCD-1 / SCD-2 + star/snowflake models.',
  },
];

// Education
export const educationData = [
  {
    year: '2013',
    institute: 'Sri Aurobindo Integral Center of Education',
    degree: '10th',
  },
  {
    year: '2015',
    institute: 'Jatiya Kabi Bira Kishore Govt. Junior College',
    degree: '12th',
  },
  {
    year: '2015–2019',
    institute: 'Government College of Engineering, Keonjhar',
    degree: 'B.Tech — Electrical Engineering',
  },
];

// Achievements
export const achievementsData = [
  {
    title: 'Infosys Certified Informatica Developer',
  },
  {
    title: 'Nominated for Spot Award for IICS/IDMC optimization',
  },
  {
    title: 'Recognized for advancing data quality frameworks',
  },
];

// Helper function to calculate years of experience
export const calculateYearsOfExperience = (): number => {
  const startDate = new Date(stats.experienceStartDate);
  const currentDate = new Date();
  const years = (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return parseFloat(years.toFixed(1));
};
