import './styles/global.css';

// COMPONENTS :
import Navbar from '../src/components/Navbar';
import Hero from '../src/components/Hero';
import Features from '../src/components/Features';
import Testimonials from '../src/components/Testimonials';
import Banner from '../src/components/Banner';
import Footer from '../src/components/Footer';

export default function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<Features />
			<Testimonials/>
			<Banner/>
			<Footer />
		</>
	);
}
