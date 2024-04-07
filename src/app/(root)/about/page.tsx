import brandSettings from '@/app/brand.settings';
import Button from '@/components/Button';
import '@/styles/pages/about.scss';

export default function AboutPage() {
	return (
		<main className="about-page margin-width center-margin">
			<section >
				<div className="flex column title-block">
					<h6>Exquisite Gallery Photography</h6>
					<h3>Or EGP</h3>
				</div>
				<p className="margin-top-04">Key moments in our lives act as milestones, encapsulating cherished memories that define us.</p>
				<div className="flex justify-between fill-width image-row margin-top-06">
					<img src="/images/about-1.png" alt="About 1" />
					<img src="/images/about-2.png" alt="About 2" />
					<img src="/images/about-3.png" alt="About 3" />
				</div>
			</section>
			<section className="based-in">
				<h2>Based In Long Island, New York</h2>
				<p className="margin-top-01"><b>Exquisite Gallery Photography</b> extends its artistry and dedication to clients throughout the entirety of the Empire State. From the vibrant streets of New York City to the serene shores of Long Island, our passion for capturing the beauty of life knows no bounds.</p>
				<img className="margin-top-04" src="/images/about-4.png" alt="About 4" />
			</section>
			<section className="photography-to-us">
				<h4>
					What Photography Is To Us
				</h4>
				<div className="flex container">
					<div className="flex column left">
						<p>
							Embarking on a legacy: continuing the proud family tradition of over 25 years, we pledge to uphold the sacred honor of photography, one image at a time.
						</p>
						<div className="sub-block">
							<h2>We Never Want To Miss "It"</h2>
							<p>
								Whether “it” is the enchantment of a wedding celebration, the exuberance of a sweet 16 bash, the warmth of a birthday gathering, or any other special event that fills hearts with joy. At <b>Exquisite Gallery Photography</b>, we are committed to capturing every “it” moment with precision, passion and artistry, ensuring that your cherished memories last a lifetime.
							</p>
							<a href={brandSettings.path + "services/photography"}>
								<Button className="margin-top-04" primary={false} text="Take a Look At How We Take Photos" />
							</a>
						</div>
					</div>
					<img className="right" src="/images/about-5.png" alt="About 5" />
				</div>
			</section>
			<section className="contact">
				<h2 className="center-text">We Help You Never Forget.</h2>
				<p className="center-text margin-top-02">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna porta nisi rutrum vulputate a id ex. Sed consequat gravida mi. Mauris ut augue auctor augue tempor condimentum. Duis porttitor lacinia massa vel tempus.
				</p>
				<div className="flex column button-gap margin-top-06">
					<Button primary={true} text="Get A Free Consultation" />
					<Button primary={false} text="Contact Us Directly" />
					<Button primary={false} text="See Our Services" />
				</div>
			</section>
		</main>
	)
}