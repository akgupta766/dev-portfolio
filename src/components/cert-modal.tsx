"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { CloseIcon } from "@/components/icons";

/**
 * Full-screen brutalist popup for a document (certificate / letter).
 * Closes via the X button, the backdrop, or Escape. Manages focus and
 * body scroll-lock itself, so call sites only need open/close state.
 */
export function DocumentModal({
  title,
  subtitle,
  image,
  alt,
  aspectClass = "aspect-[4/3]",
  onClose,
}: {
  title: string;
  subtitle: string;
  image: string;
  alt: string;
  aspectClass?: string;
  onClose: () => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const lastFocusRef = useRef<HTMLElement | null>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    lastFocusRef.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      lastFocusRef.current?.focus();
    };
  }, []);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — document`}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
    >
      {/* backdrop doubles as the click-to-close target */}
      <button
        type="button"
        aria-label="Close document"
        onClick={onClose}
        className="absolute inset-0 cursor-default bg-black/75"
        tabIndex={-1}
      />

      <div className="nb-card relative max-h-full w-full max-w-4xl overflow-auto bg-white">
        {/* header */}
        <div className="sticky top-0 z-10 flex items-center justify-between gap-3 border-b-[3px] border-black bg-nbyellow px-4 py-3">
          <div className="min-w-0">
            <h3 className="truncate font-display text-sm uppercase sm:text-base">
              {title}
            </h3>
            <p className="font-mono text-[11px] font-bold text-black/70">
              {subtitle}
            </p>
          </div>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Close document"
            className="nb-btn flex size-10 shrink-0 items-center justify-center bg-white"
          >
            <CloseIcon width={18} height={18} />
          </button>
        </div>

        {/* document image */}
        <div className="p-4 sm:p-6">
          <div className={`relative mx-auto ${aspectClass} w-full border-[2.5px] border-black bg-white`}>
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
