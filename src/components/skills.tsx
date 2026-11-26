import { skillGroups } from "@/data/profile";
import { Section } from "@/components/section";
import { BrainIcon, CodeIcon, ShieldIcon } from "@/components/icons";
import type { ComponentType } from "react";

const meta: Array<{
  icon: ComponentType<{ width?: number; height?: number }>;
  bg: string;
}> = [
  { icon: CodeIcon, bg: "bg-nbyellow" },
  { icon: BrainIcon, bg: "bg-nbpink" },
  { icon: ShieldIcon, bg: "bg-nbblue" },
];

export function Skills() {
  return (
    <Section id="skills" label="02 — Skills" title="What I work with">
      <div className="grid gap-6 md:grid-cols-3">
        {skillGroups.map((group, i) => {
          const { icon: Icon, bg } = meta[i % meta.length];
          return (
            <div key={group.title} className="nb-card overflow-hidden">
              <div
                className={`flex items-center gap-3 border-b-[3px] border-black px-5 py-4 ${bg}`}
              >
                <span className="flex size-10 shrink-0 items-center justify-center border-[2.5px] border-black bg-white">
                  <Icon width={20} height={20} />
                </span>
                <h3 className="font-display text-lg uppercase">{group.title}</h3>
              </div>
              <div className="p-5">
                <p className="text-sm font-medium leading-relaxed text-black/70">
                  {group.blurb}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="border-2 border-black bg-white px-2.5 py-1 font-mono text-xs font-bold"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
