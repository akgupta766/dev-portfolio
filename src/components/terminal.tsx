"use client";

import { useEffect, useRef, useState } from "react";

/* ------------------------------------------------------------------ */
/*  Script data — a looped shell session that showcases the toolkit.  */
/* ------------------------------------------------------------------ */

type Seg = { t: string; c?: string };
type OutLine = Seg[];
type Step = { cmd: string; out: OutLine[]; pause?: number; fetch?: boolean };

type HistItem =
  | { kind: "cmd"; text: string }
  | { kind: "out"; line: OutLine }
  | { kind: "fetch"; art: string; lines: OutLine[] };

const HOST = "abhishek@portfolio";

/** Pixel-art "AG" for the neofetch block (plain ASCII — renders everywhere). */
const AG_ART = [
  " #   #  ####",
  " #   # #    #",
  " ##### #    #",
  " #   # #    #",
  " #   #  ####",
].join("\n");

const TABLE_SEP = "+--------------------------+-------------+";
const tableRow = (a: string, b: string) =>
  `| ${a.padEnd(24)} | ${b.padEnd(11)} |`;

const FETCH_INFO: OutLine[] = [
  [{ t: "abhishek@portfolio", c: "font-bold text-white" }],
  [{ t: "-----------------", c: "text-zinc-500" }],
  [{ t: "OS       ", c: "font-bold text-nbblue" }, { t: "Debian GNU/Linux" }],
  [{ t: "Host     ", c: "font-bold text-nbblue" }, { t: "Brainware University" }],
  [{ t: "Kernel   ", c: "font-bold text-nbblue" }, { t: "B.Tech CSE · 2024–2028" }],
  [{ t: "Uptime   ", c: "font-bold text-nbblue" }, { t: "2+ years of code" }],
  [{ t: "Shell    ", c: "font-bold text-nbblue" }, { t: "zsh + tmux" }],
  [{ t: "Editor   ", c: "font-bold text-nbblue" }, { t: "neovim · vs code" }],
  [{ t: "Langs    ", c: "font-bold text-nbblue" }, { t: "python · c · java · sql" }],
  [{ t: "Focus    ", c: "font-bold text-nbblue" }, { t: "dsa · ml · networking" }],
  [{ t: "Location ", c: "font-bold text-nbblue" }, { t: "Howrah, WB, India" }],
  [{ t: "Status   ", c: "font-bold text-nbblue" }, { t: "open to internships", c: "font-bold text-nbgreen" }],
];

