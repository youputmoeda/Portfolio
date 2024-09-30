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
import gamePad from "../assets/gamePad.svg";

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
		/* icon: web, */
	},
	{
		title: "Game Developer",
		icon: gamePad,
	},
	{
		title: "Full-Stack Developer",
		/* icon: backend, */
	},
	{
		title: "Project Manager",
		/* icon: creator, */
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
		name: "Car Rent",
		description:
			"Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "mongodb",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		/* image: carrent, */
		source_code_link: "https://github.com/",
	},
	{
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
		],
		/* image: jobit, */
		source_code_link: "https://github.com/",
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
		],
		/* image: tripguide, */
		source_code_link: "https://github.com/",
	},
];

export { services, technologies, experiences, testimonials, projects };