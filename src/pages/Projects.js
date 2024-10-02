import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import gradientBlock from "../assets/gradientBlue.jpg";
import { projects } from "../constants";
import { useRef } from "react";

import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Link } from "@mui/material";


const Projects = () => {
    const ref = useRef(null);

    // Scroll progress associado ao ref
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "center center"],
    });

    // Escala da imagem externa
    const outerScale = useTransform(scrollYProgress, [0, 0.5], [0.5, 1]);

    // Animação de opacidade e escala para os computadores e texto
    const computerOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const computerScale = useTransform(scrollYProgress, [0.6, 0.8], [0.8, 1]);

    // Garantir que o texto e as imagens mantêm a opacidade e escala no fim da animação
    const textOpacity = useTransform(scrollYProgress, [0.6, 1], [0, 1]);
    const textX = useTransform(scrollYProgress, [0.6, 0.8], [-200, 1]);

    const imagesX = useTransform(scrollYProgress, [0.6, 0.8], [200, 0]);

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Projects I have been part of</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <Swiper
                effect={'cards'}
                grabCursor={true}
                modules={[EffectCards]}
            >
                <section className="relative h-[400vh] 2-[400vh] flex justify-center items-center">
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="relative h-[80vh] w-full flex justify-between items-center">

                            <div ref={ref} className="relative h-[80vh] w-full flex justify-between items-center">

                                {/* Imagem Externa */}
                                <motion.div
                                    className="absolute inset-0 w-full h-full"
                                    style={{ scale: outerScale }}
                                >
                                    <img
                                        src={gradientBlock}
                                        alt="Imagem Externa"
                                        className="w-full h-full object-cover rounded-xl" />
                                </motion.div>

                                {/* Texto à Esquerda */}
                                <motion.div
                                    className="w-[40%] h-full flex flex-col justify-center items-start space-y-4 p-8"
                                    style={{
                                        opacity: textOpacity,
                                        x: textX,
                                    }}
                                >
                                    <h2 className="text-4xl font-bold text-gray-800">{project.name}</h2>
                                    <p className="text-lg text-gray-600">
                                        {project.description}
                                    </p>
                                    <Link href={project.source_code_link} underline="hover" target="_blank">
                                        {'Link to project'}
                                    </Link>
                                </motion.div>

                                <motion.div
                                    className="flex flex-col justify-between w-[55%] h-full"
                                    style={{
                                        opacity: computerOpacity,
                                        scale: computerScale,
                                        x: imagesX,
                                    }}
                                >
                                    {/* Imagem 1 */}
                                    <div className="relative right-8 flex w-[45vh] h-[45vh]">
                                        <motion.img
                                            src={project.source_media.image1}
                                            alt={`Image 1 of ${project.name}`}
                                            className="w-full h-full object-cover" />

                                        <motion.img
                                            src={project.source_media.image2}
                                            alt={`Image 2 of ${project.name}`}
                                            className="w-full h-full object-cover" />
                                    </div>

                                    {/* Vídeo */}
                                    <div className="relative w-[80vh] h-[80vh] mb-4">
                                        <motion.video
                                            src={project.source_media.video}
                                            controls
                                            className="w-full h-full object-cover" />
                                    </div>
                                </motion.div>
                            </div>
                        </SwiperSlide>
                    ))}
                </section >
            </Swiper>
        </>
    );
}

export default SectionWrapper(Projects, "projects");