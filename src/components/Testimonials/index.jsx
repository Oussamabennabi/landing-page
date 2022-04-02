import React from 'react';
//STYLES

import './styles/Testimonials.css';
// PERSON ICONS :
import person1_Icon from '../../images/avatar-anisha.png'
import person2_Icon from '../../images/avatar-ali.png'
import person3_Icon from '../../images/avatar-richard.png'
import person4_Icon from '../../images/avatar-shanai.png';
export default function Testimonials() {

	return (
		<main className="Testimonials-section">
			<h2>What they’ve said</h2>
			<article className="cards-container">
				<div className="card">
					<img src={person1_Icon} alt="Anisha Li" />
					<h3>Anisha Li</h3>
					<p>
						“Manage has supercharged our team’s workflow. The ability to
						maintain visibility on larger milestones at all times keeps everyone
						motivated.”
					</p>
				</div>

				<div className="card">
					<img src={person2_Icon} alt="Ali Bravo" />
					<h3>Ali Bravo</h3>
					<p>
						“We have been able to cancel so many other subscriptions since using
						Manage. There is no more cross-channel confusion and everyone is
						much more focused.”
					</p>
				</div>

				<div className="card">
					<img src={person3_Icon} alt="Richard Watts" />
					<h3>Richard Watts</h3>
					<p>
						“Manage allows us to provide structure and process. It keeps us
						organized and focused. I can’t stop recommending them to everyone I
						talk to!”
					</p>
				</div>

				<div className="card">
					<img src={person4_Icon} alt="Shanai Gough" />
					<h3>Shanai Gough</h3>
					<p>
						“Their software allows us to track, manage and collaborate on our
						projects from anywhere. It keeps the whole team in-sync without
						being intrusive.”
					</p>
				</div>
			</article>
			<button>Get Started</button>
		</main>
	);
}
