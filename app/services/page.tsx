import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description: "Explore the services and solutions we offer.",
};

const services = [
  { title: "Service One", description: "Describe your first service and the value it provides to customers." },
  { title: "Service Two", description: "Explain another offering and how it helps your clients." },
  { title: "Service Three", description: "Highlight an additional service or area of expertise." },
];

export default function ServicesPage() {
  return (
    <main className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-sm font-semibold uppercase tracking-widest text-primary">What We Offer</p>
        <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">Our Services</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">
          Introduce your services here. Customize these cards for each new client website.
        </p>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <article key={service.title} className="rounded-xl border border-border bg-card p-7 shadow-sm">
              <h2 className="text-xl font-semibold text-card-foreground">{service.title}</h2>
              <p className="mt-3 text-muted-foreground">{service.description}</p>
            </article>
          ))}
        </div>
        <div className="mt-12">
          <Link href="/contact" className="inline-flex rounded-md bg-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-90">
            Get in Touch
          </Link>
        </div>
      </div>
    </main>
  );
}
