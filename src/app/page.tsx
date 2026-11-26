import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Section } from "@/components/section";
import Terminal from "@/components/terminal";
import { Journey } from "@/components/journey";
import { Roadmap } from "@/components/roadmap";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

const marquee = [
  "Python",
  "DSA in C",
  "Machine Learning",
  "Pandas",
  "NumPy",
  "Java",
  "SQL",
  "Networking",
  "Cybersecurity",
  "Hackathons",
];

function MarqueeRow() {
  return (
    <div className="flex shrink-0 items-center">
      {marquee.map((m) => (
        <span
          key={m}
          className="flex items-center font-display text-lg uppercase"
        >
          <span className="px-4">{m}</span>
          <span aria-hidden className="text-base">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <div
          aria-hidden
          className="overflow-hidden border-y-[3px] border-black bg-nbpink py-3"
        >
          <div className="nb-marquee-track flex w-max">
            <MarqueeRow />
            <MarqueeRow />
          </div>
        </div>
        <About />
        <Skills />
        <Section
          id="terminal"
          label="03 — Terminal"
          title="My stack, live in a shell"
        >
          <p className="mb-8 max-w-2xl text-sm font-medium leading-relaxed text-black/70">
            An automated shell session — the commands type themselves and the
            output speaks for my toolkit. Hit{" "}
            <span className="font-mono font-bold text-black">skip</span> to
            jump ahead or{" "}
            <span className="font-mono font-bold text-black">replay</span> to
            run it again.
          </p>
          <Terminal />
        </Section>
        <Journey />
        <Roadmap />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
