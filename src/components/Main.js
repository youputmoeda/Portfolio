import React from 'react';
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

const Main = () => {
	return (
		<Router>
			<div className="relative z-0 bg-primary">
				<div className="relative z-0">
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
			</div>
		</Router>
	)
}

export default Main;