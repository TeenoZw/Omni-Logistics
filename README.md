# Omni Logistics - React Frontend

A modern Next.js application for Omni Logistics, featuring vehicle tracking and fleet management solutions.

## 🚀 Features

- **Modern Next.js Framework**: Built with Next.js 15, React 19, and TypeScript
- **Responsive Design**: Mobile-first design with beautiful glassmorphism UI
- **Interactive Components**:
  - Dynamic navigation with scroll effects
  - Hero section with animated background and portal login integration
  - Service showcase with interactive cards
  - Advanced pricing calculator with smooth transitions
  - Contact form with real-time validation and API integration
  - Login modal with glass morphism design
  - Smart floating scroll button with adaptive navigation
- **Real-time Features**: Contact form submission via Next.js API routes
- **Performance Optimized**: Fast loading with Turbopack, optimized builds
- **Accessibility**: A11y compliant components with proper ARIA labels

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Custom CSS with CSS variables, glass morphism effects
- **Build Tool**: Next.js with Turbopack for lightning-fast development
- **Deployment**: Netlify with SSR support
- **Backend**: Next.js API Routes
- **Icons**: Font Awesome 6.4.0
- **Fonts**: Inter from Google Fonts

## 🚀 Getting Started

1. **Clone the repository**:

   ```bash
   git clone <repository-url>
   cd omni-logistics
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Start development server**:

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) in your browser.

4. **Build for production**:

   ```bash
   npm run build
   ```

5. **Start production server**:
   ```bash
   npm start
   ```

## 📁 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles with CSS variables
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main page component
│   └── api/
│       └── contact/
│           └── route.ts     # Contact form API endpoint
├── components/              # React components
│   ├── Header.tsx           # Navigation and login modal
│   ├── Hero.tsx             # Hero section with portal integration
│   ├── Services.tsx         # Services showcase
│   ├── Features.tsx         # Features section
│   ├── Pricing.tsx          # Pricing plans
│   ├── Contact.tsx          # Contact form with validation
│   ├── Footer.tsx           # Footer with links
│   ├── Dashboard.tsx        # User dashboard
│   ├── FloatingElements.tsx # Background animations
│   ├── FloatingScrollButton.tsx # Smart scroll navigation
│   └── index.ts             # Component exports

public/
├── assets/                  # Images and static files
├── favicon.ico             # Site favicon
├── manifest.json           # PWA manifest
└── robots.txt              # SEO robots file
```

## 🎨 Key Features

### Interactive Navigation

- **Responsive header** with smooth scroll effects
- **Login modal** with glass morphism design
- **Smart floating scroll button** that adapts based on scroll position

### Modern UI/UX

- **Glass morphism effects** throughout the interface
- **Smooth animations** and transitions
- **Mobile-first responsive design**
- **Custom CSS variables** for consistent theming

### Contact Integration

- **Real-time form validation**
- **Next.js API route** for form submission
- **Success/error notifications** with smooth animations
- **Email integration** support ready

### Performance

- **Next.js 15** with latest React features
- **Turbopack** for fast development builds
- **Optimized images** and assets
- **SEO-friendly** structure

## 🔧 Development Scripts

- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run lint:css` - Run Stylelint for CSS
- `npm run lint:all` - Run all linters

## 🚀 Deployment

This project is optimized for deployment on Netlify with:

- **Static Site Generation (SSG)** support
- **Server-Side Rendering (SSR)** capabilities
- **API Routes** as Netlify Functions
- **Automatic builds** from Git

## 📱 Responsive Design

The application is fully responsive with breakpoints for:

- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌟 Recent Updates

- ✅ **React Migration Complete**: Successfully migrated from SvelteKit to React/Next.js
- ✅ **Modern UI**: Implemented glass morphism design system
- ✅ **Smart Navigation**: Added floating scroll button with adaptive behavior
- ✅ **Portal Integration**: Hero section badge now opens login modal
- ✅ **Contact Flow**: Improved user journey with "Contact Us" buttons
- ✅ **Mobile Optimization**: Enhanced mobile responsiveness
- ✅ **Performance**: Optimized with Next.js 15 and Turbopack

---

**Omni Logistics** - Empowering your fleet, Driving your success! 🚛

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
├── app/
│   ├── layout.tsx           # Root layout component
│   ├── page.tsx             # Main page
│   ├── globals.css          # Global styles
│   └── api/
│       └── contact/
│           └── route.ts     # Contact form API endpoint
├── components/
│   ├── Header.tsx           # Navigation and login modal
│   ├── Hero.tsx             # Hero section
│   ├── Services.tsx         # Services showcase
│   ├── Features.tsx         # Features section
│   ├── Pricing.tsx          # Pricing plans
│   ├── Contact.tsx          # Contact form
│   ├── Footer.tsx           # Footer with links
│   ├── Dashboard.tsx        # User dashboard
│   ├── FloatingElements.tsx # Back-to-top, etc.
│   └── index.ts             # Component exports
└── lib/
    ├── plans.ts             # Shared pricing plans data
    └── contact-config.ts    # Contact configuration

public/
└── assets/                  # Images and static files

.env                         # Environment variables
```

## 🚀 Deployment

This project is configured for Netlify deployment with:

- **Static Site Generation (SSG)** with Next.js
- **API Routes** for backend functionality
- **Automatic builds** from git repository

### Environment Variables

Set these in your `.env` file or Netlify dashboard:

- `SMTP_HOST` - SMTP server hostname
- `SMTP_PORT` - SMTP server port
- `EMAIL_USER` - Email account username
- `EMAIL_PASS` - Email account password
- `ADMIN_EMAIL` - Email recipient for contact form
- `WEBSITE_URL` - Website URL for email templates

## 🎨 Customization

### Styling

- Global styles in `src/app/globals.css`
- Component-specific styles within each `.tsx` file
- CSS custom properties for consistent theming

### Components

All components are modular and can be easily customized:

- Props for configuration
- TypeScript interfaces for type safety
- CSS styling with mobile-first responsive design

## 📧 Contact Form Integration

The contact form includes advanced email functionality with:

### Features

- **Form validation** with real-time feedback
- **Dual email system**:
  - Admin notification emails for new inquiries
  - Professional confirmation emails sent to clients
- **Environment variable configuration** for SMTP settings
- **Error handling** with user-friendly messages
- **Professional email templates** with company branding

### Email Templates

- **Admin Email**: Receives form submissions with full contact details
- **Client Confirmation**: Professional welcome email with:
  - Inquiry details summary
  - Next steps information
  - Company information
  - Contact details for support

### Setup

1. Copy `.env.example` to `.env.local` (development) or `.env` (production)
2. Configure your SMTP settings:
   ```env
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=465
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ADMIN_EMAIL=admin@omnilogistics.co.zw
   WEBSITE_URL=https://omnilogistics.co.zw
   ```
3. For Gmail, use an App Password instead of your regular password
4. Test the form to ensure both emails are delivered properly

### API Endpoint

- **URL**: `/api/contact`
- **Method**: POST
- **Response**: JSON with success/error status and message

## 🔧 Configuration

Key configuration files:

- `next.config.ts` - Next.js configuration
- `tsconfig.json` - TypeScript configuration
- `netlify.toml` - Netlify deployment configuration
- `eslint.config.mjs` - ESLint configuration

## 🐛 Known Issues

- None currently identified - all migration issues have been resolved

## 📝 Migration Notes

This project was successfully migrated from SvelteKit to React/Next.js, maintaining:

- ✅ All original functionality
- ✅ Visual design and animations
- ✅ Responsive behavior
- ✅ Contact form integration
- ✅ SEO optimization
- ✅ Modern React/TypeScript codebase

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

© 2025 Code by H2O. All rights reserved.
