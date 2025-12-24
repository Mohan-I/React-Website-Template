# CyberVerse - Sci-Fi Portfolio Theme

![CyberVerse Hero](https://via.placeholder.com/1200x400/0a0a1a/00f3ff?text=CYBERVERSE+PORTFOLIO)

A futuristic, cyberpunk-inspired React portfolio template with stunning visual effects, parallax animations, and sci-fi UI elements. Perfect for developers, designers, and creatives looking to showcase their work with a cutting-edge aesthetic.

## ✨ Features

### 🚀 Core Features
- **Cyberpunk Aesthetic**: Neon colors, grid overlays, and holographic effects
- **Parallax Animations**: Interactive mouse-based parallax backgrounds
- **Responsive Design**: Fully responsive across all device sizes
- **Performance Optimized**: Lazy loading, optimized animations, and efficient rendering
- **Modern Tech Stack**: Built with React 18, Vite, and Tailwind CSS

### 🎨 Visual Effects
- **Dynamic Backgrounds**: Stars, nebula clouds, and grid overlays
- **Interactive Elements**: Mouse-responsive animations and hover effects
- **Neon Glows**: Custom CSS effects with vibrant color palettes
- **Holographic Interfaces**: Terminal-style UI components
- **Floating Animations**: Smooth, physics-based element movements

### 📱 Responsive Design
- Mobile-first approach
- Adaptive layouts for all screen sizes
- Touch-friendly interactive elements
- Performance-optimized for mobile devices

## 🛠️ Tech Stack

**Frontend Framework:**
- React 18.2.0
- Vite 5.0.0

**Styling:**
- Tailwind CSS 3.3.0
- Custom CSS animations
- CSS Modules for component styling

**Visualization:**
- Chart.js 4.4.0
- React ChartJS 2 5.2.0
- React Circular Progressbar 2.1.0

**Animation:**
- Framer Motion 10.16.5
- CSS Keyframe animations

**Icons:**
- React Icons 4.11.0

## 📦 Installation

### Prerequisites
- Node.js 16.x or higher
- npm 8.x or higher

### Setup Instructions

1. **Clone the repository:**
```bash
git clone https://github.com/yourusername/cyberverse-portfolio.git
cd cyberverse-portfolio
```

2. **Install dependencies:**
```bash
npm install
```

3. **Install required packages:**
```bash
# Core dependencies (already in package.json)
npm install

# Optional: If you need additional features
npm install framer-motion chart.js react-icons react-circular-progressbar
```

4. **Run the development server:**
```bash
npm run dev
```

5. **Build for production:**
```bash
npm run build
```

6. **Preview production build:**
```bash
npm run preview
```

## 🎯 Project Structure

```
cyberverse-portfolio/
├── src/
│   ├── components/
│   │   ├── Hero.jsx           # Main hero section with parallax effects
│   │   ├── Navigation.jsx     # Sci-fi navigation component
│   │   ├── Projects.jsx       # Portfolio projects showcase
│   │   ├── Skills.jsx         # Skills visualization
│   │   ├── Experience.jsx     # Timeline/chart visualization
│   │   └── Contact.jsx        # Holographic contact form
│   ├── assets/
│   │   ├── images/            # Hero images and graphics
│   │   ├── styles/            # Global styles and variables
│   │   └── icons/             # Custom icons and SVGs
│   ├── App.jsx                # Main application component
│   └── main.jsx               # Application entry point
├── public/
│   └── favicon.ico            # Cyberpunk-themed favicon
├── package.json               # Dependencies and scripts
├── vite.config.js             # Vite configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── postcss.config.js          # PostCSS configuration
└── README.md                  # This file
```

## 🚀 Getting Started

### 1. Customize Your Content
Edit the `Hero.jsx` component to update:
- Your name/title
- Tagline and description
- CTA button text
- Image paths
- Data feed items

### 2. Configure Colors
Modify the CSS variables in `hero.css`:
```css
:root {
  --neon-blue: #00f3ff;
  --neon-purple: #b967ff;
  --neon-pink: #ff00ff;
  --dark-space: #0a0a1a;
  /* Add your custom colors */
}
```

### 3. Add Your Images
1. Place your hero image in `src/assets/images/`
2. Update the import in `Hero.jsx`:
```jsx
import hero_img from '../../assets/images/your-image.webp';
```

### 4. Configure External Links
Update the data feed items in `Hero.jsx`:
```jsx
const dataFeed = [
  {
    title: "Your Project Title",
    description: "Project description",
    image: "path/to/image.png",
    link: "https://your-project-link.com",
    color: "neon-blue"
  }
  // Add more items
];
```

## 🎨 Customization Guide

### Changing Color Scheme
1. Open `hero.css`
2. Modify the `:root` variables
3. For quick color changes, use these presets:

**Cyberpunk (Default):**
```css
--neon-blue: #00f3ff;
--neon-purple: #b967ff;
--neon-pink: #ff00ff;
```

**Matrix Green:**
```css
--neon-blue: #00ff41;
--neon-purple: #00b341;
--neon-pink: #008f41;
```

**Solar Flare:**
```css
--neon-blue: #ff6b00;
--neon-purple: #ff0080;
--neon-pink: #ff0000;
```

### Adjusting Animations
Control animation speeds in `hero.css`:
```css
/* For slower animations */
.float-animation {
  animation: float 8s ease-in-out infinite;
}

/* For faster scan effects */
.sci-fi-btn::before {
  animation: scan 1s linear infinite;
}
```

### Adding New Components
1. Create a new component in `src/components/`
2. Import the sci-fi styles:
```jsx
import './hero.css';
```
3. Use the sci-fi utility classes:
```jsx
<div className="sci-fi-card">
  <h2 className="text-gradient text-cyber">Your Title</h2>
</div>
```

## 🔧 Troubleshooting

### Common Issues & Solutions

**1. Images Not Loading**
```bash
# Check if images are in the correct directory
# Verify image imports are correct
# Add fallback images as shown in Hero.jsx
```

**2. Animation Performance Issues**
```javascript
// Disable heavy effects on mobile
useEffect(() => {
  if (window.innerWidth > 768) {
    // Enable parallax
  }
}, []);
```

**3. CSS Not Applying**
- Check if Tailwind is properly configured
- Verify class names are correct
- Ensure CSS files are imported

**4. Build Errors**
```bash
# Clear node_modules and reinstall
rm -rf node_modules
npm install

# Update dependencies
npm update

# Check for package conflicts
npm ls
```

### Dependency Installation Issues

If you encounter issues with specific packages:

**Chart.js Issues:**
```bash
npm install chart.js react-chartjs-2 --legacy-peer-deps
```

**Framer Motion Issues:**
```bash
npm install framer-motion@latest
```

**General Fixes:**
```bash
# Clear npm cache
npm cache clean --force

# Update npm
npm install -g npm@latest

# Fix vulnerabilities
npm audit fix --force
```

## 📱 Responsive Breakpoints

The template uses these breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

Customize in `tailwind.config.js`:
```javascript
module.exports = {
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  }
}
```

## 🎯 Performance Optimization

### Image Optimization
1. Use WebP format for images
2. Implement lazy loading
3. Add appropriate image dimensions
4. Use responsive images with `srcset`

### Animation Optimization
1. Use `will-change` property for animated elements
2. Implement `requestAnimationFrame` for smooth animations
3. Reduce animation complexity on mobile
4. Use CSS transforms instead of positioning

### Bundle Optimization
1. Code splitting with React.lazy()
2. Tree shaking enabled by Vite
3. Minified production builds
4. Gzip compression

## 🔗 Additional Resources

### Useful Links
- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Chart.js Documentation](https://www.chartjs.org/)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Recommended Tools
- **Image Optimization**: [Squoosh](https://squoosh.app/)
- **Color Scheme**: [Coolors](https://coolors.co/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🌟 Showcase

Want your project featured here? Open an issue with your portfolio link!

---

**Made with ❤️ and neon lights**

*Transform your portfolio into a cyberpunk masterpiece. Star this repo if you find it useful!*
