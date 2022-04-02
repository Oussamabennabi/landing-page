import React from 'react';
//STYLES

import './styles/Navbar.css';

// assets :
import Logo from '../../images/logo.svg';

export default function Navbar() {
	const [className,setClassName] = React.useState('hidden')
	function toggleMenu() {
		setClassName(prevClass => prevClass === 'hidden' ? 'show' : 'hidden');
	}
	return (
		<div className="header">
			<nav className={`container navbar ${className}`}>
				<img className="navLogo" src={Logo} alt="logo" />
				<div className={`links-container ${className}`}>
					<div className="left-links">
						<a href="#o" className="link navLink">
							Pricing
						</a>
						<a href="#o" className="link navLink">
							Product
						</a>
						<a href="#o" className="link navLink">
							About Us
						</a>
						<a href="#o" className="link navLink">
							Careers
						</a>
						<a href="#o" className="link navLink">
							Community
						</a>
					</div>
					<div className="right-links">
						<button>Get Started</button>
					</div>
				</div>
				<div onClick={toggleMenu} className={`hamburger ${className}`}>
					<span></span>
					<span></span>
					<span></span>
				</div>
			</nav>
		</div>
	);
}
