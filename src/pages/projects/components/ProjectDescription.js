import React from "react";

export const ProjectDescription = ({ description }) => {
  return (
    <ul className="space-y-4">
      {description.map((point, index) => (
        <li
          key={`description-point-${index}`}
          className="flex gap-3 text-base tablet:text-[17px] text-white/75 leading-relaxed"
        >
          <span className="mt-[0.55rem] h-1.5 w-1.5 shrink-0 rounded-full bg-white/70" />
          <span>{point}</span>
        </li>
      ))}
    </ul>
  );
};

