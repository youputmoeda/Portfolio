import React from "react";

export const ProjectCTA = ({ href, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="group inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white shadow-card/30 backdrop-blur transition hover:bg-white/10 hover:shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
    >
      {label}
      <span className="transition-transform group-hover:translate-x-0.5" aria-hidden>
        →
      </span>
    </a>
  );
};

