import brandSettings from '@/app/brand.settings';
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
				<div className="flex column gap margin-top-06">
					<div className="flex fill-width flex-1 content heart-container m-flex-column" id="wedding">
						<GradientCard imgSrc="/images/photography-2.png" className="full c5 m-width-fill" title="Weddings" />
						<div className="flex column flex-1">
							<h2>Heart to Heart Moments</h2>
							<p>EGP Photography specializes in wedding services and capturing heart-to-heart moments.</p>
							<div className="flex column gap-01 margin-top-06">
								<Button className="m-width-fill" text="Book Photography For Your Wedding" primary={true} />
								<Button className="m-width-fill" text="Contact Us Directly!" primary={true} />
							</div>
						</div>
					</div>
					<div className="flex fill-width flex-1 content heart-container m-flex-column" id="pep">
						<div className="grid m-width-fill m-text-mod">
							<GradientCard imgSrc="/images/photography-12.png" className="" title="Parties" />
							<GradientCard imgSrc="/images/photography-13.jpg" className="" title="Children" />
							<GradientCard imgSrc="/images/photography-3.png" className="c4" title="Corporate Events" />
							<GradientCard imgSrc="/images/photography-4.png" className="" title="Personal" />
						</div>
						<div className="flex column flex-1">
							<h2>Capture the Fun</h2>
							<p>At <b>EGP</b>, we love to party, but we also know the importance of preserving those moments through photography.</p>
							<div className="flex column gap-01 margin-top-06">
								<Button className="m-width-fill" text="Book Us For Your Party" primary={false} />
								<Button className="m-width-fill" text="Book Us For Your Corporate Event" primary={false} />
								<Button className="m-width-fill" text="Book Us For Your Next Personal Event" primary={false} />
								<Button className="m-width-fill" text="Contact Us Directly!" primary={true} />
							</div>
						</div>
					</div>
					<div className="flex fill-width flex-1 content heart-container m-flex-column" id="family">
						<GradientCard imgSrc="/images/wwd-5.png" className="full c2 m-width-fill" title="Family" />
						<div className="flex column flex-1">
							<h2>Immortalize Your Life</h2>
							<p>From Corporate Gatherings to Personal Milestones and Family Celebrations: Every moment is worth capturing.</p>
							<div className="flex column gap-01 margin-top-06">
								<Button className="m-width-fill" text="Book a Photoshoot with Us" primary={false} />
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className="fill-width margin-width hwwcb">
				<h6>Here’s What We Can Bring</h6>
				<div className="flex column first-container margin-top-06">
					<div className="flex fill-width flex-1 content content-gap m-flex-column" id="photobooth">
						<GradientCard imgSrc="/images/photography-5.png" className="custom-photobooth c5 m-width-fill" />
						<div className="flex column flex-1">
							<h2>Photobooth</h2>
							<p>Our Photobooths come alive with props for fun and unique captures.</p>
							<div className="flex column gap-01 margin-top-06">
								<Button className="m-width-fill" text="Get a Photobooth for Your Event" primary={false} />
							</div>
						</div>
					</div>
					<div className="flex fill-width flex-1 content content-gap m-flex-column" id="dj">
						<GradientCard imgSrc="/images/photography-6.png" className="custom-dj c5 m-width-fill" />
						<div className="flex column flex-1">
							<h2>DJ</h2>
							<p>With a passion for music and a knack for reading the crowd, our DJs ensure an unforgettable experience, tailored to your unique vibe and style. Let the rhythm move you and the music take you on a journey with our professional DJ services.</p>
							<div className="flex column gap-01 margin-top-06">
								<a href={brandSettings.path + "about#dj"}>
									<Button className="m-width-fill" text="Learn About Our DJ Process" primary={false} />
								</a>
								<a href={brandSettings.path + "consultation?services=DJ"}>
									<Button className="m-width-fill" primary={true} text="Book a DJ" />
								</a>
							</div>
						</div>
					</div>
					<div className="flex fill-width flex-1 content content-gap m-flex-column" id="addons">
						<div className="grid m-width-fill">
							<GradientCard imgSrc="/images/photography-7.png" className="special first-item c3" title="Facepainting" />
							<GradientCard imgSrc="/images/photography-9.png" className="special c3" title="Cotton Candy" />
							<GradientCard imgSrc="/images/photography-8.png" className="special c4" title="Popcorn" />
						</div>
						<div className="flex column flex-1">
							<h2>Party Add-Ons</h2>
							<p>Add a splash of color with our vibrant face painting, indulge in classic carnival treats with our popcorn and cotton candy stations. These delightful additions are sure to bring smiles to faces of all ages and create unforgettable moments at your eve.</p>
							<div className="flex column gap-01 margin-top-06 m-width-fill">
								<Button text="Book a Party Add-On" primary={false} />
							</div>
						</div>
					</div>
					<div className="flex fill-width flex-1 content content-gap m-flex-column" id="drone">
						<GradientCard imgSrc="/images/photography-10.png" className="custom-dj c5 m-width-fill" />
						<div className="flex column flex-1">
							<h2>Dream-like Angles</h2>
							<p>We elevate memories and enhance celebrations with aerial perspectives: using drones for both videography and photography.</p>
							<div className="flex column gap-01 margin-top-06">
								<Button className="m-width-fill" text="Book a Drone" primary={false} />
							</div>
						</div>
					</div>
					<div className="flex fill-width flex-1 content content-gap m-flex-column" id="printing">
						<GradientCard imgSrc="/images/photography-11.png" className="print c5 m-width-fill" />
						<div className="flex column flex-1">
							<h2>Dream-like Angles</h2>
							<p>We elevate memories and enhance celebrations with aerial perspectives: using drones for both videography and photography.</p>
							<div className="flex column gap-01 margin-top-06 m-width-fill">
								<Button text="Book a Drone" primary={false} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</main >
	);
}
