"use client";

import { motion } from "framer-motion";
import { team } from "@/lib/content";

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M4.98 3.5C4.98 4.9 3.9 6 2.5 6S0 4.9 0 3.5 1.1 1 2.5 1s2.48 1.1 2.48 2.5zM.5 8h4V23h-4V8zm7 0h3.8v2.05h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V23h-4v-6.9c0-1.65-.03-3.77-2.3-3.77-2.3 0-2.66 1.8-2.66 3.65V23h-4V8z" />
    </svg>
  );
}

/** Founders-forward. Full scientific roster stays available via `full`. */
export default function Team({ full = false }: { full?: boolean }) {
  const members = full ? team : team.slice(0, 2);

  return (
    <section id="team" className="py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <div className="max-w-[520px]">
          <p className="text-sm font-semibold text-sage">Team</p>
          <h2 className="mt-3 font-display text-[1.7rem] font-extrabold tracking-tight sm:text-[2.1rem]">
            Built by scientists who lived the bottleneck.
          </h2>
          {!full && (
            <p className="mt-4 text-[0.98rem] text-ink-dim">
              Supported by scientific managers and process engineers in
              Bengaluru.
            </p>
          )}
        </div>

        <div
          className={`mt-12 grid grid-cols-1 gap-0 border-y border-hair ${
            full
              ? "sm:grid-cols-2 sm:gap-px sm:border-0 sm:bg-hair lg:grid-cols-3"
              : "md:grid-cols-2 md:divide-x md:divide-hair"
          }`}
        >
          {members.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className={`bg-charcoal py-8 ${
                full ? "p-7 sm:p-7" : "md:px-10 md:first:pl-0 md:last:pr-0"
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-green to-sage font-display text-sm font-extrabold text-[#0d1610]">
                  {member.initials}
                </div>
                <div>
                  <h4 className="font-display text-[1.05rem] font-bold leading-tight">
                    {member.name}
                  </h4>
                  <div className="mt-0.5 text-sm text-ink-dim">{member.role}</div>
                </div>
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto text-ink-faint transition-colors hover:text-green"
                    aria-label={`${member.name} on LinkedIn`}
                  >
                    <LinkedinIcon className="h-[18px] w-[18px]" />
                  </a>
                )}
              </div>

              {full && (
                <div className="mt-5 border-t border-hair pt-4 text-xs text-ink-dim">
                  <p>{member.qualifications[0]}</p>
                  {member.experience[0] && (
                    <p className="mt-1 text-ink-faint">{member.experience[0]}</p>
                  )}
                </div>
              )}

              {!full && member.experience[0] && (
                <p className="mt-4 text-sm text-ink-faint">
                  {member.experience.slice(0, 2).join(" · ")}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
