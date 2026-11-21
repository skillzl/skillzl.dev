import { ReactNode } from "react";

interface TimelineItem {
  year: string;
  tag: string;
  title: string;
  content: ReactNode;
  icon: ReactNode;
}

const LinkAccent = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold text-emerald-600 underline decoration-emerald-600/35 underline-offset-4 dark:text-emerald-400 dark:decoration-emerald-400/40"
  >
    {children}
  </a>
);

const TIMELINE_ITEMS: TimelineItem[] = [
  {
    year: "2023-present",
    tag: "uni and new projects",
    title: "New Projects, New Technologies, Uni",
    icon: (
      <svg
        className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
      </svg>
    ),
    content: (
      <>
      Build and deployed a ecom website{" "}
        <LinkAccent href="https://topwatch.md/">
          topwatch.md
        </LinkAccent>
        , the project has a lot of automated features and a modern design. Yeah and also I am a
        new student at{" "}
        <LinkAccent href="https://univ-ovidius.ro/">
          Ovidius University
        </LinkAccent>
        .
      </>
    ),
  },
  {
    year: "late 2022",
    tag: "eres.lol app",
    title: "Coding Break, But Back With a New Project",
    icon: (
      <svg
        className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="4" />
        <path d="M8 12h8" />
        <path d="M12 8v8" />
      </svg>
    ),
    content: (
      <>
        I took a six-month break from coding, but I’m back with a more
        interactive project: the{" "}
        <LinkAccent href="https://eres.lol/">eres.lol</LinkAccent> Discord
        application, which is synced with an Express dashboard.
      </>
    ),
  },
  {
    year: "2021-2022",
    tag: "skillzl.dev website and more",
    title: "More on Web Development",
    icon: (
      <svg
        className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    content: (
      <>
        Started learning <LinkAccent href="https://reactjs.org/">React</LinkAccent>
        . Also I made my first attempt to create a new modern website from
        scratch.
      </>
    ),
  },
  {
    year: "2018-2020",
    tag: "starting programming",
    title: "Started programming",
    icon: (
      <svg
        className="h-4 w-4 text-emerald-600 dark:text-emerald-400"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      </svg>
    ),
    content: (
      <>
        Joined{" "}
        <LinkAccent href="http://github.com/b1gcheats">
          b1g Cheaters
        </LinkAccent>{" "}
        project as Lead Developer. Started making more changes to the style I used
        to code my applications started from 2018.
      </>
    ),
  },
];

export default function Timeline() {
  return (
    <section className="relative overflow-hidden py-20 px-4 sm:px-6">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-600/15 blur-3xl"
      />

      <div className="mx-auto max-w-3xl">
        <div className="relative space-y-6 before:absolute before:top-3 before:left-5 before:h-[calc(100%-24px)] before:w-px before:bg-gradient-to-b before:from-emerald-600/70 before:via-emerald-600/35 before:to-transparent sm:before:left-6">
          {TIMELINE_ITEMS.map((item) => (
            <div key={item.year} className="relative pl-14 sm:pl-16">
              <div
                aria-hidden="true"
                className="absolute top-6 left-3.5 flex h-3 w-3 items-center justify-center rounded-full bg-emerald-600 ring-4 ring-emerald-600/20 sm:left-4.5"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-200" />
              </div>

              <article
                style={{
                  boxShadow: `
                    0 16px 36px -12px rgba(0, 0, 0, 0.25),
                    inset 0 1px 1px 0 rgba(255, 255, 255, 0.45),
                    inset 0 -1px 1px 0 rgba(255, 255, 255, 0.08)
                  `,
                }}
                className="relative overflow-hidden rounded-[26px] border border-white/25 bg-white/45 p-5 backdrop-blur-2xl backdrop-saturate-150 dark:border-white/15 dark:bg-zinc-900/45 sm:p-6"
              >
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/25 to-transparent dark:from-white/[0.07]"
                />

                <div className="relative z-10 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-emerald-600/30 bg-emerald-600/15">
                      {item.icon}
                    </span>
                    <time className="inline-flex items-center rounded-full border border-emerald-600/30 bg-emerald-600/15 px-3 py-0.5 text-xs font-bold tracking-wider text-emerald-600 uppercase dark:text-emerald-400">
                      {item.year}
                    </time>
                  </div>

                  <span className="text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
                    {item.tag}
                  </span>
                </div>

                <h3 className="relative z-10 mt-3.5 text-lg font-bold tracking-tight text-zinc-900 dark:text-white sm:text-xl">
                  {item.title}
                </h3>
                <p className="relative z-10 mt-2 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
                  {item.content}
                </p>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}