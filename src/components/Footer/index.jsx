//STYLES

import './styles/Footer.css';

// SOCIAL MEDIA ICONS :
import facebookIcon from '../../images/icon-facebook.svg';
import twitterIcon from '../../images/icon-twitter.svg';
import instagramIcon from '../../images/icon-instagram.svg';
import pinterestIcon from '../../images/icon-pinterest.svg';
import youtubeIcon from '../../images/icon-youtube.svg';
import Logo from '../../images/logo.svg';
export default function Footer() {
	return (
		<footer className=" footer">
			<div className="container">
				<div className="assets-container">
					<img className="logo" src={Logo} alt="logo" />
					<div className="socialMedia-icons">
						<img src={facebookIcon} alt="facebook" />
						<img src={youtubeIcon} alt="youtube" />
						<img src={twitterIcon} alt="twitter" />
						<img src={pinterestIcon} alt="instagrame" />
						<img src={instagramIcon} alt="pinterest" />
					</div>
				</div>
				<div className="footer-links">
					<div className="cl1">
						<a href="#">Home</a>
						<a href="#">Pricing</a>
						<a href="#">Products</a>
						<a href="#">About Us</a>
					</div>
					<div className="cl2">
						<a href="#">Careers</a>
						<a href="#">Community</a>
						<a href="#">Privacy Police</a>
					</div>
				</div>
				<div className="form-container">
					<form>
						<input type="email" placeholder="Updates in your inbox..." />
						<button>Go</button>
					</form>
					<p>Copyright 2020. All Rights Reserved</p>
				</div>
			</div>
		</footer>
	);
}
