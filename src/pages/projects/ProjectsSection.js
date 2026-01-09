import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { styles } from "../../styles";
import { projects } from "../../constants";
import { textVariant } from "../../utils/motion";
import { useIsTabletOrBelow } from "./hooks/useIsTabletOrBelow";
import { ProjectsCarousel } from "./ProjectsCarousel";

import "../customSwiper.css";

export const ProjectsSection = () => {
  const isTabletOrBelow = useIsTabletOrBelow();
  const shouldReduceMotion = useReducedMotion();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Projects I have been part of</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <ProjectsCarousel
        projects={projects}
        shouldReduceMotion={shouldReduceMotion}
        isTabletOrBelow={isTabletOrBelow}
      />
    </>
  );
};

