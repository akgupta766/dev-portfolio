import { roadmap, type RoadmapStop } from "@/data/profile";
import { Section } from "@/components/section";
import { CarIcon, FlagIcon } from "@/components/icons";

const statusChip: Record<
  RoadmapStop["status"],
  { cls: string; label: string }
> = {
  current: { cls: "bg-nbyellow", label: "you are here" },
  upcoming: { cls: "bg-white", label: "next stop" },
};

export function Roadmap() {
  const last = roadmap.flashForward.items.length - 1;

  return (
    <Section id="roadmap" label="05 — Loading…" title="Currently learning">
      <p className="max-w-2xl text-sm font-medium leading-relaxed text-black/70">
        {roadmap.intro}
      </p>

      {/* trip HUD */}
      <div className="nb-card mt-8 flex flex-wrap items-center gap-x-8 gap-y-4 bg-nbblue p-5">
        <div className="min-w-[240px] flex-1">
          <p className="font-mono text-[11px] font-bold uppercase">
            trip progress — {roadmap.progress.value}
          </p>
          <div className="mt-2 h-4 w-full border-[2.5px] border-black bg-white">
            <div
              className="h-full bg-black"
              style={{ width: roadmap.progress.value }}
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] font-bold uppercase">
          <p>📍 {roadmap.progress.location}</p>
          <p>🚗 {roadmap.progress.mode}</p>
          <p>⛽ {roadmap.progress.fuel}</p>
        </div>
      </div>

      {/* the MERN highway */}
      <h3 className="mt-12 font-display text-lg uppercase">
        The MERN Highway
      </h3>
      <div className="relative mt-5">
        {/* dashed road */}
        <div
          aria-hidden
          className="road-dashes absolute bottom-10 left-[19px] top-6 w-[3px]"
        />
        <ol className="space-y-7">
          {roadmap.highway.map((stop) => {
            const chip = statusChip[stop.status];
            return (
              <li key={stop.name} className="relative flex items-start gap-5">
                <span
                  className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center border-[3px] border-black ${
                    stop.status === "current"
                      ? "bg-nbyellow nb-pulse"
                      : "bg-white"
                  }`}
                >
                  {stop.status === "current" ? (
                    <CarIcon width={22} height={22} />
                  ) : (
                    <span
                      aria-hidden
                      className="font-mono text-xs font-bold text-black/40"
                    >
                      ?
                    </span>
                  )}
                </span>
                <div
                  className={`nb-card flex-1 p-5 ${
                    stop.status === "upcoming" ? "border-dashed" : ""
                  }`}
                >
                  <div className="flex flex-wrap items-center gap-3">
                    <h4 className="font-display text-lg uppercase">
                      {stop.name}
                    </h4>
                    <span
                      className={`border-2 border-black px-2 py-0.5 font-mono text-[10px] font-bold uppercase ${chip.cls}`}
                    >
                      {chip.label}
                    </span>
                    {stop.tag && (
                      <span className="border-2 border-black bg-nbgreen px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                        {stop.tag}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-black/75">
                    {stop.blurb}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      {/* devops detour */}
      <div className="nb-card mt-10 flex flex-wrap items-center gap-4 bg-nborange p-5">
        <span className="flex size-11 shrink-0 items-center justify-center border-[2.5px] border-black bg-white">
          <FlagIcon width={20} height={20} />
        </span>
        <div className="min-w-[240px] flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-lg uppercase">
              DevOps detour — {roadmap.detour.name}
            </h3>
            <span className="border-2 border-black bg-white px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
              detour ahead
            </span>
          </div>
          <p className="mt-2 text-sm font-medium leading-relaxed text-black/75">
            {roadmap.detour.blurb}
          </p>
        </div>
      </div>

      {/* AI side quest */}
      <div className="mt-12">
        <div className="flex flex-wrap items-center gap-3">
          <h3 className="font-display text-lg uppercase">The AI side quest</h3>
          <span className="border-2 border-black bg-nbgreen px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
            quest active
          </span>
        </div>
        <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-black/70">
          {roadmap.sideQuest.blurb}
        </p>
        <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {roadmap.sideQuest.tools.map((tool) => (
            <li key={tool.name} className="nb-card p-4">
              <p className="font-mono text-sm font-bold">{tool.name}</p>
              <p className="mt-1.5 text-xs font-medium leading-relaxed text-black/70">
                {tool.line}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* fast-forward: the future, already accomplished */}
      <div className="nb-card mt-12 bg-black p-6 text-white sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="nb-chip bg-nbyellow px-3 py-1 font-mono text-[11px] font-bold uppercase">
            spoiler alert
          </span>
          <h3 className="font-display text-xl uppercase">
            Fast-forward → 2027
          </h3>
        </div>
        <p className="mt-3 font-mono text-xs text-zinc-400">
          {roadmap.flashForward.note}
        </p>
        <ul className="mt-6 space-y-3.5">
          {roadmap.flashForward.items.map((item, i) => (
            <li
              key={item.text}
              className="flex items-start gap-3 text-sm font-medium leading-relaxed text-zinc-200"
            >
              <span
                aria-hidden
                className={`mt-0.5 flex size-5 shrink-0 items-center justify-center border-2 font-mono text-[11px] font-bold ${
                  item.done
                    ? "border-nbgreen text-nbgreen"
                    : "border-zinc-500 text-zinc-500"
                }`}
              >
                {item.done ? "✔" : "→"}
              </span>
              <span className={i === last ? "text-zinc-400" : undefined}>
                {item.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
}
