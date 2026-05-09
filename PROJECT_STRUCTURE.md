# Project File Structure and Code

## Directory Layout

project-root/
 src/
    app/
       layout.tsx              # Root layout with Navbar and Footer
       page.tsx                # Home page
       globals.css             # Global styles
       products/
          page.tsx            # Products listing page
          [slug]/
              page.tsx        # Dynamic product detail page
       contact/
           page.tsx            # Contact page with form
    components/
       Navbar.tsx              # Navigation component
       Footer.tsx              # Footer component
       Hero.tsx                # Hero section component
       ProductCard.tsx         # Product card component
       FeatureGrid.tsx         # Feature grid component
       UseCases.tsx            # Use cases section component
       HowItWorks.tsx          # How it works section component
       PricingPreview.tsx      # Pricing plans component
       FAQ.tsx                 # FAQ accordion component
       CTASection.tsx          # Call-to-action section
       index.ts                # Components barrel export
    data/
        products.ts             # Product data and utilities
 public/
    images/                     # Image assets (placeholders)
 .eslintrc.json                  # ESLint configuration
 tailwind.config.ts              # Tailwind CSS configuration
 tsconfig.json                   # TypeScript configuration
 next.config.ts                  # Next.js configuration
 package.json                    # Project dependencies
 README.md                        # This file

## Key Files and Their Content

### 1. src/data/products.ts
Product data for all 4 AI solutions with:
- Product metadata (name, slug, description, icon)
- Features list
- Use cases
- How it works steps
- Pricing plans
- FAQ items
- SEO metadata

### 2. src/app/layout.tsx
Root layout with:
- Metadata configuration
- Global font setup
- Navbar component
- Footer component
- Geist font variables

### 3. src/app/page.tsx (Home)
Landing page with:
- Hero section
- Product cards grid
- Feature grid
- CTA section

### 4. src/app/products/page.tsx
Products listing with:
- Hero section
- 2-column grid of all products
- Product cards with features

### 5. src/app/products/[slug]/page.tsx
Dynamic product detail page with:
- Dynamic metadata from product data
- Static generation of all product slugs
- Complete product information
- Feature grid
- Use cases section
- How it works
- Pricing preview
- FAQ section
- Quick actions (WhatsApp, Demo)

### 6. src/app/contact/page.tsx
Contact page with:
- Contact information
- Contact form with validation
- Success message handling
- Business hours
- WhatsApp link

## Running the Project

### Development
