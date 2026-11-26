import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t-[3px] border-black bg-black py-8 text-white">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-sm font-medium sm:flex-row">
        <p>© 2026 {profile.name}. All rights reserved.</p>
        <p className="font-mono text-xs">
          Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className="text-nbyellow underline decoration-2 underline-offset-2"
          >
            Next.js
          </a>{" "}
          &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  );
}
