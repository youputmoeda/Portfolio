import React from "react";

export const ProjectTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2.5">
      {tags.map((tag) => (
        <span
          key={tag.name}
          className={`bg-gradient-to-r ${tag.color} px-3 py-1 text-sm font-bold rounded-full`}
        >
          {tag.name}
        </span>
      ))}
    </div>
  );
};

