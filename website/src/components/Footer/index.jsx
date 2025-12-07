import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			    <img class="hero container w-48 mx-auto pb-2 flex justify-center" src="/Filazzola-logo.png" alt="Alessandro Filazzola logo" />
			&copy; {new Date().getFullYear()} Alessandro Filazzola
			<small className={Styles.byline}> Built using Astro</small>
		</footer>
	);
}
export default Footer;
