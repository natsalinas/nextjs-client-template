# Next.js Client Website Template

A reusable Next.js starter for building modern portfolio, creative, and small-business websites.

This project was created as a configurable foundation for future client websites. It provides a responsive layout, reusable components, centralized site configuration, and a structure designed to support server-side forms and AWS deployment.

## Features

- Next.js App Router
- React and TypeScript
- Responsive desktop, tablet, and mobile layouts
- Reusable navigation, hero, footer, and content components
- Centralized site and navigation configuration
- Gallery and product/service page structure
- Contact and request form architecture
- Next.js API route support
- AWS SES integration support
- SEO metadata and social sharing support
- AWS Amplify-ready deployment structure
- Environment-based configuration for sensitive values

## Tech Stack

### Frontend

- Next.js
- React
- TypeScript
- Tailwind CSS
- Next.js Image Optimization

### Backend

- Next.js Route Handlers
- AWS SDK for JavaScript
- Amazon SES

### Deployment

The template is designed to support deployment using:

- AWS Amplify Hosting
- Amazon Route 53
- AWS IAM
- Amazon SES

## Project Structure

```text
.
├── app/
│   ├── api/                 # Server-side API routes
│   ├── about/               # About page
│   ├── commissions/         # Request/service page
│   ├── gallery/             # Gallery page
│   ├── products/            # Products or offerings
│   ├── globals.css          # Global styles and design tokens
│   ├── layout.tsx           # Root layout and metadata
│   └── page.tsx             # Homepage
│
├── components/
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   └── ...                  # Reusable UI components
│
├── config/
│   ├── navigation.ts        # Navigation configuration
│   └── site.ts              # Site branding and content
│
├── lib/                     # Shared utilities and service clients
├── public/                  # Static images and assets
├── .gitignore
├── next.config.ts
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

### 1. Clone the template

```bash
git clone <repository-url>
cd nextjs-client-template
```

### 2. Install dependencies

```bash
npm ci
```

### 3. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Customizing a New Website

The goal of this template is to keep client-specific information separate from reusable application components.

### Site Configuration

Update:

```text
config/site.ts
```

This file contains general site information such as:

- Business name
- Legal/company name
- Description
- Location
- Domain
- Hero content
- Social links
- Email configuration

Example:

```ts
export const siteConfig = {
  name: "Your Business Name",
  legalName: "Your Name or Company",
  description: "A short description of the business.",
  location: "City, State",
  domain: "https://example.com",

  hero: {
    eyebrow: "Your Tagline",
    title: "Your Main Headline",
    description: "Introduce the business or brand here.",
    image: "/images/hero.jpg",
    imageAlt: "Featured image",

    primaryCta: {
      label: "Explore",
      href: "/gallery",
    },

    secondaryCta: {
      label: "Get in Touch",
      href: "/contact",
    },
  },

  social: {
    instagram: "",
    linkedin: "",
  },

  email: {
    senderName: "Your Business Name",
    senderAddress: "hello@example.com",
  },
};
```

### Navigation

Update:

```text
config/navigation.ts
```

Example:

```ts
export const navigationLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/products", label: "Shop" },
  { href: "/commissions", label: "Services" },
];
```

This allows navigation items to be changed without modifying the Navbar component.

## Images

Static website images belong in:

```text
public/images/
```

For example:

```text
public/images/hero.jpg
```

can be referenced in Next.js as:

```tsx
<Image
  src="/images/hero.jpg"
  alt="Featured image"
  width={650}
  height={900}
/>
```

Client-specific images should be replaced when creating a new website from the template.

## Environment Variables

Sensitive configuration must not be committed to Git.

Create:

```text
.env.local
```

for local development when environment variables are required.

A future `.env.example` can document required variables without containing secrets.

For example:

```env
AWS_REGION=us-east-1
SES_FROM_EMAIL=hello@example.com
CONTACT_EMAIL=owner@example.com
```

Never commit:

- AWS access keys
- AWS secret access keys
- SES SMTP credentials
- Personal credentials
- Production secrets

Environment files are excluded from source control through `.gitignore`.

## Email Architecture

The template is designed to support server-side contact and request forms using Next.js Route Handlers and Amazon SES.

```text
Visitor
   │
   ▼
Website Form
   │
   ▼
Next.js API Route
   │
   ▼
Amazon SES
   │
   ▼
Email Notification
```

When deployed to AWS Amplify, an IAM compute role should be used to authorize the application to access SES rather than storing long-lived AWS credentials in the application.

## Production Checks

Before deploying a website created from this template, run:

```bash
npm run lint
```

Then:

```bash
npm run build
```

Both should complete successfully before deployment.

The website should also be tested at common mobile, tablet, and desktop viewport sizes.

## Deployment

The recommended deployment architecture is:

```text
GitHub
   │
   ▼
AWS Amplify Hosting
   │
   ├── Next.js Application
   │
   └── Next.js API Routes
             │
             ▼
           AWS IAM
             │
             ▼
         Amazon SES

Custom Domain
     │
     ▼
Amazon Route 53
     │
     ▼
AWS Amplify
```

The production branch can be connected directly to AWS Amplify for automatic deployments.

## Creating a New Client Project

A typical workflow is:

```text
Clone template
     ↓
Create new repository
     ↓
Update site configuration
     ↓
Update navigation
     ↓
Replace images
     ↓
Update page content
     ↓
Configure forms
     ↓
Configure AWS services
     ↓
Run lint/build
     ↓
Deploy
```

The template should remain generic. Client-specific code and assets should live in the new project created from the template rather than being committed back into the template repository.

## Template Roadmap

### Foundation

- [x] Reusable Next.js project structure
- [x] Centralized site configuration
- [x] Centralized navigation configuration
- [x] Configurable Hero
- [x] Configurable Footer

### Design System

- [ ] Replace project-specific color names with generic design tokens
- [ ] Create configurable typography
- [ ] Add generic placeholder assets

### Content

- [ ] Generalize About page
- [ ] Generalize Gallery
- [ ] Generalize Products/Services
- [ ] Generalize contact/request experience
- [ ] Move repeated content into reusable data files

### Backend

- [ ] Generalize contact API route
- [ ] Add reusable SES configuration
- [ ] Add `.env.example`
- [ ] Add server-side form validation
- [ ] Improve error handling

### Production

- [ ] Generic metadata configuration
- [ ] Generic favicon and Open Graph placeholders
- [ ] Accessibility review
- [ ] Responsive QA
- [ ] AWS Amplify deployment documentation

## Purpose

This repository is intended to serve as a maintainable starting point for future web projects rather than a finished client website.

Reusable application architecture should remain in this repository, while branding, content, imagery, domains, and client-specific functionality should be implemented in individual project repositories.