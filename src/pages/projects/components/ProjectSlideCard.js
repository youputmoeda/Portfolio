import React from "react";
import { motion } from "framer-motion";
import { ProjectCTA } from "./ProjectCTA";
import { ProjectDescription } from "./ProjectDescription";
import { ProjectMedia } from "./ProjectMedia";
import { ProjectTags } from "./ProjectTags";

const ProjectMeta = ({ indexLabel, totalLabel }) => {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
        <span className="inline-block h-1.5 w-1.5 rounded-full bg-white/60" aria-hidden />
        <span>Case study</span>
      </div>

      <div className="text-xs font-semibold text-white/70 tabular-nums">
        {indexLabel} / {totalLabel}
      </div>
    </div>
  );
};

export const ProjectSlideCard = ({
  project,
  index,
  total,
  shouldReduceMotion,
  isTabletOrBelow,
}) => {
  const indexLabel = String(index + 1).padStart(2, "0");
  const totalLabel = String(total).padStart(2, "0");

  return (
    <div className="relative mx-auto w-full max-w-6xl h-[min(70vh,680px)]">
      <div className="absolute inset-0 rounded-3xl overflow-hidden" aria-hidden>
        <div className="absolute inset-0 green-pink-gradient opacity-35 blur-3xl" />
      </div>

      <div className="relative h-full overflow-hidden rounded-3xl border border-white/10 bg-black-100/30 p-5 tablet:p-8 shadow-card backdrop-blur-xl">
        <div className="grid h-full min-h-0 grid-cols-1 tablet:grid-cols-12 gap-8 tablet:gap-10 items-stretch">
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="tablet:col-span-5 flex flex-col h-full min-h-0 gap-6"
          >
            <ProjectMeta indexLabel={indexLabel} totalLabel={totalLabel} />

            <div className="space-y-3">
              <h3 className="text-2xl tablet:text-[32px] font-black text-white leading-[1.1] tracking-[-0.015em]">
                {project.name}
              </h3>
              <div className="h-px w-full bg-white/10" aria-hidden />
            </div>

            <div className="flex-1 min-h-0 overflow-auto pr-2 max-w-[62ch]">
              <ProjectDescription description={project.description} />
            </div>

            <div className="space-y-4 pt-1">
              <ProjectTags tags={project.tags} />

              <div>
                <ProjectCTA href={project.source_code_link} label="See more" />
              </div>
            </div>

            {isTabletOrBelow ? <div className="h-px w-full bg-white/10" aria-hidden /> : null}
          </motion.div>

          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 12 }}
            animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut", delay: 0.05 }}
            className="tablet:col-span-7 h-full min-h-0"
          >
            <ProjectMedia projectName={project.name} sourceMedia={project.source_media} />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

