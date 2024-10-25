/* import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
} from "../assets"; */

import bi4all from "../assets/bi4all.webp";
import fakedoor from "../assets/fakedoor.svg";
import gamePad from "../assets/socialMedia.png";
import projectManager from "../assets/ProjectManager.png";
import web from "../assets/WebDeveloper.png";
import fullStack from "../assets/FullStack.png";
import SKproject from "../assets/SKProject.png";
import SKprojectFront from "../assets/SKProjectFront.png";
import FDunityProject from "../assets/FakedoorUnityPrint.png";
import FDprojectFront from "../assets/Fakedoor-LandingPage.png";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "Game Developer",
		icon: gamePad,
	},
	{
		title: "Full-Stack Developer",
		icon: fullStack,
	},
	{
		title: "Project Manager",
		icon: projectManager,
	},
];

const technologies = [
	{
		name: "HTML 5",
		/* icon: html, */
	},
	{
		name: "CSS 3",
		/* icon: css, */
	},
	{
		name: "JavaScript",
		/* icon: javascript, */
	},
	{
		name: "TypeScript",
		/* icon: typescript, */
	},
	{
		name: "React JS",
		/* icon: reactjs, */
	},
	{
		name: "Redux Toolkit",
		/* icon: redux, */
	},
	{
		name: "Tailwind CSS",
		/* icon: tailwind, */
	},
	{
		name: "Node JS",
		/* icon: nodejs, */
	},
	{
		name: "MongoDB",
		/* icon: mongodb, */
	},
	{
		name: "Three JS",
		/* icon: threejs, */
	},
	{
		name: "git",
		/* icon: git, */
	},
	{
		name: "figma",
		/* icon: figma, */
	},
	{
		name: "docker",
		/* icon: docker, */
	},
];

const experiences = [
	{
		title: "Fullstack Software Engineer",
		company_name: "BI4ALL",
		icon: bi4all,
		iconBg: "#fff",
		date: "Sept 2022 - July 2023",
		points: [
			"Integrated the Workflow Management API into the Employee Portal, amplifying its functionalities and providing a unified platform.",
			"Identified and resolved system bottlenecks, ensuring optimal performance and responsiveness to user interactions within the Employee Portal.",
			"Responsible for the creation of new features within the Employee Portal, elevating the overall user experience and engagement.",
			"Actively collaborated in defining and implementing best development practices, fostering an environment of efficiency, consistency, and innovation.",
		],
	},
	{
		title: "Software Developer",
		company_name: "Fakedoor",
		icon: fakedoor,
		iconBg: "#fff",
		date: "July 2023 - July 2024",
		points: [
			"Developed 450+ Unity models for WebGL, emphasizing interactivity and responsive user feedback.",
			"Optimized end-to-end workflows for operational efficiency and improved team experience.",
			"Utilized Git on Bitbucket, managing branches, commits, and conflicts for cohesive code history.",
			"Contributed significantly to a project release, handling critical responsibilities for success.",
			"Collaborated with various teams, including design, frontend, and backend development, ensuring cohesion and effectiveness in projects."
		],
	},
	/* {
		title: "Web Developer",
		company_name: "Shopify",
		/* icon: shopify, */
	/*
	iconBg: "#383E56",
	date: "Jan 2022 - Jan 2023",
	points: [
		"Developing and maintaining web applications using React.js and other related technologies.",
		"Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
		"Implementing responsive design and ensuring cross-browser compatibility.",
		"Participating in code reviews and providing constructive feedback to other developers.",
	],
},*/
];

const testimonials = [
	{
		testimonial:
			"I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
		name: "Sara Lee",
		designation: "CFO",
		company: "Acme Co",
		image: "https://randomuser.me/api/portraits/women/4.jpg",
	},
	{
		testimonial:
			"I've never met a web developer who truly cares about their clients' success like Rick does.",
		name: "Chris Brown",
		designation: "COO",
		company: "DEF Corp",
		image: "https://randomuser.me/api/portraits/men/5.jpg",
	},
	{
		testimonial:
			"After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
		name: "Lisa Wang",
		designation: "CTO",
		company: "456 Enterprises",
		image: "https://randomuser.me/api/portraits/women/6.jpg",
	},
];

const projects = [
	{
		name: "ShorinjiKempo Portugal - National Taikai",
		description: [
			"Web platform for the National Taikai, enabling over 200 spectators to track real-time scores with advanced filters.",
			"Judges securely log scores through a password-protected interface, managing up to 100 teams. The system supports evaluations of technique, performance, timing, and penalties for streamlined martial arts competition management."
		],
		tags: [
			{
				name: "ReactJS",
				color: "from-blue-400 to-blue-200", // Azul claro para mais claro
			  },
			  {
				name: "C# / ASP.NET",
				color: "from-purple-600 to-purple-300", // Roxo a lilás
			  },
			  {
				name: "SQL Server",
				color: "from-red-600 to-red-400", // Vermelho escuro para claro
			  },
			  {
				name: "Azure",
				color: "from-blue-600 to-blue-400", // Azul para azul celeste
			  },
		],
		source_media: {
			image1: SKproject,
			video: SKproject,
			image2: SKprojectFront,
		},
		source_code_link: "https://github.com/",
	},
	{
		name: "Software Developer at Fakedoor",
		description: [
			"Web platform revolutionizing Science GCSE exam preparation through over 450 interactive 3D models developed in Unity.",
			"This innovative solution gamifies learning and simplifies complex scientific concepts through engaging, hands-on experiences. Teacher-crafted materials aligned with GCSE specifications enhance exam success."
		],
		tags: [
			{
				name: "Unity",
				color: "from-green-500 to-green-300", // Verde escuro para mais claro
			},
			{
				name: "ReactJS",
				color: "from-blue-400 to-blue-200", // Azul React
			},
			{
				name: "C# / ASP.NET",
				color: "from-purple-600 to-purple-300", // Gradiente roxo a lilás
			},
			{
				name: "PostgreSQL",
				color: "from-blue-900 to-blue-500", // Azul-marinho para azul claro
			},
		],
		source_media: {
			image1: FDunityProject,
			video: "https://www.youtube.com/embed/CQq_XJeuTUA?autoplay=1&controls=0&rel=0&showinfo=0&modestbranding=1&mute=1",
			image2: FDprojectFront,
		},
		source_code_link: "https://github.com/",
	},
	/* {
		name: "Job IT",
		description:
			"Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "restapi",
				color: "green-text-gradient",
			},
			{
				name: "scss",
				color: "pink-text-gradient",
			},
		], */
	/* image: jobit, */
	/* source_code_link: "https://github.com/",
},
{
	name: "Trip Guide",
	description:
		"A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
	tags: [
		{
			name: "nextjs",
			color: "blue-text-gradient",
		},
		{
			name: "supabase",
			color: "green-text-gradient",
		},
		{
			name: "css",
			color: "pink-text-gradient",
		},
	], */
	/* image: tripguide, */
	/* source_code_link: "https://github.com/",
}, */
];

export { services, technologies, experiences, testimonials, projects };