import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main>
      <section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em]">
              About
            </p>

            <h1 className="mt-4 font-heading text-5xl font-semibold leading-tight sm:text-6xl">
              Owner Name
            </h1>
          </div>
          <div className="mt-10 max-w-3xl">
            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                Hi I&apos;m [Your Name]. I&apos;m passionate about creating
                meaningful work, exploring new ideas, and finding inspiration in
                the everyday. This space is where I share a little of what I
                create and what inspires me.
              </p>
            </div>
          </div>
          <div className="relative mt-10 mx-auto max-w-2xl">
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-44 w-44 rounded-full bg-rose/20 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -bottom-8 -right-6 h-52 w-52 rounded-full blur-3xl"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-secondary shadow-lg">
              <Image
                src="/images/Template.png"
                alt="Template image"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 70vw, 700px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
