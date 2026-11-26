import { languages, profile } from "@/data/profile";
import { Section } from "@/components/section";

export function About() {
  const [first, ...rest] = profile.summary.split(". ");

  return (
    <Section id="about" label="01 — About" title="Who I am">
      <div className="grid gap-8 md:grid-cols-[1fr_280px]">
        <div className="nb-card p-6 md:p-8">
          <p className="text-[15px] leading-relaxed text-black/80">
            <span className="font-bold text-black">{first}. </span>
            {rest.join(". ")}
          </p>
        </div>

        <aside className="nb-card p-6">
          <h3 className="font-mono text-xs font-bold uppercase tracking-widest">
            Languages I speak
          </h3>
          <ul className="mt-5 space-y-5">
            {languages.map((lang) => (
              <li key={lang.name}>
                <span className="text-sm font-bold uppercase">{lang.name}</span>
                <div className="mt-1.5 h-3 w-full border-2 border-black bg-white">
                  <div
                    className="h-full bg-black"
                    style={{
                      width:
                        lang.level === "Native or Bilingual" ? "100%" : "85%",
                    }}
                  />
                </div>
                <p className="mt-1 font-mono text-xs font-bold text-black/60">
                  {lang.level}
                </p>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Section>
  );
}
