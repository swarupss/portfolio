# 🚀 Swarup Sekhar Samal - Data Engineer Portfolio

A modern, responsive portfolio website showcasing data engineering expertise, built with React, TypeScript, and Tailwind CSS.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![React](https://img.shields.io/badge/React-18.3.1-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Vite](https://img.shields.io/badge/Vite-Latest-purple)

## ✨ Features

- 🎨 **Modern UI/UX** - Clean, professional design with smooth animations
- 🌓 **Dark/Light Mode** - Seamless theme switching
- 📱 **Fully Responsive** - Optimized for all devices (mobile, tablet, desktop)
- ⚡ **Fast Performance** - Built with Vite for lightning-fast load times
- 📧 **Contact Form** - Integrated with EmailJS for direct messaging
- 🎯 **Dynamic Stats** - Auto-calculating years of experience from start date
- 🔄 **Centralized Data** - Easy content management through `manageData.ts`

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.3.1
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Email Service**: EmailJS
- **Deployment**: Vercel Ready

## 📂 Project Structure

```
portfolio/
├── src/
│   ├── components/         # React components
│   │   ├── Hero.tsx       # Landing section
│   │   ├── About.tsx      # About section
│   │   ├── Experience.tsx # Work experience
│   │   ├── Skills.tsx     # Technical skills
│   │   ├── Education.tsx  # Educational background
│   │   ├── Achievements.tsx # Certifications & awards
│   │   ├── Impact.tsx     # Project impacts
│   │   ├── Contact.tsx    # Contact form
│   │   ├── Navigation.tsx # Navigation bar
│   │   └── Footer.tsx     # Footer section
│   ├── context/           # React context
│   │   └── ThemeContext.tsx # Dark/Light theme
│   ├── data/              # Centralized data
│   │   └── manageData.ts  # Portfolio data management
│   ├── App.tsx            # Main app component
│   ├── main.tsx           # App entry point
│   └── index.css          # Global styles
├── public/                # Static assets
├── package.json           # Dependencies
└── vite.config.ts         # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/swarupss/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🔧 Configuration

### Update Portfolio Data

Edit `src/data/manageData.ts` to customize:

```typescript
// Personal Information
export const personalInfo = {
  name: { first: 'Your', last: 'Name', full: 'Your Full Name' },
  title: 'Your Title',
  description: 'Your description...',
  profileImage: profileImage,
};

// Experience & Stats
export const stats = {
  experienceStartDate: '2021-07-01', // Your start date
  dataProcessed: 50, // TB of data processed
  etlWorkflows: 60,  // Number of ETL workflows
};

// Contact Information
export const contactInfo = {
  email: 'your.email@example.com',
  phone: '+91-1234567890',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
};

// Links
export const links = {
  cvLink: 'your-cv-link-here',
};
```

### EmailJS Setup

Update EmailJS credentials in `src/components/Contact.tsx`:

```typescript
await emailjs.send(
  'your_service_id',
  'your_template_id',
  { /* template params */ },
  'your_public_key'
);
```

## 📦 Build for Production

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Click Deploy

Or use Vercel CLI:
```bash
npm i -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the 'dist' folder to netlify.com/drop
```

## 📄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🎨 Customization

### Theme Colors

Edit `tailwind.config.js` to customize colors:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#005CFF',
      secondary: '#00E1FF',
      // Add your custom colors
    }
  }
}
```

### Add New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/App.tsx`
3. Update navigation in `src/components/Navigation.tsx`

## 🐛 Troubleshooting

**Issue: Module not found errors**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Issue: Build fails**
```bash
npm run typecheck
npm run lint
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📧 Contact

**Swarup Sekhar Samal**
- Email: workwithswarup.ss@gmail.com
- LinkedIn: [swarupsamal](https://linkedin.com/in/swarupsamal)
- GitHub: [swarupss](https://github.com/swarupss)

---

**Developed By Anjan** 💙

*Built with ❤️ using React, TypeScript, and Tailwind CSS*
