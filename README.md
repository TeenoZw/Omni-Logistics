# Omni Logistics - Svelte Frontend

A modern SvelteKit application for Omni Logistics, featuring vehicle tracking and fleet management solutions.

## 🚀 Features

- **Modern SvelteKit Framework**: Built with SvelteKit, Vite, and TypeScript
- **Responsive Design**: Mobile-first design with beautiful glassmorphism UI
- **Interactive Components**: 
  - Dynamic navigation with scroll effects
  - Hero section with animated background
  - Service showcase with interactive cards
  - Advanced pricing calculator
  - Contact form with Netlify Functions integration
  - Login modal and dashboard
- **Real-time Features**: Contact form submission via Netlify Functions
- **Performance Optimized**: Fast loading, optimized builds
- **Accessibility**: A11y compliant components

## 🛠️ Tech Stack

- **Frontend**: SvelteKit, TypeScript, SCSS
- **Build Tool**: Vite
- **Deployment**: Netlify with SSR
- **Backend**: Netlify Functions
- **Styling**: SCSS with CSS custom properties
- **Icons**: Font Awesome

## 🏃‍♂️ Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

4. **Preview production build**:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
src/
├── lib/
│   └── components/           # Svelte components
│       ├── Header.svelte     # Navigation and login modal
│       ├── Hero.svelte       # Hero section
│       ├── Services.svelte   # Services showcase
│       ├── Features.svelte   # Features section
│       ├── Pricing.svelte    # Pricing plans
│       ├── Contact.svelte    # Contact form
│       ├── Footer.svelte     # Footer with links
│       ├── Dashboard.svelte  # User dashboard
│       └── FloatingElements.svelte # Back-to-top, etc.
├── routes/
│   ├── +layout.svelte       # Layout template
│   └── +page.svelte         # Main page
├── app.html                 # HTML template
└── app.scss                 # Global styles

static/
└── assets/                  # Images and static files

netlify/
└── functions/               # Serverless functions
    ├── contact-form.js      # Contact form handler
    ├── lead-scoring.js      # Lead scoring logic
    └── quote-calculator.js  # Quote calculation
```

## 🚀 Deployment

This project is configured for Netlify deployment with:

- **Static Site Generation (SSG)** with SvelteKit adapter-netlify
- **Netlify Functions** for backend functionality
- **Automatic builds** from git repository

### Environment Variables

Set these in your Netlify dashboard:

- `EMAIL_SERVICE_API_KEY` - For email functionality
- `CONTACT_FORM_RECIPIENT` - Email recipient for contact form

## 🎨 Customization

### Styling
- Global styles in `src/app.scss`
- Component-specific styles within each `.svelte` file
- CSS custom properties for consistent theming

### Components
All components are modular and can be easily customized:
- Props for configuration
- Event dispatchers for parent communication
- SCSS styling with mobile-first responsive design

## 📧 Contact Form Integration

The contact form integrates with Netlify Functions for:
- Form validation
- Email delivery
- Lead scoring
- Quote calculation

## 🔧 Configuration

Key configuration files:
- `vite.config.ts` - Vite configuration
- `svelte.config.js` - SvelteKit configuration
- `netlify.toml` - Netlify deployment configuration

## 🐛 Known Issues

- Build warnings for accessibility (href="#" attributes) - these are intentional for demo purposes
- SASS deprecation warnings - will be resolved in future Dart Sass updates

## 📝 Migration Notes

This project was migrated from a vanilla HTML/CSS/JS project to SvelteKit, maintaining:
- ✅ All original functionality
- ✅ Visual design and animations
- ✅ Responsive behavior
- ✅ Netlify Functions integration
- ✅ SEO optimization

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2025 Code by H2O. All rights reserved.

