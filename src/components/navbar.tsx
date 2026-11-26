"use client";

import { useState } from "react";
import { navLinks, profile } from "@/data/profile";
import { CloseIcon, MenuIcon } from "@/components/icons";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b-[3px] border-black bg-cream">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <a
          href="#top"
          className="group flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="nb-chip flex size-9 rotate-2 items-center justify-center bg-nbyellow font-display text-sm">
            {profile.initials}
          </span>
          <span className="hidden font-display text-sm uppercase tracking-wide sm:block">
            {profile.name}
          </span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="border-[2.5px] border-transparent px-3 py-1 text-sm font-bold uppercase transition-colors hover:border-black hover:bg-nbyellow"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              className="nb-btn ml-2 whitespace-nowrap rounded-none bg-black px-4 py-1.5 text-sm uppercase text-white"
            >
              Hire me
            </a>
          </li>
        </ul>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="nb-btn flex size-10 items-center justify-center bg-white md:hidden"
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <ul className="space-y-1 border-t-[3px] border-black bg-cream px-6 py-4 md:hidden">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-[2.5px] border-black bg-white px-3 py-2 text-sm font-bold uppercase shadow-[3px_3px_0_#000]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={`mailto:${profile.email}`}
              onClick={() => setOpen(false)}
              className="nb-btn mt-2 block bg-black px-3 py-2 text-center text-sm uppercase text-white"
            >
              Hire me
            </a>
          </li>
        </ul>
      )}
    </header>
  );
}
