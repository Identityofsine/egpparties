import Button from '@/components/Button';
import { GradientCard } from '@/components/GradientCard';
import '@/styles/pages/photography.scss';

export default function PhotographyPage() {
	return (
		<main className="photography flex justify-center column">
			<section className="first fill-width">
				<h2>A Picture Is Worth One Thousand Words</h2>
				<p>Let Us Tell Your Story Through Captivating Visuals</p>
				<img src="/images/photography-1.png" alt="Photography" />
			</section>
			<section className="what-we-do fill-width">
				<h1 className="text-left fill-width">So,<br />Here's What We Do.</h1>
				<div className="flex column gap">
					<div className="flex column heart-container margin-top-06">
						<div className="flex fill-width flex-1 content">
							<GradientCard imgSrc="/images/photography-2.png" className="full" title="Weddings" />
							<div className="flex column flex-1">
								<h2>Heart to Heart Moments</h2>
								<p>EGP Photography specializes in wedding services and capturing heart-to-heart moments.</p>
								<div className="flex column gap-01 margin-top-06">
									<Button text="Book Photography For Your Wedding" primary={true} />
									<Button text="Contact Us Directly!" primary={true} />
								</div>
							</div>
						</div>
					</div>
					<div className="flex column heart-container margin-top-06">
						<div className="flex fill-width flex-1 content">
							<div className="grid">
								<GradientCard imgSrc="/images/photography-2.png" className="grid-item-1" title="Weddings" />
								<GradientCard imgSrc="/images/photography-2.png" className="c4" title="Corporate Events" />
								<GradientCard imgSrc="/images/photography-2.png" className="" title="Weddings" />
							</div>
							<div className="flex column flex-1">
								<h2>Capture the Fun</h2>
								<p>At <b>EGP</b>, we love to party, but we also know the importance of preserving those moments through photography.</p>
								<div className="flex column gap-01 margin-top-06">
									<Button text="Book Us For Your Party" primary={false} />
									<Button text="Book Us For Your Corporate Event" primary={false} />
									<Button text="Book Us For Your Next Personal Event" primary={false} />
									<Button text="Contact Us Directly!" primary={true} />
								</div>
							</div>
						</div>
					</div>
					<div className="flex column heart-container margin-top-06 content-gap">
						<div className="flex fill-width flex-1 content">
							<GradientCard imgSrc="/images/wwd-5.png" className="full c2" title="Family" />
							<div className="flex column flex-1">
								<h2>Capture the Fun</h2>
								<p>At <b>EGP</b>, we love to party, but we also know the importance of preserving those moments through photography.</p>
								<div className="flex column gap-01 margin-top-06">
									<Button text="Book Us For Your Party" primary={false} />
									<Button text="Book Us For Your Corporate Event" primary={false} />
									<Button text="Book Us For Your Next Personal Event" primary={false} />
									<Button text="Contact Us Directly!" primary={true} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="fill-width margin-width hwwcb">
				<h6>Here’s What We Can Bring</h6>
				<div className="flex column first-container margin-top-06">
					<div className="flex fill-width flex-1 content content-gap">
						<GradientCard imgSrc="/images/photography-5.png" className="custom-photobooth c5" />
						<div className="flex column flex-1">
							<h2>Photobooth</h2>
							<p>Our Photobooths come alive with props for fun and unique captures.</p>
							<div className="flex column gap-01 margin-top-06">
								<Button text="Get a Photobooth for Your Event" primary={false} />
							</div>
						</div>
					</div>
					<div className="flex fill-width flex-1 content content-gap">
						<GradientCard imgSrc="/images/photography-6.png" className="custom-dj c5" />
						<div className="flex column flex-1">
							<h2>Photobooth</h2>
							<p>Our Photobooths come alive with props for fun and unique captures.</p>
							<div className="flex column gap-01 margin-top-06">
								<Button text="Get a Photobooth for Your Event" primary={false} />
							</div>
						</div>
					</div>
					<div className="flex fill-width flex-1 content content-gap">
						<div className="grid">
							<GradientCard imgSrc="/images/photography-7.png" className="special first-item c3" title="Facepainting" />
							<GradientCard imgSrc="/images/photography-9.png" className="special c3" title="Cotton Candy" />
							<GradientCard imgSrc="/images/photography-8.png" className="special c4" title="Popcorn" />
						</div>
						<div className="flex column flex-1">
							<h2>Party Add-Ons</h2>
							<p>Our Photobooths come alive with props for fun and unique captures.</p>
							<div className="flex column gap-01 margin-top-06">
								<Button text="Get a Photobooth for Your Event" primary={false} />
							</div>
						</div>
					</div>
					<div className="flex fill-width flex-1 content content-gap">
						<GradientCard imgSrc="/images/photography-10.png" className="custom-dj c5" />
						<div className="flex column flex-1">
							<h2>Dream-like Angles</h2>
							<p>We elevate memories and enhance celebrations with aerial perspectives: using drones for both videography and photography.</p>
							<div className="flex column gap-01 margin-top-06">
								<Button text="Book a Drone" primary={false} />
							</div>
						</div>
					</div>
					<div className="flex fill-width flex-1 content content-gap">
						<GradientCard imgSrc="/images/photography-11.png" className="print c5" />
						<div className="flex column flex-1">
							<h2>Dream-like Angles</h2>
							<p>We elevate memories and enhance celebrations with aerial perspectives: using drones for both videography and photography.</p>
							<div className="flex column gap-01 margin-top-06">
								<Button text="Book a Drone" primary={false} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main >
	);
}
