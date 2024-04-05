import Button from '@/components/Button';
import { Carousel, CarouselItem } from '@/components/Carousel';
import { GradientCard } from '@/components/GradientCard';
import '@/styles/pages/landing.scss';

export default function LandingPage() {
	return (
		<main className="landing flex justify-center column">
			<section className="flex column align-center">
				<div className="flex column align-center margin-width gap-01">
					<div className="flex column align-center title-block">
						<h2>Capture Your Precious Moment.</h2>
						<h3>We do it all - EGP is a one stop shop!</h3>
					</div>
					<p className="center-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vel urna porta nisi rutrum vulputate a id ex. Sed consequat gravida mi. Mauris ut augue auctor augue tempor condimentum. Duis porttitor lacinia massa vel tempus.</p>
					<div className="flex row align-center gap-01">
						<Button text="Get A Free Consultation" />
						<Button text="See Our Services" primary={false} />
					</div>
					<Carousel>
						<CarouselItem img="/images/c-1.png" />
						<CarouselItem img="/images/c-2.png" />
						<CarouselItem img="/images/c-3.png" />
						<CarouselItem img="/images/c-4.png" />
					</Carousel>
				</div>
			</section>
			<section className="flex column margin-width about-us">
				<h2>We have a team of experts dedicated to serving you!</h2>
				<p className="text-left body-1">Our elite team of specialists masterfully immortalizes your moments with unparalled skill and finesse, going the extra mile to ensure customer satisfaction</p>
				<div className="grid client-box">
					<div className="card-container">
						<GradientCard className="expert" imgSrc="/images/c-1.png" title="100s of Clients" />
						<p style={{ marginTop: '.15rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<div className="card-container">
						<GradientCard className="expert" imgSrc="/images/c-2.png" title="1000s of Photos" />
						<p style={{ marginTop: '.15rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
					<div className="card-container">
						<GradientCard className="expert" imgSrc="/images/c-3.png" title="Hours of Video" />
						<p style={{ marginTop: '.15rem' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
					</div>
				</div>
				<Button className="fill-width margin-top-07" text="Learn More About Us" primary={false} />
			</section>
			<section className="fill-width margin-width we-do-section flex column">
				<div className="flex column fill-width we-do-block we-do-block-1">
					<div className="title-container">
						<h1>We Do Photography</h1>
						<p className="margin-top-02">Important moments in our lives serve as markers of our journey, encapsulating memories we hold dear. They're fleeting, yet impactful, weaving the fabric of our identity. However, the task of capturing these moments can be a stressful  endeavor. Amidst the whirlwind of emotions and spontaneity, there's a  delicate balance between living in the moment and ensuring it's  preserved for posterity.</p>
					</div>
					<div className="photo-container flex column">
						<h3>So,</h3>
						<img src="/images/wd-1.png" alt="Photography" />
						<h3>We’ll do the picture taking while you can focus on making memories.</h3>
					</div>
					<Button className="fill-width margin-top-03" text="Learn More About Our Photography Methods " primary={false} />
				</div>
				<h3 className="center-text">&</h3>
				<div className="flex column fill-width we-do-block we-do-block-2">
					<div className="title-container">
						<h1>We can DJ</h1>
						<p className="margin-top-02">Important moments in our lives serve as markers of our journey, encapsulating memories we hold dear. They're fleeting, yet impactful, weaving the fabric of our identity. However, the task of capturing these moments can be a stressful  endeavor. Amidst the whirlwind of emotions and spontaneity, there's a  delicate balance between living in the moment and ensuring it's  preserved for posterity.</p>
					</div>
					<div className="photo-container flex column">
						<h3>So,</h3>
						<img src="/images/wd-1.png" alt="Photography" />
						<h3>We’ll do the picture taking while you can focus on making memories.</h3>
					</div>
					<Button className="fill-width margin-top-03" text="Learn More About Our DJ" primary={false} />
				</div>
				<h3 className="center-text">&</h3>
				<div className="flex column fill-width we-do-block we-do-block-2">
					<div className="title-container">
						<h1>We Do Videography</h1>
						<p className="margin-top-02">From Basic Coverage to Cinematic Masterpieces and Aerial Perspectives with Drones. Let Us Transform Your Moments into Unforgettable Films.</p>
					</div>
					<div className="photo-container flex column">
						<h3>Then,</h3>
						<img src="/images/wd-3.png" alt="Photography" />
						<h3>We will be sure to hit record for you.</h3>
					</div>
					<Button className="fill-width margin-top-03" text="Learn More About Our Videography Methods " primary={false} />
				</div>
			</section>
			<section className="fill-width margin-width events">
				<div className="flex column align-center">
					<h2 className="fill-width" style={{ fontWeight: '500' }}>What We Do</h2>
					<div className="events-grid margin-top-02">
						<GradientCard className="event event-1" imgSrc="/images/c-1.png" title="Weddings" />
						<GradientCard className="event event-2" imgSrc="/images/c-1.png" title="Parties" />
						<GradientCard className="event event-3" imgSrc="/images/c-1.png" title="Events" />
						<GradientCard className="event event-4" imgSrc="/images/c-1.png" title="Sweet 16s" />
						<div className="flex column fill-height event-flex">
							<GradientCard className="event event-5" imgSrc="/images/c-1.png" title="Family" />
							<GradientCard className="event event-6" imgSrc="/images/c-1.png" title="Personal" />
						</div>
					</div>
					<div className="flex column fill-width gap-01 margin-top-03">
						<Button className="" text="Contact Us" primary={true} />
						<Button className="" text="Learn More About Our Photography Methods" primary={false} />
						<Button className="" text="Learn More About Our Videography Methods" primary={false} />
					</div>
				</div>
			</section>
		</main>
	)
}
