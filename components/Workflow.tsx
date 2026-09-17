"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { workflowSteps } from "@/lib/content";

const STEP_MS = 2400;
const RESUME_MS = 7000;

/** Straight process line — animated connectors only in the gaps between circles. */
function ProcessPipeline({
  active,
  tick,
  playing,
  onSelect,
}: {
  active: number;
  tick: number;
  playing: boolean;
  onSelect: (i: number) => void;
}) {
  const total = workflowSteps.length;

  return (
    <div className="rounded-2xl border border-hair bg-[#141414] px-4 py-8 sm:px-8 sm:py-10">
      <div className="mb-8 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.12em] text-ink-faint">
        <span>Molecule idea</span>
        <span className="hidden text-sage sm:inline">Cell-free pathway</span>
        <span>Manufacturing</span>
      </div>

      <div className="flex items-center">
        {workflowSteps.map((s, i) => {
          const done = i < active;
          const isActive = i === active;
          // Animate the gap AFTER this step — never draws under/through a circle
          const gapFill = i < active ? 1 : i === active && playing ? tick : 0;

          return (
            <div key={s.n} className="contents">
              <button
                type="button"
                onClick={() => onSelect(i)}
                aria-current={isActive ? "step" : undefined}
                className="group relative z-10 flex w-11 flex-shrink-0 flex-col items-center sm:w-12"
              >
                <span
                  className={`flex h-11 w-11 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 sm:h-12 sm:w-12 sm:text-sm ${
                    isActive
                      ? "border-green bg-green text-[#0d1610] shadow-[0_0_22px_rgba(37,180,88,0.4)]"
                      : done
                        ? "border-green bg-[#141414] text-green"
                        : "border-hair bg-[#141414] text-ink-faint group-hover:border-ink-dim group-hover:text-ink"
                  }`}
                >
                  {s.n}
                </span>
              </button>

              {i < total - 1 && (
                <div className="relative mx-2 h-11 flex-1 sm:mx-3 sm:h-12" aria-hidden>
                  <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 overflow-hidden rounded-full bg-hair">
                    <div
                      className="h-full rounded-full bg-green"
                      style={{
                        width: `${gapFill * 100}%`,
                        transition:
                          playing && i === active ? "none" : "width 280ms ease-out",
                      }}
                    />
                  </div>
                  {i === active && playing && gapFill > 0.02 && gapFill < 0.97 && (
                    <span
                      className="absolute top-1/2 z-[1] h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-soft shadow-[0_0_8px_rgba(37,180,88,0.85)]"
                      style={{ left: `${gapFill * 100}%` }}
                    />
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-3 flex items-start">
        {workflowSteps.map((s, i) => {
          const done = i < active;
          const isActive = i === active;
          return (
            <div key={`label-${s.n}`} className="contents">
              <div className="w-11 flex-shrink-0 text-center sm:w-12">
                <span
                  className={`block text-[0.68rem] font-semibold leading-snug sm:text-xs ${
                    isActive ? "text-ink" : done ? "text-ink-dim" : "text-ink-faint"
                  }`}
                >
                  {s.title}
                </span>
              </div>
              {i < total - 1 && (
                <div className="mx-2 min-w-0 flex-1 sm:mx-3" aria-hidden />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function Workflow() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [tick, setTick] = useState(0);
  const [inView, setInView] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);

  const total = workflowSteps.length;
  const step = workflowSteps[active];
  const sectionRef = useRef<HTMLElement>(null);
  const resumeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeRef = useRef(active);
  activeRef.current = active;

  const clearResume = () => {
    if (resumeTimer.current) {
      clearTimeout(resumeTimer.current);
      resumeTimer.current = null;
    }
  };

  const pauseForUser = useCallback(() => {
    setPlaying(false);
    setTick(0);
    clearResume();
    resumeTimer.current = setTimeout(() => setPlaying(true), RESUME_MS);
  }, []);

  const select = useCallback(
    (i: number, fromUser = true) => {
      setActive(Math.max(0, Math.min(total - 1, i)));
      setTick(0);
      if (fromUser) pauseForUser();
    },
    [total, pauseForUser]
  );

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    if (mq.matches) setPlaying(false);
    const onChange = () => {
      setReducedMotion(mq.matches);
      if (mq.matches) setPlaying(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting && entry.intersectionRatio > 0.35),
      { threshold: [0, 0.35, 0.6] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!playing || !inView || reducedMotion) return;

    let raf = 0;
    let start = performance.now();

    const loop = (now: number) => {
      const t = Math.min(1, (now - start) / STEP_MS);
      setTick(t);
      if (t >= 1) {
        setActive((a) => (a + 1) % total);
        setTick(0);
        start = now;
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [playing, inView, reducedMotion, active, total]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key === "ArrowRight" || e.key === "ArrowDown") {
        e.preventDefault();
        select(activeRef.current + 1, true);
      }
      if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
        e.preventDefault();
        select(activeRef.current - 1, true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [select]);

  useEffect(() => () => clearResume(), []);

  return (
    <section ref={sectionRef} className="py-24 md:py-28">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-[560px]">
            <p className="text-sm font-semibold text-sage">How it works</p>
            <h2 className="mt-3 font-display text-[1.9rem] font-extrabold leading-[1.1] tracking-tight sm:text-[2.5rem]">
              Six steps from molecule idea to manufacturing.
            </h2>
          </div>

          {!reducedMotion && (
            <button
              type="button"
              onClick={() => {
                clearResume();
                setPlaying((p) => !p);
                setTick(0);
              }}
              className="inline-flex items-center gap-2 rounded-full border border-hair px-4 py-2 text-sm font-semibold text-ink-dim transition-colors hover:border-ink-dim hover:text-ink"
              aria-label={playing ? "Pause autoplay" : "Play autoplay"}
            >
              {playing && inView ? (
                <>
                  <Pause className="h-3.5 w-3.5" />
                  Autoplaying
                </>
              ) : (
                <>
                  <Play className="h-3.5 w-3.5 translate-x-px" />
                  Play
                </>
              )}
            </button>
          )}
        </div>

        <div className="mt-12">
          <ProcessPipeline
            active={active}
            tick={tick}
            playing={playing && inView}
            onSelect={(i) => select(i, true)}
          />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-10 border-t border-hair pt-10 md:grid-cols-[200px_1fr] md:gap-14">
          <div>
            <div className="font-display text-5xl font-extrabold text-green/30">
              {step.n}
            </div>
            <div className="mt-2 text-sm font-semibold text-sage">{step.short}</div>
          </div>
          <div>
            <h3 className="font-display text-2xl font-bold tracking-tight sm:text-[1.85rem]">
              {step.title}
            </h3>
            <p className="mt-4 max-w-[540px] text-[1.05rem] leading-relaxed text-ink-dim">
              {step.body}
            </p>
            <div className="mt-8 flex gap-3">
              <button
                type="button"
                disabled={active === 0}
                onClick={() => select(active - 1, true)}
                className="rounded-full border border-hair px-5 py-2.5 text-sm font-semibold text-ink-dim transition-colors hover:border-ink-dim hover:text-ink disabled:cursor-not-allowed disabled:opacity-30"
              >
                Previous
              </button>
              <button
                type="button"
                onClick={() => select(active === total - 1 ? 0 : active + 1, true)}
                className="rounded-full bg-green px-5 py-2.5 text-sm font-semibold text-[#0d1610] transition-colors hover:bg-green-soft"
              >
                Next step
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
