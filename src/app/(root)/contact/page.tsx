import Button from '@/components/Button'
import '@/styles/pages/contact.scss'
export default function Contact() {
	return (
		<main className="contact margin-width center-margin margin-top-07">
			<section>
				<h4>Contact Us Directly</h4>
				<p className="margin-top-02">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam  fermentum magna non aliquam gravida. Integer posuere lacus id magna  fringilla porttitor. Morbi eu velit nibh. Phasellus ac euismod sem.  Etiam a velit vel diam iaculis cursus et sit amet turpis. Vivamus  pretium lectus eros, et vehicula libero interdum sit amet.</p>
			</section>
			<section className="fill-width flex column gap-01 margin-top-07">
				<Button className="m-width-fill" primary={false} text="Email Us - egpimages@gmail.com" />
				<Button className="m-width-fill" primary={false} text="Call Us - 631-500-4189" />
				<Button className="m-width-fill" primary={true} text="Get A Free Consultation" />
			</section>
		</main>
	)
}
