import brandSettings from '@/app/brand.settings'
import { GradientCard } from '@/components/GradientCard'
import '@/styles/pages/services.scss'

export default function ServicesPage() {
	return (
		<main className="services margin-width center-margin">
			<h2>Our Services</h2>
			<section className="grid-container ">
				<a href={brandSettings.path + 'services/photography'} className="grid-item-1">
					<GradientCard className="fill-width fill-height" imgSrc="/images/services-1.png" title="Photography" />
				</a>
				{/*
				<a href={brandSettings.path + 'services/videography'}>
					<GradientCard className="fill-width fill-height" imgSrc="/images/services-2.png" title="Videography" />
				</a>
				*/}
				<a href={brandSettings.path + 'about#dj'} className="grid-item-1">
					<GradientCard className="fill-width fill-height" imgSrc="/images/services-3.png" title="DJ" />
				</a>
			</section>
		</main>
	)
}
