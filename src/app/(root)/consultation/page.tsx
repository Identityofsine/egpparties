import Button from '@/components/Button';
import { Input } from '@/components/Input';
import Services from '@/components/Services';
import TextArea from '@/components/TextArea';
import Toggleable from '@/components/Toggleable';
import '@/styles/pages/consultation.scss';
import { ConsultationForm } from './client';

export default function Consultation() {
	return (
		<main className="consultation flex column margin-width">
			<h4>Get An Estimate</h4>
			<p>Get in touch - Let’s Create Timeless Memories Together.</p>
			<ConsultationForm />
		</main>
	)
}
