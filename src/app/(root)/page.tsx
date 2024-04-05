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
					<GradientCard className="expert" imgSrc="/images/c-1.png" title="" />
					<GradientCard className="expert" imgSrc="/images/c-2.png" title="" />
					<GradientCard className="expert" imgSrc="/images/c-3.png" title="" />
				</div>
			</section>
		</main>
	)
}
