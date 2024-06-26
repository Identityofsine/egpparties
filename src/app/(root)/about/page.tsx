import brandSettings from '@/app/brand.settings';
import { MetaDataTemplate } from '@/app/metadata_template';
import Button from '@/components/Button';
import '@/styles/pages/about.scss';

export const metadata = {
	...MetaDataTemplate,
	description: "EGP Parties, based in Long Island, specializes in DJ, photography, and videography for children's parties, weddings, and Sweet 16s. Your one-stop event shop"
}

export default function AboutPage() {
	return (
		<main className="about-page margin-width center-margin">
			<section >
				<div className="flex column title-block">
					<h1 className="h6-match">{brandSettings.name}</h1>
					<h3>Or {brandSettings.shortName}</h3>
				</div>
				<p className="margin-top-04">Key moments in our lives act as milestones, encapsulating cherished memories that define us.</p>
				<div className="flex justify-between fill-width image-row margin-top-06 m-flex-column m-fill-width m-gap-10">
					<img className="m-width-fill m-max-width" src="/images/about-1.png.jpeg" alt="About 1" />
					<img className="m-width-fill m-max-width" src="/images/about-2.png.jpeg" alt="About 2" />
					<img className="m-width-fill m-max-width" src="/images/about-3.png.jpeg" alt="About 3" />
				</div>
			</section>
			<section className="dj" id="dj">
				<h4>The Best DJing On Long Island</h4>
				<div className="flex container fill-width margin-top-07 m-flex-column gap-03">
					<div className="flex column left">
						<img src="/images/about-6.jpg" alt="About 6" />
						<p className="margin-top-02 m-margin-top-03">
						</p>
					</div>
					<div className="flex column right gap-01">
						<h2 className="h2-match">Our DJing Service</h2>
						<p className="margin-top-01">
							<a className="a-default" href="https://egpparties.com/">Welcome to EGP Entertainment</a>, the premier DJ service on Long Island. With a proven track record of hosting hundreds of electrifying parties, weddings, corporate events, aswell as countless childrens parties, we’re known for delivering unforgettable experiences tailored for your preferences.
						</p>
						<p className="">
							Our team of expert DJs not only spin the hottest tracks but also offers MC services, ensuring seamless transitions and keeping the energy high throughout your event. Get Ready to elevate your celebration with EGP Entertainment - where music meets excellence.
						</p>
						<div className="flex column fill-width m-margin-top-05">
							<a href={brandSettings.path + "consultation?services=DJ"}>
								<Button className="margin-top-04 m-width-fill" primary={true} text="Book Us as a DJ" />
							</a>
						</div>
					</div>

				</div>
			</section>
			<section className="based-in">
				<h2>Based In Long Island, New York</h2>
				<p className="margin-top-01 m-margin-top-03"><b>{brandSettings.name}</b> extends its artistry and dedication to clients throughout the entirety of the Empire State. From the vibrant streets of New York City to the serene shores of Long Island, our passion for capturing the beauty of life knows no bounds.</p>
				<img className="margin-top-04 m-margin-top-07" src="/images/about-4.png.jpeg" alt="About 4" />
			</section>
			<section className="photography-to-us">
				<h4>
					What Photography Is To Us
				</h4>
				<div className="flex container m-flex-column">
					<div className="flex column left">
						<p className="m-margin-top-02">
							Embarking on a legacy: continuing the proud family tradition of over 25 years, we pledge to uphold the sacred honor of photography, one image at a time.
						</p>
						<div className="sub-block">
							<h2>We Never Want To Miss "It"</h2>
							<p className="m-margin-top-02">
								Whether “it” is the enchantment of a wedding celebration, the exuberance of a sweet 16 bash, the warmth of a birthday gathering, or any other special event that fills hearts with joy. At <b>{brandSettings.name}</b>, we are committed to capturing every “it” moment with precision, passion and artistry, ensuring that your cherished memories last a lifetime.
							</p>
							<a href={brandSettings.path + "services/photography"}>
								<Button className="margin-top-04" primary={false} text="Take a Look At How We Take Photos" />
							</a>
						</div>
					</div>
					<img className="right" src="/images/about-5.png.jpeg" alt="About 5" />
				</div>
			</section>
			<section className="contact">
				<h2 className="center-text">We Help You Never Forget.</h2>
				<p className="center-text margin-top-02">
					Capture memories that last a lifetime with our expert photography services. Contact us now to turn your moments into timeless treasures
				</p>
				<div className="flex column button-gap margin-top-06">
					<a href="/consultation" className="m-width-fill">
						<Button className="m-width-fill" primary={true} text="Get A Free Consultation" />
					</a>
					<a href="/contact" className="m-width-fill">
						<Button className="m-width-fill" primary={false} text="Contact Us Directly" />
					</a>
					<a href="/services" className="m-width-fill">
						<Button className="m-width-fill" primary={false} text="See Our Services" />
					</a>
				</div>
			</section>
		</main>
	)
}
