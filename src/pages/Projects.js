import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { useRef } from "react";

import { EffectCards, Mousewheel } from 'swiper/modules';
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
                mousewheel={scrollYProgress === 1 ? true : false}
                modules={[Mousewheel, EffectCards]}
            >
                <section className="relative h-[400vh] w-[400vh] flex justify-center items-center">
                    {projects.map((project, index) => (
                        <SwiperSlide key={index} className="relative h-[80vh] w-full flex justify-between items-center">
                            <div ref={ref} className="relative h-[80vh] w-full flex justify-between items-center">
                                {/* Imagem Externa */}
                                <motion.div
                                    className="absolute inset-0 w-full h-full rounded-xl
                                    green-pink-gradient"
                                    style={{ scale: outerScale }}
                                />

                                {/* Texto à Esquerda */}
                                <div className="relative flex w-full h-full p-8 space-x-20">
                                    <motion.div
                                        className="w-1/2 flex flex-col justify-center items-start space-y-4"
                                        style={{
                                            opacity: textOpacity,
                                            x: textX,
                                        }}
                                    >
                                        <h2 className="text-2xl font-bold text-white">{project.name}</h2>
                                        <p className="text-base text-gray-200">
                                            <ul className="list-disc list-inside space-y-4">
                                                {project.description.map((point, index) => (
                                                    <li
                                                        key={`description-point-${index}`}
                                                        className="mb-2"
                                                    >
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>
                                        </p>
                                        <Link href={project.source_code_link} underline="hover" target="_blank" className="text-blue-300 hover:underline">
                                            {'Link to project'}
                                        </Link>
                                    </motion.div>

                                    <motion.div
                                        className="flex flex-col justify-center items-center w-1/2 space-y-4"
                                        style={{
                                            opacity: computerOpacity,
                                            scale: computerScale,
                                            x: imagesX,
                                        }}
                                    >
                                        {/* Imagem 1 */}
                                        <div className="flex justify-center space-x-4 w-full">
                                            <motion.img
                                                src={project.source_media.image1}
                                                alt={`Image 1 of ${project.name}`}
                                                className="w-1/2 h-auto object-cover rounded-lg shadow-lg" />

                                            <motion.img
                                                src={project.source_media.image2}
                                                alt={`Image 2 of ${project.name}`}
                                                className="w-1/2 h-auto object-cover rounded-lg shadow-lg" />
                                        </div>

                                        {/* Vídeo */}
                                        <div className="relative w-full h-[40vh] mb-4">
                                            <iframe
                                                title={project.name}
                                                src={project.source_media.video}
                                                frameborder="0"
                                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                                allowfullscreen
                                                className="w-full h-full object-cover rounded-lg shadow-lg"
                                            />
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </section >
            </Swiper>
        </>
    );
}

export default SectionWrapper(Projects, "projects");