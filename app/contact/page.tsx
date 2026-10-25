import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Learn how to get in touch with our team.",
};

export default function ContactPage() {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Get in Touch</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          Have a question or want to work together? Reach out using the contact details below.
          Replace these placeholders with your client's information.
        </p>
        <div className="mt-10 rounded-xl border border-border bg-card p-8">
          <h2 className="text-xl font-semibold text-card-foreground">Contact Information</h2>
          <p className="mt-4 text-sm font-medium text-muted-foreground">Email</p>
          <a className="mt-1 inline-block text-primary underline-offset-4 hover:underline" href={`mailto:${siteConfig.email.senderAddress}`}>
            {siteConfig.email.senderAddress}
          </a>
          <p className="mt-6 text-sm font-medium text-muted-foreground">Location</p>
          <p className="mt-1">{siteConfig.location}</p>
        </div>
        <p className="mt-6 text-sm text-muted-foreground">
          This template does not send messages yet. Add a validated contact form and
          configure your email provider before enabling form submissions.
        </p>
      </div>
    </main>
  );
}
