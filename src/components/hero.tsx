import { Fragment } from "react";
import Image from "next/image";
import { profile } from "@/data/profile";
import { LinkedInIcon, MailIcon, MapPinIcon } from "@/components/icons";

const stickers = [
  { text: "Open to internships", cls: "bg-nbpink rotate-2" },
  { text: "Nexathon 1.0 hacker", cls: "bg-nbblue -rotate-1" },
  { text: "Class of 2028", cls: "bg-nbgreen rotate-1" },
] as const;

const statColors = ["bg-nbyellow", "bg-nbblue", "bg-nbpink", "bg-nbgreen"] as const;

/**
 * Splits the name into per-character spans for the load animation:
 * each char pops in, then "liquid" fills it bottom-up (see nb-pop /
 * nb-fill keyframes in globals.css). Chars are grouped word-by-word
 * (nowrap) so the name can only wrap BETWEEN words, never mid-word.
 * Screen readers get the plain name.
 */
function LiquidName({ name }: { name: string }) {
  let charIndex = 0;
  return (
    <span className="liquid-name" aria-label={name} role="text">
      {name.split(" ").map((word, w) => (
        <Fragment key={`${word}-${w}`}>
          {w > 0 && " "}
          <span aria-hidden className="liquid-word">
            {[...word].map((ch, i) => (
              <span
                key={`${ch}-${i}`}
                aria-hidden
                className="liquid-char"
                data-char={ch}
                style={{ "--i": charIndex++ } as React.CSSProperties}
              >
                {ch}
              </span>
            ))}
          </span>
        </Fragment>
      ))}
    </span>
  );
}

export function Hero() {
  return (
    <div id="top" className="nb-grid-bg relative">
      <div className="mx-auto flex min-h-svh max-w-5xl flex-col items-center justify-center px-6 py-24 text-center">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {stickers.map((s) => (
            <span
              key={s.text}
              className={`nb-chip px-3 py-1 font-mono text-[11px] font-bold uppercase ${s.cls}`}
            >
              {s.text}
            </span>
          ))}
        </div>

        <div className="nb-card mt-10 flex size-32 rotate-2 items-stretch overflow-hidden sm:size-40">
          <Image
            src="/profile.webp"
            alt="Portrait of Abhishek Gupta"
            width={320}
            height={428}
            priority
            className="h-auto w-full object-cover"
          />
        </div>

        <p className="mt-10 font-mono text-sm font-bold uppercase tracking-wide">
          {profile.roles.join("  ·  ")}
        </p>
        <h1 className="mt-4 font-display text-5xl uppercase leading-[1.08] sm:text-6xl md:text-7xl">
          Hi, I&apos;m{" "}
          <span className="mt-3 inline-block -rotate-1 border-[3px] border-black bg-nbpink px-3 pb-1 text-[clamp(2.25rem,10vw,3.75rem)] shadow-[7px_7px_0_#000] sm:text-6xl md:text-7xl">
            <LiquidName name={profile.name} />
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base font-medium leading-relaxed text-black/80 sm:text-lg">
          Computer Science undergrad at Brainware University — anchored in Data
          Structures &amp; Algorithms with C, diving deep into Machine Learning
          with the Python stack.
        </p>
        <p className="nb-chip mt-6 flex items-center gap-1.5 px-3 py-1.5 font-mono text-xs font-bold">
          <MapPinIcon width={14} height={14} />
          {profile.location}
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="nb-btn inline-flex items-center gap-2 bg-black px-6 py-3 text-sm uppercase text-white"
          >
            <MailIcon width={16} height={16} />
            Get in touch
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="nb-btn inline-flex items-center gap-2 bg-white px-6 py-3 text-sm uppercase"
          >
            <LinkedInIcon width={16} height={16} />
            LinkedIn
          </a>
        </div>

        <dl className="mt-14 grid w-full max-w-3xl grid-cols-2 gap-5 sm:grid-cols-4">
          {profile.highlightStats.map((stat, i) => (
            <div
              key={stat.label}
              className={`nb-card flex flex-col items-center justify-center px-4 py-6 ${statColors[i % statColors.length]}`}
            >
              <dt className="sr-only">{stat.label}</dt>
              <dd className="font-display text-xl md:text-2xl">{stat.value}</dd>
              <dd className="mt-1 font-mono text-[11px] font-bold uppercase">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
