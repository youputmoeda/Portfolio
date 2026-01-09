import React, { useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Navigation, Pagination, Zoom } from "swiper/modules";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/pagination";

import { ProjectSlideCard } from "./components/ProjectSlideCard";

export const ProjectsCarousel = ({ projects, shouldReduceMotion, isTabletOrBelow }) => {
  const pagination = useMemo(() => {
    return {
      clickable: true,
      renderBullet: function (_, className) {
        return '<span class="' + className + '"></span>';
      },
    };
  }, []);

  return (
    <Swiper
      grabCursor
      spaceBetween={16}
      navigation
      pagination={pagination}
      keyboard
      zoom
      modules={[Zoom, Navigation, Pagination, Keyboard]}
      className="projects-swiper relative w-full h-full mt-10 text-white/80"
      aria-label="Projects carousel"
    >
      {projects.map((project, index) => (
        <SwiperSlide key={`${project.name}-${index}`} className="flex items-stretch">
          <ProjectSlideCard
            project={project}
            index={index}
            total={projects.length}
            shouldReduceMotion={shouldReduceMotion}
            isTabletOrBelow={isTabletOrBelow}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

