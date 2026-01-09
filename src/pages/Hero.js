import TypewriterComponent from "typewriter-effect";
import { styles } from "../styles";

import { motion } from "framer-motion";

const Hero = ({ setLoadingProgress }) => {
	return (
		<section className={`relative w-full h-screen mx-auto`}>

			<div
				className={`px-0 absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
			>
				<div className='flex flex-col justify-center items-center mt-5'>
					<div className='w-5 h-5 rounded-full bg-[#915EFF]' />
					<div className='w-1 sm:h-80 h-40 violet-gradient' />
				</div>

				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hi <span className="align-middle lg:text-[60px] sm:text-[45px] xs:text-[38px] text-[30px]">👋</span> I'm
						<span className='text-[#915EFF]'>
							<TypewriterComponent
								options={{
									strings: [
										"João",
										"A Problem Solver",
										"A Solution Engineer",
										"A Full Stack Developer",
										"A Game Developer",
										"A Project Manager",
									],
									pauseFor: 1500,
									autoStart: true,
									loop: true,
								}}
							/>
						</span>
					</h1>
					<span className={`${styles.heroSubText} mt-2
						text-white-100`}
					>
						I'm a Software Engineer focused on turning <br /> ideas into tailored, user-centered solutions.
					</span>
				</div>
			</div>
			{/* <Experience setLoadingProgress={setLoadingProgress}/> */}

			<div className="absolute xs:bottom-10
			bottom-32 w-full flex justify-center
			items-center">
				<a href="#about">
					<div className="w-[35px] h-[64px]
					rounded-3xl border-4 border-secondary
					flex justify-center items-start p-2">
						<motion.div
							animate={{
								y: [0, 24, 0],
							}}
							transition={{
								duration: 1.5,
								repeat: Infinity,
								repeatType: 'loop'
							}}
							className="w-3 h-3 rounded-full
							bg-secondary mb-1"
						/>
					</div>
				</a>
			</div>
		</section>
	)
}

export default Hero;