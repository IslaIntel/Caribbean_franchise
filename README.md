# Caribbean Franchise, Inc. - Official Website

A modern, fully-featured corporate website for **Caribbean Franchise, Inc.**, Puerto Rico's leading multi-unit franchise operator managing 24+ quick-service restaurant locations across the island.

![Caribbean Franchise](https://img.shields.io/badge/Caribbean-Franchise-14B8A6?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-black?style=for-the-badge&logo=framer)

## Features

### **Design & User Experience**
- **Premium Modern Design**: Polished, professional aesthetic with teal-themed Caribbean branding
- **Smooth Animations**: Framer Motion powered micro-interactions and scroll-triggered animations
- **Fully Responsive**: Mobile-first design that looks perfect on all devices
- **Glass Morphism Effects**: Modern UI elements with backdrop blur and transparency
- **Custom Animations**: Fade-ins, slide effects, hover states, and staggered animations

### **Complete Page System**
- **Homepage**: Feature-rich landing page with hero, brands, services, strengths, and contact sections
- **Empleos (Jobs)**: Full job application system with video testimonials, benefits, and application form
- **Contáctanos**: Professional contact page with form, company information, and direct communication options
- **Seamless Navigation**: Unified user experience with consistent navigation across all pages

### **Business Features**
- **4 Restaurant Brands**: Subway, Açai Express, Red Mango, and Fueguito/Burritos with detailed showcases
- **Comprehensive Services**: 7 core business services from franchise operations to marketing
- **Company Culture**: Employee testimonials, benefits, and company values presentation
- **Professional Contact System**: Multiple contact methods with extension support and professional imagery

### **Technical Excellence**
- **Component Architecture**: Modular, reusable components for maintainability
- **TypeScript**: Full type safety and developer experience
- **SEO Optimized**: Complete meta tags, structured data, and search engine optimization
- **Performance Optimized**: Next.js Image optimization and efficient loading
- **Data-Driven**: Centralized JSON data source for easy content management

## Tech Stack

### **Core Framework**
- **Next.js 14** - React framework with App Router, Image optimization, and SSR
- **React 18** - Latest React features with hooks and concurrent rendering
- **TypeScript 5+** - Type-safe development with full IntelliSense

### **Styling & Animation**
- **Tailwind CSS 3.4** - Utility-first CSS with custom teal color palette
- **Framer Motion** - Production-ready motion library for React
- **Custom CSS Animations** - Keyframe animations for enhanced user experience

### **Development Tools**
- **ESLint** - Code quality and consistency
- **PostCSS & Autoprefixer** - CSS processing and browser compatibility
- **Next.js Image** - Optimized image loading and performance

## Getting Started

### Prerequisites
- **Node.js** 18+ 
- **npm** or **yarn** package manager

### Installation

```bash
# Clone the repository
git clone [repository-url]
cd caribbean_franchise

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the website.

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## Project Architecture

```
caribbean_franchise/
├── pages/
│   ├── index.tsx              # Homepage with all sections
│   ├── empleos.tsx            # Jobs page with application system
│   ├── contactos.tsx          # Contact page with forms
│   └── _app.tsx               # App configuration
├── components/
│   ├── Navigation.tsx         # Global navigation with mobile menu
│   ├── HeroSection.tsx        # Hero section with CTA
│   ├── BrandsSection.tsx      # Restaurant brands showcase
│   ├── AboutSection.tsx       # Company information
│   ├── ServicesSection.tsx    # Business services
│   ├── StrengthsSection.tsx   # Company strengths
│   └── Footer.tsx             # Site footer with social links
├── data/
│   └── business-profile.json  # Centralized company data
├── styles/
│   └── globals.css            # Global styles and animations
├── public/images/             # Logo assets and brand images
├── tailwind.config.js         # Tailwind customization
├── next.config.js             # Next.js configuration
└── tsconfig.json              # TypeScript configuration
```

## Business Information

### **Restaurant Portfolio**
- **Subway** - International sandwich franchise (Franquicia)
- **Açai Express** - Healthy açai bowl chain (Franquicia)  
- **Red Mango** - Frozen yogurt and smoothies (Franquicia)
- **Fueguito / Burritos** - Mexican food franchise (Franquicia)

### **Core Services**
1. **Franchise Operations** - Complete franchise management and support
2. **Talent Acquisition** - Professional recruitment and HR services  
3. **Marketing & Promotions** - Brand marketing and promotional campaigns
4. **Financial Advisory** - Business financial planning and advisory
5. **Operational Excellence** - Process optimization and quality control
6. **Training & Development** - Employee training and skill development
7. **Strategic Consulting** - Business strategy and growth planning

### **Company Strengths**
- **24+ Years Experience** - Since 1999 in franchise management
- **Local Expertise** - Deep understanding of Puerto Rican market
- **Proven Track Record** - Successfully operating multiple franchise brands
- **Employee-Centered Culture** - Focus on team development and growth

## Design System

### **Color Palette**
- **Primary Teal**: `#14B8A6` (teal-600) - Caribbean ocean inspiration
- **Supporting Colors**: Full teal palette from teal-50 to teal-900
- **Accent Colors**: Warm gradients and professional grays
- **Background**: Clean whites with subtle patterns

### **Typography**
- **Headings**: Bold, large-scale typography with gradient effects
- **Body Text**: Optimized readability with proper line spacing
- **Interactive Elements**: Clear call-to-action styling

### **Animation Philosophy**
- **Subtle Entrance**: Fade-in animations on scroll
- **Micro-interactions**: Hover and tap feedback
- **Performance First**: Hardware-accelerated animations
- **Accessibility**: Respects user motion preferences

## Features Breakdown

### **Homepage Sections**
1. **Hero Section** - Compelling intro with company stats and CTA
2. **Brands Section** - Interactive brand cards with logos and categories  
3. **About Section** - Company history, mission, and headquarters info
4. **Services Section** - Detailed service offerings with icons
5. **Strengths Section** - Key differentiators and competitive advantages
6. **Footer** - Contact info, social links, and navigation

### **Jobs Page (Empleos)**
- **Video Testimonials** - Employee success stories with custom video player
- **Application Form** - Professional job application with validation
- **Benefits Showcase** - Employee benefits and company culture
- **Brand Integration** - All restaurant brands represented

### **Contact Page (Contáctanos)**
- **Multiple Contact Methods** - Phone, email, and form options
- **Location Information** - Complete company address and details
- **Professional Imagery** - Custom contact representative images
- **Extension Support** - HR department extension information

## Customization Guide

### **Content Updates**
All content is managed through `data/business-profile.json`:

```json
{
  "company": { /* Company information */ },
  "brands": [ /* Restaurant brands */ ],
  "services": [ /* Business services */ ],
  "culture": { /* Company culture */ },
  "milestones": [ /* Company timeline */ ],
  "social": { /* Social media links */ }
}
```

### **Styling Customization**
- **Colors**: Update `tailwind.config.js` color palette
- **Animations**: Modify `styles/globals.css` keyframes
- **Components**: Each component is modular and easily customizable

### **Adding New Pages**
1. Create new file in `pages/` directory
2. Import and use existing components
3. Update navigation in `components/Navigation.tsx`
4. Add page data to `business-profile.json`

## Deployment Options

### **Recommended Platforms**
- **Vercel** (Optimal Next.js deployment)
- **Netlify** (Static deployment)
- **AWS/GCP/Azure** (Enterprise deployment)

### **Build Commands**
```bash
npm run build    # Generate production build
npm run start    # Start production server
```

### **Environment Variables**
No environment variables required - fully static deployment ready.

## Performance

- **Core Web Vitals** - Optimized for Google's performance metrics
- **Image Optimization** - Next.js automatic image optimization
- **Code Splitting** - Automatic page-based code splitting
- **Compression** - Built-in compression and minification

## Support & Contact

**Caribbean Franchise, Inc.**
- **Email**: info@caribbeanfranchisepr.com
- **Location**: San Juan, Puerto Rico  
- **Phone**: 787-282-0101 Ext.219 Recursos Humanos
- **LinkedIn**: [Caribbean Franchise Inc](https://www.linkedin.com/company/caribbean-franchise-inc)
- **Facebook**: [Caribbean Franchise](https://www.facebook.com/caribbeanfranchise)

## Contributing

This is a corporate website for Caribbean Franchise, Inc. For feature requests or issues, please contact the development team.

---

<div align="center">

**Built with ❤️ in Puerto Rico**

*Modern web development meets Caribbean business excellence*

</div> 