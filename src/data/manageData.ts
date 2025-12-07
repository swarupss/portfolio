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

// Helper function to calculate years of experience
export const calculateYearsOfExperience = (): number => {
  const startDate = new Date(stats.experienceStartDate);
  const currentDate = new Date();
  const years = (currentDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
  return parseFloat(years.toFixed(1));
};
