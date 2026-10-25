# Next.js Client Website Template

A reusable, responsive website starter built with **Next.js, React, TypeScript, and Tailwind CSS**. Designed to make it easier to create consistent websites for small businesses and clients without rebuilding the same layout and configuration for every project.

The default design uses a sage-and-olive color palette inspired by BloomStack. Branding, content, and colors can be customized for each new project.

## Tech Stack

- **Next.js (App Router):** File-based routing, page layouts, and metadata
- **React + TypeScript:** Reusable, typed UI components
- **Tailwind CSS:** Responsive styling and CSS-based design tokens
- **AWS SDK for JavaScript:** Foundation for future server-side email integration
- **AWS Amplify:** Intended deployment platform

## What's Included

- Responsive homepage with a configurable hero section
- About, Services, and Contact pages
- Reusable navigation and footer
- Centralized site information and navigation links
- Configurable light and dark theme tokens
- SEO metadata and Open Graph settings
- Example service cards and contact information

**Current scope:** The Contact page displays configured contact details; it does not submit a form. An Amazon SES client is initialized in `lib/ses.ts`, but email delivery and API routes are not yet implemented.

## Project Structure

```text
app/
  about/page.tsx          About page
  services/page.tsx       Services page
  contact/page.tsx        Contact page
  layout.tsx              Shared layout and SEO metadata
  page.tsx                Homepage
  globals.css             Global styles and theme tokens
components/
  layout/                 Navbar and Footer
  sections/               Hero and section components
  cards/                  Reusable card components
  forms/                  Form component directory
config/
  site.ts                 Company details, hero content, social links
  navigation.ts           Navigation items
lib/
  ses.ts                  AWS SES client setup
  utils.ts                Shared utilities
public/images/            Static images
```

Next.js maps files in `app/` to routes. Shared UI lives in `components/`, while `config/` separates business-specific content from presentation. This makes the starter easier to maintain and adapt.

## Run Locally

**Requirements:** Node.js and npm compatible with the project's Next.js version.

```bash
git clone https://github.com/natsalinas/nextjs-client-template.git
cd nextjs-client-template
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Other useful commands:

```bash
npm run lint
npm run build
npm run start
```

Run `npm run build` before deployment to check for production build issues.

## Customize for a Client

1. **Brand and content:** Update `config/site.ts` with the company name, description, domain, contact details, hero text, and image.
2. **Navigation:** Edit `config/navigation.ts` to change the site's menu.
3. **Colors:** Change the CSS variables in `app/globals.css` (including `--primary`, `--secondary`, and `--accent`).
4. **Pages:** Replace the example content in `app/about/page.tsx`, `app/services/page.tsx`, and `app/contact/page.tsx`.
5. **Images:** Replace the placeholder assets in `public/images/` and update their paths in the site configuration.
6. **SEO:** Set the real domain and business description in `config/site.ts`; the root layout uses these values for metadata.

Keep client-specific assets and credentials out of the starter repository.

## Architecture and Deployment

The frontend is built with Next.js App Router. Pages and reusable React components render the interface, while centralized configuration supplies site-specific content. Tailwind theme tokens keep the design consistent across components.

The project is structured for future deployment on **AWS Amplify Hosting**. A future contact form could use a Next.js Route Handler to validate requests and send email through **Amazon SES**, with access granted through an IAM role. That workflow is **not implemented yet**.

For production use, configure the domain, environment variables, access permissions, and any backend services for the specific client. Never commit API keys or AWS credentials.

## Next Steps

- Implement and validate a contact form with a server-side API route
- Connect email notifications through Amazon SES
- Add accessibility and responsive QA
- Test production builds and configure AWS Amplify deployment

---

Built as a reusable foundation for client websites, with an emphasis on component reuse, separation of concerns, and maintainable configuration.
