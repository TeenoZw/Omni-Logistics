# Omni Logistics - Fleet Management Platform

A modern, responsive frontend for fleet management and vehicle tracking services.

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with responsive layout
- **Fleet Management**: Comprehensive vehicle tracking and monitoring
- **Pricing Plans**: Flexible individual and business solutions
- **Contact Forms**: Integrated Netlify Forms for lead generation
- **Performance Optimized**: Fast loading with optimized assets

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Icons**: Font Awesome 6
- **Fonts**: Google Fonts (Inter)
- **Deployment**: Netlify

## 📦 Project Structure

```
omni-logistics-frontend/
├── public/
│   ├── index.html          # Main HTML file
│   ├── css/
│   │   └── style.css       # Main stylesheet
│   ├── js/
│   │   └── main.js         # Main JavaScript
│   ├── assets/
│   │   ├── logo.PNG
│   │   ├── background.jpg
│   │   └── world-map background.jpg
│   └── _redirects          # Netlify redirects
├── netlify.toml            # Netlify configuration
├── package.json            # Project metadata
└── README.md              # This file
```

## 🚀 Deployment to Netlify

### Option 1: Netlify CLI (Recommended)

1. **Install Netlify CLI**:

   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**:

   ```bash
   netlify login
   ```

3. **Deploy from project root**:
   ```bash
   cd omni-logistics-frontend
   netlify deploy --prod --dir=public
   ```

### Option 2: Git-based Deployment

1. **Push to Git repository**:

   ```bash
   git add .
   git commit -m "Ready for Netlify deployment"
   git push origin main
   ```

2. **Connect to Netlify**:
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "New site from Git"
   - Connect your repository
   - Set build settings:
     - **Build command**: `echo 'Static site - no build needed'`
     - **Publish directory**: `public`

### Option 3: Drag & Drop

1. Build the site (if needed): `npm run build`
2. Drag the `public` folder to Netlify dashboard

## ⚙️ Configuration

### Netlify Forms

The contact form is configured to work with Netlify Forms automatically. No additional setup required.

### Environment Variables

Currently no environment variables are needed for this static site.

### Custom Domain

To use a custom domain:

1. Go to your Netlify site settings
2. Navigate to "Domain management"
3. Add your custom domain
4. Configure DNS records as instructed

## 🔧 Local Development

1. **Using http-server**:

   ```bash
   npm install -g http-server
   cd public
   http-server -p 8080
   ```

2. **Using live-server** (with auto-reload):

   ```bash
   npm install -g live-server
   cd public
   live-server --port=8080
   ```

3. **Using VS Code Live Server extension**:
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎯 Performance Features

- **Optimized Images**: Compressed assets for faster loading
- **CSS Optimization**: Minified and optimized styles
- **Caching Headers**: Configured for optimal browser caching
- **Security Headers**: CSP and security headers configured

## 📞 Contact Form Features

- **Netlify Forms Integration**: Automatic form handling
- **Bot Protection**: Honeypot field for spam prevention
- **Validation**: Client-side and server-side validation
- **Responsive Design**: Works on all devices

## 🔐 Security

- Content Security Policy (CSP) headers
- XSS protection
- Clickjacking protection
- MIME type sniffing protection

## 📈 Analytics

To add analytics, add your tracking code to the `<head>` section of `index.html`.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:

