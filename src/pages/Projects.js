import { motion, useScroll, useTransform } from "framer-motion";
import { SectionWrapper } from "../hoc"
import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import gradientBlock from "../assets/gradientBlue.jpg";
import SKProject from "../assets/SKProject.png";
import { useRef } from "react";

const dataSource = [
    'https://js.devexpress.com/Content/images/doc/24_1/PhoneJS/person1.png',
    'https://js.devexpress.com/Content/images/doc/24_1/PhoneJS/person2.png',
    'https://js.devexpress.com/Content/images/doc/24_1/PhoneJS/person3.png'
];

const Projects = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "start start"],
    });

    const scale = useTransform(scrollYProgress, [0, 0.1, 0.5], [1, 1, 3]);
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Projects i have been part of</p>
                <h2 className={styles.sectionHeadText}>Projects.</h2>
            </motion.div>
            <section style={{ position: "relative", height: "100vh", width: "100vw" }}>
                <div ref={ref} style={{ height: "100%", width: "100%" }}>
                    <motion.img
                        src={gradientBlock}
                        className="w-full"
                        style={{
                            scale,
                            width: "100vw",
                            height: "100vh",
                            top: 0,
                            left: 0,
                            zIndex: -1,
                          }}
                    />
                </div>
            </section>
        </>
    )
}

export default SectionWrapper(Projects, "projects");