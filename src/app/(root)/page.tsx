import Button from '@/components/Button';
import { Carousel, CarouselItem } from '@/components/Carousel';
import { GradientCard } from '@/components/GradientCard';
import '@/styles/pages/landing.scss';
import brandSettings from '../brand.settings';

export default function LandingPage() {
	return (
		<main className="landing flex justify-center column">
			<section className="flex column align-center max-width">
				<div className="flex column align-center gap-01">
					<div className="margin-width flex column align-center gap-01">
						<div className="flex column align-center title-block">
							<h2 className="m-text-center text-center">Long Island's Best Party and Entertainment Company</h2>
							<h3 className="m-text-center">We do it all - EGP is a one stop shop for all party events!</h3>
						</div>
						<p className="center-text">Whether It's a sweet 16, a wedding, a graduation, a family reunion, a bar mitzvah, a quinceanera, a communion, or any other special occasion - we will provide the service.</p>
						<div className="flex row align-center gap-01 m-flex-column m-margin-top-08">
							<a href="/consultation">
								<Button text="Get A Free Consultation" />
							</a>
							<a href="/services">
								<Button text="See Our Services" primary={false} />
							</a>
						</div>
					</div>
					<Carousel className="m-margin-top-08 ">
						<CarouselItem img="/images/c-1.png" />
						<CarouselItem img="/images/c-2.png" style={{ objectPosition: '80% 0%' }} />
						<CarouselItem img="/images/c-3.png" style={{ objectPosition: '80% 0%' }} />
						<CarouselItem img="/images/c-4.png" />
					</Carousel>
				</div>
			</section>
			<section className="flex column margin-width about-us fill-width ">
				<h2 className="m-text-center">We have a team of experts dedicated to serving you!</h2>
				<p className="text-left body-1 m-text-center">Our elite team of specialists masterfully immortalizes your moments with unparalleled skill and finesse, going the extra mile to ensure customer satisfaction</p>
				<div className="grid client-box m-center-margin m-grid-center">
					<div className="card-container">
						<GradientCard className="expert" imgSrc="/images/c-1.png" title="100s of Clients" />
						<p className="margin-top-02 m-margin-top-03">Trusted by Suffolk County Police and Bethpage Federal Credit Union, among many others!</p>
					</div>
					<div className="card-container">
						<GradientCard className="expert" imgSrc="/images/c-2.png" title="1000s of Photos" style={{ objectPosition: '50% 15%' }} />
						<p className="margin-top-02 m-margin-top-03">Countless Memories Perserved.</p>
					</div>
					<div className="card-container">
						<GradientCard className="expert" imgSrc="/images/c-3.png" title="Hours of Video" style={{ objectPosition: '50% 15%' }} />
						<p className="margin-top-02 m-margin-top-03">Unlock the Power of Visual Storytelling With Our Expert Videography Services</p>
					</div>
				</div>
				<a href="/about">
					<Button className="fill-width margin-top-07 m-center-margin m-margin-top-08 m-padding-left-08 m-width-fill" text="Learn More About Us" primary={false} />
				</a>
			</section>
			<section className="fill-width margin-width we-do-section flex column">
				<div className="flex column fill-width we-do-block we-do-block-1">
					<div className="title-container">
						<h1>We Do Photography</h1>
						<p className="margin-top-02">Important moments in our lives serve as markers of our journey, encapsulating memories we hold dear. They're fleeting, yet impactful, weaving the fabric of our identity. However, the task of capturing these moments can be a stressful  endeavor. Amidst the whirlwind of emotions and spontaneity, there's a  delicate balance between living in the moment and ensuring it's  preserved for posterity.</p>
					</div>
					<div className="photo-container flex column">
						<h3>So,</h3>
						<img src="/images/wd-1.png" alt="Photography" style={{ objectPosition: '50% 12%' }} />
						<h3>We’ll do the picture taking while you can focus on making memories.</h3>
					</div>
					<a href={brandSettings.path + "services/photography"}>
						<Button className="fill-width margin-top-03 margin-width m-width-fill" text="Learn More About Our Photography Methods" primary={false} />
					</a>
				</div>
				<h3 className="center-text">&</h3>
				<div className="flex column fill-width we-do-block we-do-block-2">
					<div className="title-container">
						<h1>Best DJ Services On Long Island</h1>
						<p className="margin-top-02">
							Our team of experienced DJs bring unparalleled expertise and energy to every event, ensuring a seamless flow of music tailored to your unique tastes and preferences. Whether it’s a wedding, sweet 16, or any other celebration, we understand the importance of creating the perfect atmosphere, and we work closely with you to customize every aspect of the music selection and performance. With a wealth of experience in a variety of events, trust us to make your special occasion.
						</p>
					</div>
					<div className="photo-container flex column">
						<h3>So,</h3>
						<img src="/images/wd-3.jpg" alt="Photography" style={{ objectPosition: '20% 38%' }} />
						<h3>All you have to do is dance the night away while we spin the tunes!</h3>
					</div>
					<a href="/about#dj">
						<Button className="fill-width margin-top-03 margin-width m-width-fill" text="Learn More About Our DJ" primary={false} />
					</a>
				</div>
				<h3 className="center-text">&</h3>
				<div className="flex column fill-width we-do-block we-do-block-2">
					<div className="title-container">
						<h1>We Do Videography</h1>
						<p className="margin-top-02">From Basic Coverage to Cinematic Masterpieces and Aerial Perspectives with Drones. Let Us Transform Your Moments into Unforgettable Films.</p>
					</div>
					<div className="photo-container flex column">
						<h3>Then,</h3>
						<img src="/images/wd-3.png" alt="Videography" style={{ objectPosition: '50% 25%' }} />
						<h3>We will be sure to hit record for you.</h3>
					</div>
				</div>
			</section>
			<section className="fill-width margin-width events">
				<div className="flex column align-center">
					<h2 className="fill-width" style={{ fontWeight: '500' }}>What We Do</h2>
					<div className="events-grid margin-top-02">
						<a href={brandSettings.path + 'services/photography#wedding'} className="event event-1">
							<GradientCard className="fill-width fill-height" imgSrc="/images/wwd-1.png" title="Weddings" />
						</a>
						<a href={brandSettings.path + 'services/photography#pep'} className="event event-2">
							<GradientCard className="fill-width fill-height" imgSrc="/images/wwd-2.png" title="Parties" />
						</a>
						{/* Disable for grid presentation*/}
						<a href={brandSettings.path + 'services/photography#pep'} className="event mobile-disable">
							<GradientCard className="fill-width fill-height" imgSrc="/images/wwd-4.png" title="Sweet 16s" />
						</a>
						<a href={brandSettings.path + 'services/photography#pep'} className="event event-4">
							<GradientCard className="fill-width fill-height" imgSrc="/images/wwd-3.png" title="Events" />
						</a>
						<a href={brandSettings.path + 'services/photography#pep'} className="event event-3 mobile-enable">
							<GradientCard className="fill-width fill-height" imgSrc="/images/wwd-4.png" title="Sweet 16s" />
						</a>
						<div className="flex column fill-height event-flex ">
							<a href={brandSettings.path + 'services/photography#family'} className="event event-5 fill-height">
								<GradientCard className="event event-5 c3 fill-height" imgSrc="/images/wwd-5.png" title="Family" style={{ objectPosition: '50% 8%' }} />
							</a>
							<a href={brandSettings.path + 'services/photography#pep'} className="event event-6 fill-height">
								<GradientCard className="event event-5 c3 fill-height" imgSrc="/images/wwd-6.png" title="Personal" style={{ objectPosition: '50% 0%' }} />
							</a>
						</div>
					</div>
					<div className="flex column fill-width gap-01 margin-top-03 m-margin-top-12">
						<a href={brandSettings.path + 'contact'}>
							<Button className="m-width-fill" text="Contact Us" primary={true} />
						</a>
						<a href={brandSettings.path + 'services/photography'}>
							<Button className="m-width-fill" text="Learn More About Our Photography Methods" primary={false} />
						</a>
					</div>
				</div>
			</section>
		</main >
	)
}
