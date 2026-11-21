import Github from "components/icons/Github";
import { GlobeAltIcon } from "@heroicons/react/solid";

interface ProjectProps {
  title: string;
  author: string;
  year: number;
  comment: string;
  link?: string;
  weblink?: string;
  active?: boolean;
  over?: boolean;
  website?: boolean;
}

export default function Project({
  title,
  author,
  year,
  comment,
  active = false,
  over = false,
  link,
  website = false,
  weblink,
}: ProjectProps) {
  return (
    <li
      style={{
        boxShadow: `
          0 16px 36px -12px rgba(0, 0, 0, 0.25),
          inset 0 1px 1px 0 rgba(255, 255, 255, 0.45),
          inset 0 -1px 1px 0 rgba(255, 255, 255, 0.08)
        `,
      }}
      className="relative w-full max-w-md list-none overflow-hidden rounded-[26px] border border-white/25 bg-white/45 backdrop-blur-2xl backdrop-saturate-150 dark:border-white/15 dark:bg-zinc-900/45 sm:max-w-4xl"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/25 to-transparent dark:from-white/[0.07]"
      />

      <article className="relative z-10 p-6 sm:px-8 sm:py-7">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
            {title}
          </h2>

          <div className="flex items-center gap-2">
            {active && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/35 bg-emerald-600/15 px-3 py-0.5 text-xs font-semibold tracking-wide text-emerald-600 dark:text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 ring-2 ring-emerald-400/50" />
                Active
              </span>
            )}
            {over && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/15 px-3 py-0.5 text-xs font-semibold tracking-wide text-amber-700 dark:text-amber-300">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                Over
              </span>
            )}
          </div>
        </div>

        <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs font-medium text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold text-emerald-600 dark:text-emerald-400">
            {author}
          </span>
          <span aria-hidden="true">&middot;</span>
          <span>
            {year}
            {active && " – current"}
          </span>
        </div>

        <p className="mt-3.5 text-sm leading-relaxed text-zinc-700 dark:text-zinc-300 sm:text-base">
          {comment}
        </p>

        {(link || (website && weblink)) && (
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            {link && (
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} GitHub repository`}
                style={{
                  boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.25)",
                }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-600/25 bg-white/40 px-3.5 py-1.5 text-xs font-semibold text-zinc-800 backdrop-blur-md dark:border-emerald-600/30 dark:bg-white/[0.05] dark:text-zinc-200"
              >
                <Github className="h-3.5 w-3.5 fill-emerald-600 dark:fill-emerald-400" />
                <span>Source</span>
              </a>
            )}

            {website && weblink && (
              <a
                href={weblink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${title} live website`}
                style={{
                  boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.25)",
                }}
                className="inline-flex items-center gap-2 rounded-full border border-emerald-600/30 bg-emerald-600/15 px-3.5 py-1.5 text-xs font-semibold text-emerald-700 backdrop-blur-md dark:text-emerald-300"
              >
                <GlobeAltIcon className="h-3.5 w-3.5 fill-emerald-600 dark:fill-emerald-400" />
                <span>Live</span>
              </a>
            )}
          </div>
        )}
      </article>
    </li>
  );
}