- Email: support@omnilogistics.com
- Documentation: [Link to docs]
- Issues: [GitHub Issues](https://github.com/yourusername/omni-logistics-frontend/issues)

## Current Development Phase: Phase 2

**Complete Landing Page with All Sections** - ✅ **COMPLETED**

### What's Implemented

- ✅ **Enhanced Navigation Bar** with glassy effects

  - Company logo with proper sizing and brand text
  - Full navigation menu with smooth scrolling
  - Login button prominently positioned (top-right)
  - Dark/Light mode toggle placeholder
  - Mobile-responsive hamburger menu

- ✅ **Hero Section** with premium design

  - Compelling headline with brand highlighting
  - Engaging subheading and interactive call-to-action buttons
  - Hero image integration with proper assets
  - Floating decorative elements with glassy effects
  - Mobile-optimized layout

- ✅ **Services Section**

  - Individual Vehicle Tracking service showcase
  - Fleet Management solutions
  - Enterprise Solutions with custom integrations
  - Installation & Support services
  - Interactive service cards with hover effects

- ✅ **Features Section**

  - Comprehensive feature grid with 6 key features
  - Multi-Hub Management showcase with visual dashboard
  - Real-time tracking, security alerts, analytics
  - Mobile app and maintenance tracking highlights
  - Responsive feature layout

- ✅ **Pricing Section**

  - Interactive toggle between Individual and Company plans
  - Complete tier structure matching blueprint specifications
  - Individual: Basic ($29), Standard ($49), Premium ($79)
  - Company: Gold ($199), Diamond ($399), Platinum ($799)
  - Feature comparison with tier-specific capabilities
  - Popular plan highlighting and call-to-action buttons

- ✅ **About Section**

  - Company mission and vision statements
  - Key statistics and achievements
  - Professional team image integration
  - Trust indicators and credibility elements

- ✅ **Contact Section**

  - Complete contact information
  - Interactive contact form with validation
  - Business hours and support information
  - Professional form styling with glassy effects

- ✅ **Footer**
  - Comprehensive site navigation
  - Company information and social links
  - Legal and support links
  - Professional layout with proper branding

### Interactive Features

- **Pricing Toggle**: Dynamic switching between Individual and Company pricing plans
- **Contact Form**: Fully functional contact form with validation and submission feedback
- **Smooth Scrolling**: Enhanced navigation with smooth scrolling to sections
- **Button Interactions**: Interactive call-to-action buttons that navigate to relevant sections
- **Hover Effects**: Sophisticated hover animations on cards and interactive elements
- **Mobile Menu**: Animated hamburger menu with smooth transitions

## Project Structure

```
omni-logistics-frontend/
├── public/
│   └── index.html          # Main HTML structure
├── src/
│   ├── css/
│   │   └── style.css       # Complete styling with glassy effects
│   └── js/
│       └── main.js         # Navigation & animation logic
└── README.md              # This documentation
```

## Design Specifications Implemented

### Color Palette

- **Primary Blue**: #007BFF (Omni Blue) with gradients
- **Accent White**: Clean whites for contrast and highlights
- **Dark Blue Background**: Linear gradients from #000080 to #003366

### Typography

- **Font Family**: SF Pro Display, fallback to system fonts
- **Hero Title**: 3.5rem, bold weight, gradient text effects
- **Navigation**: Modern, clean typography with proper hierarchy

### Glassy Effects

- **Backdrop Filter**: 10px blur for authentic glass appearance
- **Transparency**: Subtle rgba backgrounds with appropriate opacity
- **Borders**: 1px solid with transparent white for definition
- **Shadows**: Layered box-shadows for depth

## How to View the Landing Page

### Option 1: Direct File Opening

1. Navigate to the project directory
2. Open `public/index.html` in your web browser
3. The page will load with all styles and functionality

### Option 2: Local Server (Recommended)

```bash
# Navigate to project directory
cd "/Users/tinotendamutami/Omni Logistics/omni-logistics-frontend"

# Start a simple HTTP server (Python 3)
python -m http.server 8000

# Or using Node.js (if installed)
npx serve .

# Or using PHP (if installed)
php -S localhost:8000
```

Then open: `http://localhost:8000/public/` in your browser

### Option 3: VS Code Live Server Extension

1. Install "Live Server" extension in VS Code
2. Right-click on `public/index.html`
3. Select "Open with Live Server"

## Current Features

### Navigation

- **Fixed Header**: Stays visible while scrolling with dynamic background
- **Smooth Scrolling**: Clean navigation to page sections
- **Mobile Menu**: Animated hamburger menu for mobile devices
- **Active States**: Visual feedback for current page/section

### Hero Section

- **Dynamic Animations**: Staggered fade-in effects
- **Responsive Layout**: Adapts seamlessly to different screen sizes
- **Call-to-Action**: Prominent buttons for user engagement
- **Visual Hierarchy**: Clear information architecture

### Interactive Elements

- **Hover Effects**: Smooth transitions on all interactive elements
- **Button Animations**: Elevation and shadow effects
- **Theme Toggle**: Prepared for light/dark mode switching

## Next Development Phases

### Phase 2: Content Sections (Planned)

- Services showcase section
- Features grid with interactive cards
- Pricing tiers with comparison tables
- About Us with team information
- Contact form with validation

### Phase 3: Advanced Animations (Planned)

- Parallax scrolling effects
- Dynamic scrolling showcases
- GSAP integration for complex animations
- Micro-interactions and transitions

### Phase 4: Dark/Light Mode Implementation (Planned)

- Complete theme switching functionality
- CSS custom properties integration
- Theme persistence with localStorage
- Smooth transition animations

## Technical Notes

### Browser Compatibility

- **Modern Browsers**: Full support for Chrome, Firefox, Safari, Edge
- **Backdrop Filter**: Graceful degradation for older browsers
- **CSS Grid/Flexbox**: Progressive enhancement approach

### Performance Considerations

- **Optimized CSS**: Efficient selectors and minimal reflows
- **Debounced Events**: Performance-optimized scroll and resize handlers
- **Lazy Loading**: Prepared for future image optimization

### Code Quality

- **Semantic HTML**: Proper document structure and accessibility
- **Modular CSS**: Organized with clear sections and comments
- **Clean JavaScript**: Well-documented with placeholder implementations

## Alignment with Design Specifications

This implementation strictly follows the UI/UX Design & Prototyping Specification:

✅ **Blue and White Accents**: Implemented throughout the design  
✅ **Glassy Elements**: Consistent iOS26-inspired aesthetic  
✅ **Mobile Responsiveness**: Fully adaptive across all devices  
✅ **Modern Animations**: Foundation laid for future enhancements  
✅ **Professional Brand Identity**: Cohesive visual language established

## Support & Development

For questions or contributions to this project, please refer to the complete project documentation and design specifications.

**Last Updated**: June 18, 2025  
**Phase**: 1 - Hero Section & Navigation (Completed)  
**Next Phase**: Content Sections Development
