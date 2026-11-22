import { useEffect, useState } from "react";
import Image from "next/image";
import profilePic from "public/images/me.jpg";

interface GitHubStats {
  repos: number | null;
  years: number | null;
}

const GITHUB_USERNAME = "skillzl";

export default function Profile() {
  const [stats, setStats] = useState<GitHubStats>({ repos: null, years: null });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchGitHubProfile() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}`,
          { signal: controller.signal }
        );
        if (!res.ok) throw new Error("Failed to fetch GitHub profile");

        const data = await res.json();
        const createdAt = new Date(data.created_at);
        const years = Math.max(
          1,
          new Date().getFullYear() - createdAt.getFullYear()
        );

        setStats({
          repos: data.public_repos ?? 0,
          years,
        });
      } catch (err) {
        if ((err as Error).name !== "AbortError") {
          console.error("GitHub fetch error:", err);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubProfile();
    return () => controller.abort();
  }, []);

  return (
    <section className="relative my-12 flex justify-center px-4">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-4 mx-auto max-w-sm rounded-[36px] bg-gradient-to-tr from-emerald-600/25 via-emerald-500/15 to-teal-500/20 blur-2xl"
      />

      <div
        style={{
          boxShadow: `
            0 24px 48px -12px rgba(0, 0, 0, 0.35),
            inset 0 1px 1px 0 rgba(255, 255, 255, 0.45),
            inset 0 -1px 1px 0 rgba(255, 255, 255, 0.1)
          `,
        }}
        className="relative w-full max-w-sm overflow-hidden rounded-[32px] border border-white/25 bg-white/45 p-3 backdrop-blur-2xl backdrop-saturate-150 dark:border-white/15 dark:bg-zinc-900/45"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-20 h-32 bg-gradient-to-b from-white/30 to-transparent dark:from-white/10"
        />

       <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[24px] ring-1 ring-emerald-600/30">
        <Image
            className="w-full"
            src={profilePic}
            alt="Picture of the author"

            placeholder="blur"
            quality={85}

          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2">
            <span
              style={{
                boxShadow: "inset 0 1px 0.5px rgba(255,255,255,0.4)",
              }}
              className="inline-flex items-center gap-1.5 rounded-full border border-emerald-600/40 bg-emerald-600/25 px-3.5 py-1 text-xs font-semibold tracking-wider text-white backdrop-blur-xl"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-600 ring-2 ring-emerald-300/70" />
              @{GITHUB_USERNAME}
            </span>
          </div>
        </div>

        <div className="relative z-20 mt-4 text-center">
          <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-white">
            Catalin Turta
          </h2>
          <p className="mt-0.5 text-sm font-medium text-emerald-600 dark:text-emerald-400">
            self-taught programmer
          </p>
        </div>

        <div
          style={{
            boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.25)",
          }}
          className="relative z-20 mt-5 grid grid-cols-3 divide-x divide-zinc-900/10 rounded-[22px] border border-emerald-600/20 bg-white/35 py-3.5 text-center backdrop-blur-md dark:divide-white/10 dark:border-emerald-600/25 dark:bg-white/[0.04]"
        >
          <div className="px-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="text-[9px]">(public)</span> GitHub Repo's
            </p>
            {loading ? (
              <div className="mx-auto mt-1.5 h-4 w-8 animate-pulse rounded-md bg-emerald-600/20" />
            ) : (
              <p className="mt-0.5 text-sm font-semibold text-zinc-900 dark:text-white">
                {stats.repos ?? "—"}
              </p>
            )}
          </div>

          <div className="px-2">
            <p className="text-[11px] font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Experience
            </p>
            {loading ? (
              <div className="mx-auto mt-1.5 h-4 w-10 animate-pulse rounded-md bg-emerald-600/20" />
            ) : (
              <p className="mt-0.5 text-sm font-semibold text-zinc-900 dark:text-white">
                {stats.years ? `${stats.years} yrs` : "—"}
              </p>
            )}
          </div>

          <div className="px-2">
            <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              Coding Activity
            </p>
            <p className="mt-0.5 text-sm font-semibold text-zinc-900 dark:text-white">
              retired, <span className="text-xs">but still coding as a hobby</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}