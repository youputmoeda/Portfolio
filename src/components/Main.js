import React, { useEffect, useState } from 'react';
import {
	BrowserRouter as Router
} from "react-router-dom";

import PersonalNavbar from './PersonalNavbar';
import Hero from '../pages/Hero';
import Experience from '../pages/Experience';
import About from '../pages/about';
import Projects from '../pages/Projects';
import Contact from '../pages/Contact';
import Parallalex from '../pages/Parallalex';
import Loader from '../pages/Loader';
import { useProgress } from '@react-three/drei';
import Footer from './Footer';

const Main = () => {
	const [isLoading, setIsLoading] = useState(true);
	const { progress } = useProgress();

	useEffect(() => {
		if (progress === 100) {
			const timer = setTimeout(() => setIsLoading(false), 500);
			return () => clearTimeout(timer); 
		}
	}, [progress]);

	return (
		<Router>
			{isLoading ? (
				<Loader />
			) : (
				<div className="relative z-0 bg-primary">
					<div className="relative z-1">
						<Parallalex />
					</div>
					<div className='relative z-30'>
						<PersonalNavbar />
					</div>
					<div className="absolute inset-0 z-10">
						<Hero />
					</div>
					<div className='relative z-20'>
						<About />
						<Experience />
						<Projects />
						<Contact />
					</div>
					<div className='relative z-30'>
						<Footer />
					</div>
				</div>
			)}
		</Router>
	)
}

export default Main;