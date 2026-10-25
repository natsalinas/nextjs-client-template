import Image from "next/image";

export default function AboutPage() {
  return (
    <main>
      <section className="px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.25em]">
              About
            </p>

            <h1 className="mt-4 text-5xl font-semibold leading-tight sm:text-6xl">
              About Our Company
            </h1>
          </div>
          <div className="mt-10 max-w-3xl">
            <div className="space-y-5 text-lg leading-8 text-muted-foreground">
              <p>
                Introduce your company, explain what you do, and share the values
                that guide your work. Replace this placeholder with a concise
                story about your team, customers, and mission.
              </p>
            </div>
          </div>
          <div className="relative mt-10 mx-auto max-w-2xl">
            <div
              aria-hidden="true"
              className="absolute -left-6 -top-6 h-44 w-44 rounded-full bg-primary/15 blur-3xl"
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
