"use client";

import { useState } from "react";
import { certifications, type Certification } from "@/data/profile";
import { Section } from "@/components/section";
import { DocumentModal } from "@/components/cert-modal";
import {
  AwardIcon,
  BrainIcon,
  CpuIcon,
  LockIcon,
  ShieldIcon,
  SparkIcon,
} from "@/components/icons";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<{ width?: number; height?: number }>> = {
  shield: ShieldIcon,
  brain: BrainIcon,
  award: AwardIcon,
  cpu: CpuIcon,
  spark: SparkIcon,
  lock: LockIcon,
};

const bgs = [
  "bg-nbyellow",
  "bg-nbpink",
  "bg-nbblue",
  "bg-nbgreen",
  "bg-nbpurple",
  "bg-nborange",
];

type Cert = Certification;
type CertWithImage = Cert & { image: string };

const hasImage = (cert: Cert): cert is CertWithImage =>
  typeof cert.image === "string";

export function Certifications() {
  const [open, setOpen] = useState<CertWithImage | null>(null);

  return (
    <Section
      id="certifications"
      label="06 — Certifications"
      title="Credentials & achievements"
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => {
          const Icon = iconMap[cert.icon];
          const clickable = hasImage(cert);
          const inner = (
            <>
              <div
                className={`flex size-11 shrink-0 items-center justify-center border-[2.5px] border-black ${bgs[i % bgs.length]}`}
              >
                <Icon width={20} height={20} />
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-bold leading-snug">{cert.title}</h3>
                <p className="mt-1 font-mono text-xs font-bold text-black/60">
                  {cert.issuer}
                </p>
              </div>
              {clickable && (
                <span className="nb-chip ml-auto shrink-0 self-center bg-nbyellow px-2 py-0.5 font-mono text-[10px] font-bold uppercase">
                  View ↗
                </span>
              )}
            </>
          );

          const cardCls =
            "nb-card relative flex gap-4 p-5 text-left transition-transform hover:-translate-y-1";

          return clickable ? (
            <button
              key={cert.title}
              type="button"
              onClick={() => setOpen(cert)}
              aria-haspopup="dialog"
              aria-label={`View the ${cert.title} certificate`}
              className={`${cardCls} w-full cursor-pointer`}
            >
              {inner}
            </button>
          ) : (
            <div key={cert.title} className={cardCls}>
              {inner}
            </div>
          );
        })}
      </div>

      {open && (
        <DocumentModal
          title={open.title}
          subtitle={open.issuer}
          image={open.image}
          alt={`${open.title} certificate issued to Abhishek Gupta by ${open.issuer}`}
          onClose={() => setOpen(null)}
        />
      )}
    </Section>
  );
}
