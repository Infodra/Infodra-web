#  QUICK START GUIDE

## Project: Infodra AI Solutions Website
**Tech Stack**: Next.js 14 | TypeScript | Tailwind CSS
**Status**:  Ready for Development

## Installation & Setup

### 1. Navigate to Project
cd "C:\Users\VijayalakshmiChandra\OneDrive - Infodra Technologies Private Limited\Documents\AppStore\AIsolutions\ai-products-website"

### 2. Install Dependencies (already done)
npm install

### 3. Start Development Server
npm run dev
Then open: http://localhost:3000

### 4. Build for Production
npm run build

### 5. Start Production Server
npm start

### 6. Run Linter
npm run lint

## Available Routes

### Pages
- **/** - Home page with product overview
- **/products** - All products listing
- **/products/ai-video-translator** - AI Video Translator detail
- **/products/ai-user-manual-generation** - User Manual Generator detail
- **/products/ai-document-translator** - Document Translator detail
- **/products/bizlead-database** - BiZlead Database detail
- **/contact** - Contact form and business info

## Project Structure

src/
 app/                 # Next.js App Router pages
    page.tsx        # Home page
    layout.tsx      # Root layout with Navbar & Footer
    products/       # Products pages
    contact/        # Contact page
 components/         # Reusable React components
    Navbar.tsx
    Footer.tsx
    Hero.tsx
    ProductCard.tsx
    FeatureGrid.tsx
    UseCases.tsx
    HowItWorks.tsx
    PricingPreview.tsx
    FAQ.tsx
    CTASection.tsx
 data/
     products.ts     # All product information

## Key Features

 Dynamic Product Pages (from data file)
 SEO Metadata per Page
 Responsive Design (Mobile-First)
 Component-Based Architecture
 TypeScript Support
 Tailwind CSS Styling
 Form Validation
 WhatsApp Integration
 Static Site Generation

## Configuration Files

- **tsconfig.json** - TypeScript configuration
- **tailwind.config.ts** - Tailwind CSS config
- **next.config.ts** - Next.js config
- **package.json** - Dependencies and scripts
- **.eslintrc.json** - ESLint configuration

## Environment Variables

Currently no env vars needed. If adding:
- Create .env.local file
- Add NEXT_PUBLIC_ prefix for client-side vars
- Restart dev server after changes

## Customization Guide

### Add New Product
1. Edit src/data/products.ts
2. Add product object to products[] array
3. Product page auto-generates from slug

### Update Styling
- Edit tailwind.config.ts for theme
- Modify global styles in src/app/globals.css
- Update component classNames

### Add New Page
1. Create folder in src/app/
2. Add page.tsx file
3. Navbar auto-links if needed

### Update Contact Form
- Edit src/app/contact/page.tsx
- Configure email service (SMTP, etc.)
- Add form submission handler

## Deployment

### Vercel (Recommended)
1. Push to GitHub
2. Connect repo to Vercel
3. Deploy automatically

### Other Hosting
- Build: npm run build
- Output: .next/ directory
- Run: npm start
- Port: 3000 (default)

## Documentation Files

- **README.md** - Project overview
- **PROJECT_STRUCTURE.md** - Detailed structure
- **COMPLETE_FILE_REFERENCE.md** - All files explained
- **COMPLETION_SUMMARY.md** - Build status

## Troubleshooting

### Port 3000 already in use
npm run dev -- -p 3001

### Build errors
rm -r .next/
npm run build

### TypeScript errors
npm run build -- --force

### Clear cache
rm -r .next node_modules
npm install
npm run dev

## Support

For issues, check:
1. Console errors (browser DevTools)
2. Terminal output during build
3. TypeScript errors in editor
4. Tailwind class conflicts

---
Happy coding! 
