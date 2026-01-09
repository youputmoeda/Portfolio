import React, { useMemo, useState } from "react";
import { MediaActionButton } from "./MediaActionButton";
import { MediaLightboxModal } from "./MediaLightboxModal";

const MediaTile = ({ children, label, className }) => {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-2xl border border-white/10 bg-black-200/30 backdrop-blur",
        className,
      ].join(" ")}
    >
      {label ? (
        <div className="pointer-events-none absolute left-3 top-3 z-10 rounded-full border border-white/10 bg-black-100/30 px-3 py-1 text-xs font-semibold text-white/90 backdrop-blur">
          {label}
        </div>
      ) : null}

      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
      {children}
    </div>
  );
};

export const ProjectMedia = ({ projectName, sourceMedia }) => {
  const [activeModal, setActiveModal] = useState(null); // "featured" | "ui" | null

  const hasVideo = Boolean(sourceMedia?.video);

  const featuredImage = sourceMedia?.image1 || sourceMedia?.image2;
  const uiImage = sourceMedia?.image2 || sourceMedia?.image1;
  const hasFeaturedImage = Boolean(featuredImage);
  const hasUiImage = Boolean(uiImage);

  const modalTitle = useMemo(() => {
    if (activeModal === "ui") return `${projectName} — UI`;
    if (activeModal === "featured") return `${projectName} — Featured`;
    return projectName;
  }, [activeModal, projectName]);

  return (
    <div className="h-full min-h-0 flex flex-col gap-4">
      <MediaTile label={hasVideo ? "Demo" : "Featured"} className="flex-1 min-h-0">
        {hasVideo ? (
          <div className="h-full w-full">
            <iframe
              title={`${projectName} demo`}
              src={sourceMedia.video}
              loading="lazy"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="h-full w-full"
            />
          </div>
        ) : hasFeaturedImage ? (
          <div className="flex h-full w-full items-center justify-center p-3">
            <img
              src={featuredImage}
              loading="lazy"
              decoding="async"
              alt={`Featured screenshot of ${projectName}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ) : null}
      </MediaTile>

      <div className="flex flex-wrap gap-3 shrink-0">
        {hasUiImage ? <MediaActionButton label="Show UI" onClick={() => setActiveModal("ui")} /> : null}
        {hasFeaturedImage ? (
          <MediaActionButton label="Show featured" onClick={() => setActiveModal("featured")} />
        ) : null}
      </div>

      <MediaLightboxModal
        isOpen={activeModal !== null}
        title={modalTitle}
        onClose={() => setActiveModal(null)}
      >
        {activeModal === "ui" ? (
          <div className="w-full max-h-full overflow-hidden rounded-2xl border border-white/10 bg-black flex items-center justify-center">
            <img
              src={uiImage}
              loading="lazy"
              decoding="async"
              alt={`UI screenshot of ${projectName}`}
              className="max-h-full w-auto max-w-full object-contain"
            />
          </div>
        ) : null}

        {activeModal === "featured" ? (
          <div className="w-full max-h-full overflow-hidden rounded-2xl border border-white/10 bg-black flex items-center justify-center">
            <img
              src={featuredImage}
              loading="lazy"
              decoding="async"
              alt={`Featured screenshot of ${projectName}`}
              className="max-h-full w-auto max-w-full object-contain"
            />
          </div>
        ) : null}
      </MediaLightboxModal>
    </div>
  );
};