const SCRIPT: Step[] = [
  {
    cmd: "whoami",
    out: [
      [{ t: "abhishek.gupta", c: "font-bold text-nbyellow" }],
      [{ t: "python developer · cs undergrad · problem solver", c: "text-zinc-400" }],
    ],
  },
  {
    cmd: "cat about.txt",
    out: [
      [{ t: "B.Tech CSE @ Brainware University — class of 2028" }],
      [{ t: "Anchored in Data Structures & Algorithms with C." }],
      [{ t: "Exploring Machine Learning with the Python stack." }],
      [{ t: "▸ open to internships & collaborations", c: "font-bold text-nbgreen" }],
    ],
  },
  {
    cmd: "ls ~/skills/",
    out: [
      [{ t: "core/     ", c: "font-bold text-nbblue" }, { t: "C · DSA · Python · Java · SQL" }],
      [{ t: "ml/       ", c: "font-bold text-nbpink" }, { t: "pandas · numpy · machine learning" }],
      [{ t: "systems/  ", c: "font-bold text-nbgreen" }, { t: "networking · cybersecurity · hardware" }],
    ],
  },
  {
    cmd: "./measure --skills",
    out: [
      [{ t: "python     " }, { t: "██████████░", c: "text-nbyellow" }, { t: "  strong" }],
      [{ t: "dsa in c   " }, { t: "█████████░░", c: "text-nbyellow" }, { t: "  strong" }],
      [{ t: "ml stack   " }, { t: "████████░░░", c: "text-nbpink" }, { t: "  building" }],
      [{ t: "java · sql " }, { t: "███████░░░░", c: "text-nbblue" }, { t: "  growing" }],
    ],
  },
  {
    cmd: "grep -i achievements resume.md",
    out: [
      [{ t: "▸ winter intern · India Space Week (Feb–Mar 2026)" }],
      [{ t: "▸ hackathon participant · Nexathon 1.0" }],
      [{ t: "▸ 5+ certifications · 3 spoken languages" }],
    ],
  },
  {
    cmd: 'sql -e "SELECT cert, issued_by FROM certs;"',
    out: [
      [{ t: TABLE_SEP, c: "text-zinc-500" }],
      [{ t: tableRow("cert", "issued_by"), c: "font-bold text-nbblue" }],
      [{ t: TABLE_SEP, c: "text-zinc-500" }],
      [{ t: tableRow("Cisco CyberOps Associate", "Cisco") }],
      [{ t: tableRow("Python for Data Science", "online") }],
      [{ t: tableRow("Computer Hardware Basics", "online") }],
      [{ t: tableRow("Nexathon 1.0", "hackathon") }],
      [{ t: tableRow("Quantum Computing", "seminar") }],
      [{ t: TABLE_SEP, c: "text-zinc-500" }],
      [{ t: "5 rows in set (0.05 sec)", c: "text-zinc-400" }],
    ],
  },
  {
    cmd: "git log --oneline journey/main",
    out: [
      [{ t: "f3a92c1 ", c: "font-bold text-nbpink" }, { t: "2026 · winter intern @ India Space Week" }],
      [{ t: "b81de47 ", c: "font-bold text-nbpink" }, { t: "2024 · began B.Tech CSE @ Brainware University" }],
      [{ t: "0aa5e2d ", c: "font-bold text-nbpink" }, { t: "origin · Howrah, West Bengal, India" }],
      [{ t: "HEAD → next commit: your team?", c: "font-bold text-nbyellow" }],
    ],
  },
  {
    cmd: "neofetch",
    fetch: true,
    pause: 1600,
    out: FETCH_INFO,
  },
  {
    cmd: "sudo hire --me",
    pause: 1000,
    out: [
      [{ t: "[sudo] password for recruiter: ", c: "text-zinc-400" }, { t: "••••••••", c: "text-zinc-500" }],
      [{ t: "permission granted ✔", c: "font-bold text-nbgreen" }],
      [{ t: "email     " }, { t: "akgupta7606@gmail.com", c: "font-bold text-white underline decoration-nbpink decoration-2 underline-offset-2" }],
      [{ t: "linkedin  " }, { t: "linkedin.com/in/akgupta766", c: "font-bold text-white" }],
      [{ t: "response  ", c: "text-zinc-400" }, { t: "< 24 hours", c: "font-bold text-nbyellow" }],
    ],
  },
];

