"use client";

import { useState } from "react";
import { timeline, type TimelineItem } from "@/data/profile";
import { Section } from "@/components/section";
import { DocumentModal } from "@/components/cert-modal";
import { BriefcaseIcon, GradCapIcon } from "@/components/icons";

type OpenDoc = {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  aspectClass?: string;
};

export function Journey() {
  const [openDoc, setOpenDoc] = useState<OpenDoc | null>(null);

  return (
    <Section id="journey" label="04 — Journey" title="Experience & education">
      <ol className="relative ml-3 space-y-8 border-l-[3px] border-black pl-8">
        {timeline.map((item) => {
          const Icon = item.kind === "work" ? BriefcaseIcon : GradCapIcon;
          const doc = item.document;
          const Org = item.orgUrl ? (
            <a
              href={item.orgUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-[2.5px] underline-offset-2 hover:bg-nbyellow"
            >
              {item.org} ↗
            </a>
          ) : (
            item.org
          );
          return (
            <li key={item.title} className="relative">
              <span
                className={`absolute -left-[47px] flex size-8 items-center justify-center border-[3px] border-black ${
                  item.kind === "work" ? "bg-nbyellow" : "bg-nbblue"
                }`}
              >
                <Icon width={15} height={15} />
              </span>
              <div className="nb-card p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-display text-xl uppercase">{item.title}</h3>
                  <span className="border-2 border-black bg-white px-2 py-0.5 font-mono text-xs font-bold">
                    {item.period}
                  </span>
                </div>
                <p className="mt-2 font-bold">{Org}</p>
                <p className="mt-0.5 font-mono text-xs font-bold text-black/60">
                  {item.duration}
                </p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li
                      key={point}
                      className="flex gap-2.5 text-sm font-medium leading-relaxed text-black/80"
                    >
                      <span
                        aria-hidden
                        className="mt-[9px] size-1.5 shrink-0 bg-black"
                      />
                      {point}
                    </li>
                  ))}
                </ul>
                {doc && (
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDoc({
                        title: doc.label,
                        subtitle: `${item.title} · ${item.org}`,
                        image: doc.image,
                        alt: `${doc.label} for Abhishek Gupta — ${item.title} at ${item.org}`,
                        aspectClass: doc.aspectClass,
                      })
                    }
                    aria-haspopup="dialog"
                    className="nb-btn mt-5 inline-flex items-center gap-2 bg-nbyellow px-4 py-2 text-xs uppercase"
                  >
                    View completion letter ↗
                  </button>
                )}
              </div>
            </li>
          );
        })}
      </ol>

      {openDoc && (
        <DocumentModal
          title={openDoc.title}
          subtitle={openDoc.subtitle}
          image={openDoc.image}
          alt={openDoc.alt}
          aspectClass={openDoc.aspectClass}
          onClose={() => setOpenDoc(null)}
        />
      )}
    </Section>
  );
}
