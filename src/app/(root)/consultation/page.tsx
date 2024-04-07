import Button from '@/components/Button';
import { Input } from '@/components/Input';
import Services from '@/components/Services';
import TextArea from '@/components/TextArea';
import Toggleable from '@/components/Toggleable';
import '@/styles/pages/consultation.scss';
import { ConsultationForm } from './client';
import brandSettings from '@/app/brand.settings';

type ConsultationParams = {
	searchParams: {
		services: string | string[]
	}
}

export default function Consultation(props: ConsultationParams) {
	let services: string | string[] = props.searchParams.services;
	console.log(services);

	if (Array.isArray(services)) {
		services.map(service => (
			brandSettings.consultation.services.findIndex(s => s === service) !== -1
		));
	} else {
		if (brandSettings.consultation.services.find(service => {
			if (service === services) {
				services = service;
			}
		})) {
			services = services;
		};
		services = [services];
	}

	return (
		<main className="consultation flex column margin-width">
			<h4>Get An Estimate</h4>
			<p>Get in touch - Let’s Create Timeless Memories Together.</p>
			{/* @ts-ignore */}
			<ConsultationForm services={services ?? []} />
		</main>
	)
}
