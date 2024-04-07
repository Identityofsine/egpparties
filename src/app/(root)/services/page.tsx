import brandSettings from '@/app/brand.settings'
import { GradientCard } from '@/components/GradientCard'
import '@/styles/pages/services.scss'

export default function ServicesPage() {
	return (
		<main className="services margin-width center-margin">
			<h2>Our Services</h2>
			<section className="grid-container ">
				<a href={brandSettings.path + 'services/photography#wedding'} className="grid-item-1">
					<GradientCard className="fill-width fill-height" imgSrc="/images/wwd-1.png" title="Weddings" />
				</a>
				<a href={brandSettings.path + 'services/photography#pep'}>
					<GradientCard className="fill-width fill-height" imgSrc="/images/wwd-2.png" title="Parties" />
				</a>
				<a href={brandSettings.path + 'services/photography#pep'}>
					<GradientCard className="fill-width fill-height" imgSrc="/images/wwd-2.png" title="Parties" />
				</a>
			</section>
		</main>
	)
}
