import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { experiences } from '../constants';
import { textVariant } from '../utils/motion';
import { SectionWrapper } from "../hoc/index";
import 'react-vertical-timeline-component/style.min.css';
import { useEffect, useState } from 'react';

const ExperienceCard = ({ experience, isMobile }) => (
	<VerticalTimelineElement
		contentStyle={{
			background: '#1d1836',
			color: '#fff'
		}}
		contentArrowStyle={{ borderRight: '7px solid #232631' }}
		date={experience.date}
		iconStyle={
			{
				width: isMobile ? '50px' : '70px',
				height: isMobile ? '50px' : '70px',
				transform: 'translateX(-4.1px)',
				background: experience.iconBg
			}
		}
		icon={
			<div className='flex justify-center
			items-center w-full h-full'>
				<img
					src={experience.icon}
					alt={experience.company_name}
					className='w-[75%] h-[75%]
					object-contain'
				/>
			</div>
		}
	>
		<div>
			<h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
			<p className='text-secondary text-[16px] 
			font-semibold' style={{ margin: 0 }}>{experience.company_name}</p>
		</div>

		<ul className='mt-5 list-disc ml-5 space-y-2'>
			{experience.points.map((point, index) => (
				<li
					key={`experience-point-${index}`}
					className='text-white-100 text-[14px]
					pl-1 tracking-wider'
				>
					{point}
				</li>
			))}

		</ul>
	</VerticalTimelineElement>
)

const Experience = () => {
	const [isMobile, setIsMobile] = useState(window.innerWidth <= 1169);

	// Atualiza o estado isMobile quando a janela é redimensionada
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth <= 1169);
		};

		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>What I have done so far</p>
				<h2 className={styles.sectionHeadText}>Work Experience.</h2>
			</motion.div>

			<div className='mt-20 flex flex-col'>
				<VerticalTimeline>
					{experiences.map((experience, index) => (
						<ExperienceCard key={index}
							experience={experience}
							isMobile={isMobile}
						/>
					))}
				</VerticalTimeline>
			</div>
		</>
	)
};

export default SectionWrapper(Experience, "work");