function fullTranscript(): HistItem[] {
  const items: HistItem[] = [];
  for (const step of SCRIPT) {
    items.push({ kind: "cmd", text: step.cmd });
    if (step.fetch) items.push({ kind: "fetch", art: AG_ART, lines: step.out });
    else for (const line of step.out) items.push({ kind: "out", line });
  }
  return items;
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function Terminal() {
  const [hist, setHist] = useState<HistItem[]>([]);
  const [typing, setTyping] = useState<string | null>(null);
  const [runId, setRunId] = useState(0);
  const [reduced, setReduced] = useState<boolean | null>(null);

  const wrapRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inViewRef = useRef(false);
  const pausedRef = useRef(true);
  const aliveRef = useRef(false);
  const skipRef = useRef(false);

  /* reduced-motion preference + pause when hidden / off-screen */
  useEffect(() => {
    setReduced(window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false);
    const update = () => {
      pausedRef.current = !inViewRef.current || document.hidden;
    };
    update();
    const io = new IntersectionObserver(
      ([entry]) => {
        inViewRef.current = entry.isIntersecting;
        update();
      },
      { threshold: 0.1 },
    );
    if (wrapRef.current) io.observe(wrapRef.current);
    document.addEventListener("visibilitychange", update);
    return () => {
      io.disconnect();
      document.removeEventListener("visibilitychange", update);
    };
  }, []);

  /* the animation loop */
  useEffect(() => {
    if (reduced === null) return;
    if (reduced) {
      setHist(fullTranscript());
      setTyping(null);
      return;
    }

    aliveRef.current = true;

    const waitWhilePaused = () =>
      new Promise<void>((resolve) => {
        const check = () => {
          if (!aliveRef.current || !pausedRef.current) return resolve();
          setTimeout(check, 200);
        };
        check();
      });

    const sleep = (ms: number) =>
      new Promise<void>((resolve) => setTimeout(resolve, ms));

    const run = async () => {
      await waitWhilePaused();
      if (!aliveRef.current) return;
      await sleep(600);

      while (aliveRef.current) {
        setHist([]);
        skipRef.current = false;

        for (const step of SCRIPT) {
          if (!aliveRef.current) return;
          await waitWhilePaused();
          if (!aliveRef.current) return;

          /* type the command */
          setTyping("");
          for (let i = 1; i <= step.cmd.length; i++) {
            if (!aliveRef.current) return;
            if (skipRef.current) break;
            setTyping(step.cmd.slice(0, i));
            await sleep(22 + Math.random() * 34);
          }
          setTyping(null);
          setHist((h) => [...h, { kind: "cmd", text: step.cmd }]);
          await sleep(skipRef.current ? 0 : 420); // "thinking"

          /* print the output */
          if (step.fetch) {
            await sleep(skipRef.current ? 0 : 260);
            if (!aliveRef.current) return;
            setHist((h) => [...h, { kind: "fetch", art: AG_ART, lines: step.out }]);
          } else {
            for (const line of step.out) {
              if (!aliveRef.current) return;
              setHist((h) => [...h, { kind: "out", line }]);
              await sleep(skipRef.current ? 0 : 55);
            }
          }

          await sleep(skipRef.current ? 0 : (step.pause ?? 900));
        }

        /* hold the finished session, then loop */
        await sleep(skipRef.current ? 900 : 4500);
      }
    };

    void run();
    return () => {
      aliveRef.current = false;
    };
  }, [runId, reduced]);

  /* keep the view pinned to the newest line */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [hist, typing]);

  return (
    <div ref={wrapRef} className="nb-card overflow-hidden bg-[#0a0a0a]">
      {/* title bar */}
      <div className="flex items-center gap-2 border-b-[3px] border-black bg-nbyellow px-3 py-2">
        <span aria-hidden className="size-3 border-2 border-black bg-nbpink" />
        <span aria-hidden className="size-3 border-2 border-black bg-white" />
        <span aria-hidden className="size-3 border-2 border-black bg-nbgreen" />
        <span className="ml-1 truncate font-mono text-xs font-bold uppercase">
          {HOST}: ~ — bash
        </span>
        <span className="ml-auto flex shrink-0 gap-1.5">
          <button
            type="button"
            aria-label="Skip to the end of the session"
            title="Skip"
            onClick={() => {
              skipRef.current = true;
            }}
            className="nb-btn flex size-7 items-center justify-center bg-white"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M6 17l5-5-5-5M13 17l5-5-5-5" />
            </svg>
          </button>
          <button
            type="button"
            aria-label="Replay the session"
            title="Replay"
            onClick={() => setRunId((n) => n + 1)}
            className="nb-btn flex size-7 items-center justify-center bg-white"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M3 12a9 9 0 1 0 2.8-6.5L3 8" />
              <path d="M3 3v5h5" />
            </svg>
          </button>
        </span>
      </div>

      {/* terminal body */}
      <div
        ref={scrollRef}
        role="region"
        aria-label="Automated terminal session demonstrating my technical skills"
        className="nb-term-scroll h-[440px] overflow-y-auto p-4 font-mono text-[12px] leading-[1.6] text-zinc-200 sm:h-[520px] sm:text-[13px]"
      >
        {hist.map((item, i) => {
          if (item.kind === "cmd") {
            return (
              <div key={i}>
                <Prompt />
                <span className="text-white">{item.text}</span>
              </div>
            );
          }
          if (item.kind === "out") {
            return (
              <div key={i}>
                {item.line.map((seg, j) => (
                  <span key={j} className={seg.c}>
                    {seg.t}
                  </span>
                ))}
              </div>
            );
          }
          return (
            <div key={i} className="my-3 flex flex-wrap gap-x-10 gap-y-3">
              <pre aria-hidden className="font-bold leading-[1.3] text-nbyellow">
                {item.art}
              </pre>
              <pre className="leading-[1.45]">
                {item.lines.map((line, k) => (
                  <span key={k}>
                    {line.map((seg, j) => (
                      <span key={j} className={seg.c}>
                        {seg.t}
                      </span>
                    ))}
                    {"\n"}
                  </span>
                ))}
              </pre>
            </div>
          );
        })}

        {/* live prompt line */}
        <div>
          <Prompt />
          {typing !== null && <span className="text-white">{typing}</span>}
          <span aria-hidden className="nb-cursor" />
        </div>
      </div>
    </div>
  );
}

function Prompt() {
  return (
    <span className="select-none">
      <span className="font-bold text-nbyellow">{HOST}</span>
      <span className="text-zinc-500">:</span>
      <span className="font-bold text-nbblue">~</span>
      <span className="text-zinc-500">$ </span>
    </span>
  );
}
