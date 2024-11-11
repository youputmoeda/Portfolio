import React from "react";
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from "../styles";

import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/index";

const ServiceCard = ({ index, title, icon }) => {
	return (
		<Tilt className="xs:w-[250px] w-full">
			<motion.div
				variants={fadeIn("right", "spring", index * 0.5, 0.75)}
				className="w-full green-pink-gradient p-[1px]
				rounded-[20px] shadow-card"
			>
				<div
					options={{
						max: 45,
						scale: 1,
						speed: 450
					}}
					className="bg-tertiary rounded-[20px]
					py-5 px-12 min-h-[280px] flex
					justify-evenly items-center flex-col"
				>
					<img src={icon} alt='web-development' className='w-20 h-20 object-contain' />

					<h3 className='text-white text-[20px] font-abeezee font-bold text-center'>
						{title}
					</h3>
				</div>
			</motion.div>
		</Tilt>
	)
}

const About = () => {
	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px]
				max-w-3xl leading-[30px]"
			>
				I'm a Software Engineer with a passion for working across all aspects of web
				development, with experience in consulting and startup environments. I enjoy
				challenges and thrive in dynamic setups, bringing an adaptable and
				collaborative spirit to the teams I work with. I'm driven to expand my
				knowledge and master diverse technologies in an ever-changing environment.
			</motion.p>
			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title}
						index={index} {...service} />
				))}
			</div>
		</>
	)
}

export default SectionWrapper(About, "about");