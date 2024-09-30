import React from 'react';
import {
	BrowserRouter as Router
} from "react-router-dom";

import PersonalNavbar from './PersonalNavbar';
import Hero from '../pages/Hero';
import Experience from '../pages/Experience';
import About from '../pages/about';
import Projects from '../pages/Projects';

const Main = () => {
	return (
		<Router>
			<div className="relative z-0 gb-primary">
				<div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
					<PersonalNavbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Projects />
			</div>
		</Router>
	)
}

export default Main;