import { profile } from "@/data/profile";
import { LinkedInIcon, MailIcon } from "@/components/icons";

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="nb-card relative bg-nbyellow px-6 py-16 text-center md:px-16">
          <span className="nb-chip absolute -top-4 left-8 -rotate-2 px-3 py-1 font-mono text-[11px] font-bold uppercase">
            Replies within 24h
          </span>
          <span className="nb-chip absolute -bottom-4 right-8 rotate-2 bg-nbpink px-3 py-1 font-mono text-[11px] font-bold uppercase">
            No spam, promise
          </span>

          <span className="nb-chip px-3 py-1 font-mono text-xs font-bold uppercase">
            07 — Contact
          </span>
          <h2 className="mt-5 font-display text-3xl uppercase sm:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] font-medium leading-relaxed text-black/80">
            I&apos;m eager to join engineering teams tackling challenges in AI
            and system architecture. Whether it&apos;s an internship, a project,
            or a hackathon team — my inbox is always open.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="nb-btn inline-flex items-center gap-2 bg-black px-6 py-3 text-sm uppercase text-white"
            >
              <MailIcon width={16} height={16} />
              {profile.email}
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="nb-btn inline-flex items-center gap-2 bg-white px-6 py-3 text-sm uppercase"
            >
              <LinkedInIcon width={16} height={16} />
              {profile.linkedinLabel}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
