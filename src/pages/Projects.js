import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { projects } from "../constants";
import { useEffect, useRef, useState } from "react";

import { Keyboard, Navigation, Pagination, Zoom } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import './customSwiper.css';
import { Link } from "@mui/material";


const Projects = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 986);

    // Atualiza o estado isMobile quando a janela é redimensionada
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 986);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
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
    const textOpacityTablet = useTransform(scrollYProgress, [0.45, 0.6], [0, 1]);
    
    const textOpacity = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
    const textX = useTransform(scrollYProgress, [0.6, 0.8], [-200, 1]);

    const imagesX = useTransform(scrollYProgress, [0.6, 0.8], [200, 0]);

    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        },
    };

    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Projects I have been part of</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>

            <Swiper
                grabCursor={true}
                spaceBetween={10}
                navigation={true}
                pagination={pagination}
                keyboard={true}
                zoom={true}
                modules={[Zoom, Navigation, Pagination, Keyboard]}
                className="relative w-full h-full"
            >
                {projects.map((project, index) => (
                    <SwiperSlide key={index} className="flex justify-between items-center flex-col tablet:flex-row">
                        <div ref={ref} className="relative">
                            {/* Imagem Externa */}
                            <motion.div
                                className="absolute inset-0 w-full h-full rounded-xl
                                    green-pink-gradient"
                                style={{ scale: outerScale }}
                            />

                            {/* Texto à Esquerda */}
                            <div className="relative flex flex-col tablet:flex-row w-full h-full p-5 tablet:p-20 space-x-0 tablet:space-x-20">
                                <motion.div
                                    className="tablet:w-1/2 flex flex-col justify-center items-start space-y-4"
                                    style={{
                                        opacity: isMobile ? textOpacityTablet : textOpacity,
                                        x: isMobile ? null : textX,
                                    }}
                                >
                                    <h2 className="text-xl tablet:text-2xl font-bold text-white">{project.name}</h2>
                                    <div className="text-sm tablet:text-base text-gray-200">
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
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                        {project.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className={`bg-gradient-to-r ${tag.color} px-3 py-1 text-m font-bold rounded-full`}
                                            >
                                                {tag.name}
                                            </span>
                                        ))}
                                    </div>
                                    <Link
                                        href={project.source_code_link}
                                        target="_blank"
                                        style={{ textDecoration: 'none' }}
                                        className="inline-flex items-center justify-center px-4 py-2 mt-4 !text-white no-underline bg-blue-500 rounded-lg shadow-tablet hover:bg-blue-600 hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                                    >
                                        {'See more'}
                                    </Link>
                                </motion.div>

                                <motion.div
                                    className="flex flex-col justify-center items-center w-full my-[50px] tablet:my-[0px] tablet:w-1/2 space-y-4"
                                    style={{
                                        opacity: computerOpacity,
                                        scale: computerScale,
                                        x: isMobile ? null : imagesX,
                                    }}
                                >
                                    {/* Imagem 1 */}
                                    <div
                                        className="flex flex-col tablet:flex-row justify-center space-x-0 tablet:space-x-4 w-full"
                                    >
                                        <motion.img
                                            src={project.source_media.image1}
                                            loading="lazy"
                                            alt={`Image 1 of ${project.name}`}
                                            className="w-full tablet:w-1/2 mb-[10px] tablet:mb-[0px] h-auto object-fill rounded-lg shadow-lg " />

                                        <motion.img
                                            src={project.source_media.image2}
                                            loading="lazy"
                                            alt={`Image 2 of ${project.name}`}
                                            className="w-full tablet:w-1/2 h-auto object-fill rounded-lg shadow-lg" />
                                    </div>

                                    {/* Vídeo */}
                                    <div className="relative w-full h-[30vh] tablet:h-[40vh] mb-4">
                                        <iframe
                                            title={project.name}
                                            src={project.source_media.video}
                                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                            className="w-full h-full object-none rounded-lg shadow-lg"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper >
        </>
    );
}

export default SectionWrapper(Projects, "Projects");