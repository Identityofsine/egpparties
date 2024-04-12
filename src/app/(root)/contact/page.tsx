import brandSettings from '@/app/brand.settings'
import Button from '@/components/Button'
import '@/styles/pages/contact.scss'
export default function Contact() {
	return (
		<main className="contact margin-width center-margin margin-top-07">
			<section>
				<h4>Contact Us Directly</h4>
				<p className="margin-top-02">
					At EGP, we prioritize prompt responses and effective communication. We guarantee near-instant response times to ensure your inquiries are addressed swiftly. Feel free to text our mobile number for even faster assistance.
				</p>
			</section>
			<section className="fill-width flex column gap-01 margin-top-07">

				<a href={`mailto:${brandSettings.contact.email}`} className="m-width-fill">
					<Button className="m-width-fill" primary={false} text={`Email Us - ${brandSettings.contact.email}`} />
				</a>

				<a href={`tel:${brandSettings.contact.phone_no}`} className="m-width-fill">
					<Button className="m-width-fill" primary={false} text={`Call/Text Us - ${brandSettings.contact.phone}`} />
				</a>
				<a href="/consultation" className="m-width-fill">
					<Button className="m-width-fill" primary={true} text="Get A Free Consultation" />
				</a>
			</section>
		</main>
	)
}
