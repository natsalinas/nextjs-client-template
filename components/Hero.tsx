import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

export function Hero() {
  const { hero } = siteConfig;

  return (
    <section className="overflow-hidden px-6 pb-16 pt-8 sm:pb-20 sm:pt-12 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-olive">
            {hero.eyebrow}
          </p>

          <h1 className="mt-4 font-heading text-5xl font-semibold leading-tight text-olive-dark sm:text-6xl lg:text-7xl">
            {hero.title}
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            {hero.description}
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center rounded-md bg-olive-dark px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-olive hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {hero.primaryCta.label}
            </Link>

            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center rounded-md border border-rose-dark px-6 py-3 text-sm font-semibold text-rose-dark transition-all duration-300 hover:-translate-y-0.5 hover:bg-rose hover:text-white hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center">
          <div
            aria-hidden="true"
            className="absolute -bottom-10 -left-8 -z-10 h-56 w-56 rounded-full bg-rose/30 blur-3xl"
          />

          <div
            aria-hidden="true"
            className="absolute -right-10 -top-10 -z-10 h-56 w-56 rounded-full bg-olive/20 blur-3xl"
          />

          <Image
            src={hero.image}
            alt={hero.imageAlt}
            width={650}
            height={900}
            priority
            sizes="(max-width: 768px) 80vw, 40vw"
            className="h-auto w-4/5 max-w-xs rounded-[2rem] object-contain shadow-xl transition-transform duration-500 hover:scale-[1.02] sm:max-w-sm md:w-full md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
}