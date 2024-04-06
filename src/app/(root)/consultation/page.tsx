import Button from '@/components/Button';
import { Input } from '@/components/Input';
import Services from '@/components/Services';
import TextArea from '@/components/TextArea';
import Toggleable from '@/components/Toggleable';
import '@/styles/pages/consultation.scss';

export default function Consultation() {
	return (
		<main className="consultation flex column margin-width">
			<h4>Get An Estimate</h4>
			<p>Get in touch - Let’s Create Timeless Memories Together.</p>
			<div className="flex column center-margin container-father margin-top-08">
				<div className="container flex align-center">
					<div className="text-message flex align-center">
						<img src="/icons/chat-bubble.svg" alt="consultation" />
						<p>Guaranteed Response Time of 24 Hours or Less!</p>
					</div>
				</div>
				<div className="container flex column justify-center">
					<form className="flex column">
						<div className="flex column label-gap">
							<label htmlFor="name">Name:</label>
							<Input type="text" id="name" placeholder="Your Name" />
						</div>
						<div className="flex column label-gap">
							<label htmlFor="phone-number">Phone Number:</label>
							<Input type="number" id="phone-number" placeholder="Your Phone Number" />
						</div>
						<div className="flex column label-gap">
							<label htmlFor="email">Email:</label>
							<Input type="text" id="email" placeholder="Your Email" />
						</div>
						<div className="flex column label-gap">
							<label htmlFor="calender">When (Is Your Event?):</label>
							<Input type="text" id="calender" placeholder="April 6th, 2024" />
						</div>
						<div className="flex column label-gap">
							<label htmlFor="Event">Event Location:</label>
							<Input type="text" id="location" placeholder="Location" />
						</div>
						<div className="flex column label-gap">
							<label htmlFor="Event">Services:</label>
							<div className="flex align-center gap-01">
								<Services services={["Photography", "Videography", "Both"]} />
							</div>
						</div>
						<div className="flex column label-gap">
							<label htmlFor="Event">Please Provide A Brief Description Stating What Kind Of Event It Is:</label>
							<TextArea id="message" placeholder="Your Message" />
						</div>
						<Button text="Submit Your Form!" />
					</form>
				</div>

			</div>
		</main>
	)
}
