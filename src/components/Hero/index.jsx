//STYLES

import './styles/Hero.css';

import BG_image from '../../images/illustration-intro.svg';

export default function Hero() {
	return (
		<div className="header header-hero">
			<main className="container hero">
				<div className="hero-text">
					<h1>Bring everyone together to build better products.</h1>
					<p>
						Manage makes it simple for software teams to plan day-to-day tasks
						while keeping the larger team goals in view.
					</p>
					<button>Get Started</button>
				</div>
				<div className='hero-img'>
					<img src={BG_image } alt="statistics image"/>
				</div>
			</main>
		</div>
	);
}
