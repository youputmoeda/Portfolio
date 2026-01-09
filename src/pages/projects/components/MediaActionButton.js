import React from "react";

export const MediaActionButton = ({ label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="min-h-[44px] rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 shadow-card/20 backdrop-blur transition hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
    >
      {label}
    </button>
  );
};

