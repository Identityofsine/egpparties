'use client';

import brandSettings from "@/app/brand.settings";
import regexPatterns from "@/app/regex.settings";
import Button from "@/components/Button";
import { Input } from "@/components/Input";
import Services from "@/components/Services";
import TextArea from "@/components/TextArea";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const default_message = "Guaranteed Response Time of 24 Hours or Less!";

type FormOutput = {
	name: string,
	phone: string,
	email: string,
	date: string,
	location: string,
	service: string[],
	message: string
}

type ConsultationFormProps = {
	services: string[]
}

const date = new Date();

const toTens = (n: number) => {
	console.log(n);
	return n < 10 ? `0${n}` : `${n}`
}

export function ConsultationForm(props: { services: string[] }) {

	const [data, setData] = React.useState<FormOutput>({
		name: "",
		phone: "",
		email: "",
		date: `${date.getFullYear()}-${toTens(date.getMonth())}-${toTens(date.getDate())}`,
		location: "",
		service: props.services,
		message: ""
	});
	const [currentMessage, setCurrentMessage] = React.useState(default_message);
	const router = useRouter();
	console.log(data.date);

	function updateState<K extends keyof FormOutput>(key: K, value: FormOutput[K]) {
		setData({ ...data, [key]: value });
	}

	function submit() {
		console.log(data);
		let valid = true;
		let missing: string[] = [];
		Object.keys(data).forEach(key => {
			key = key as keyof FormOutput;
			if (!data[key as keyof FormOutput]) {
				valid = false;
				missing.push(key.charAt(0).toUpperCase() + key.slice(1));
			}
			else if (key === 'phone' && data[key].length !== 10) {
				valid = false;
				missing.push('Phone Number');
			}
			else if (key === 'email' && !data[key].match(regexPatterns.email)) {
				valid = false;
				missing.push('Email');
			}
			else if (key === 'message' && (data[key].length < brandSettings.consultation.textarea.min || data[key].length > brandSettings.consultation.textarea.max)) {
				valid = false;
				missing.push('Message');
			}
		})
		if (!valid) {
			setCurrentMessage(`${brandSettings.consultation.messages.error[400]}: Fix ${missing.join(", ")}`);
		} else {
			setCurrentMessage(brandSettings.consultation.messages.success);
		}
		router.push('#message-box');
	}

	return (
		<div className="flex column center-margin container-father ">
			<div className="container flex align-center">
				<div className="text-message flex align-center" id="message-box">
					<img src="/icons/chat-bubble.svg" alt="consultation" />
					<p>{currentMessage}</p>
				</div>
			</div>
			<div className="container flex column justify-center">
				<form className="flex column">
					<div className="flex column label-gap">
						<label htmlFor="name">*Name:</label>
						<Input
							type="text"
							name="firstname"
							id="name"
							placeholder="Your Name"
							onChange={(e) => updateState("name", e)}
						/>
					</div>
					<div className="flex column label-gap">
						<label htmlFor="phone-number">*Phone Number:</label>
						<Input
							type="tel"
							name="phonenumber"
							id="phone-number"
							placeholder="Your Phone Number"
							pattern={regexPatterns.phone}
							maxLength={10}
							onChange={(e) => updateState("phone", e)}
						/>
					</div>
					<div className="flex column label-gap">
						<label htmlFor="email">*Email:</label>
						<Input
							type="text"
							id="email"
							placeholder="Your Email"
							onChange={(e) => updateState("email", e)}
						/>
					</div>
					<div className="flex column label-gap">
						<label htmlFor="calender">*When (Is Your Event?):</label>
						<Input
							type="date"
							id="calender"
							defaultValue={data.date}
							onChange={(e) => updateState("date", e)}
						/>
					</div>
					<div className="flex column label-gap">
						<label htmlFor="Event">*Event Location:</label>
						<Input
							type="text"
							id="location"
							placeholder="Location"
							onChange={(e) => updateState("location", e)}
						/>
					</div>
					<div className="flex column label-gap">
						<label htmlFor="Event">Services:</label>
						<div className="flex align-center gap-01 flex-wrap">
							<Services
								services={brandSettings.consultation.services}
								onChange={(services) => updateState("service", services.map(service => service.name))}
								query={() => data.service}
							/>
						</div>
					</div>
					<div className="flex column label-gap">
						<label htmlFor="Event">*Please Provide A Brief Description Stating What Kind Of Event It Is:</label>
						<TextArea
							id="message"
							placeholder="Your Message"
							onChange={(e) => updateState("message", e)}
						/>
						<p className={`small-text text-right text-area-text ${(data.message.length >= brandSettings.consultation.textarea.min && data.message.length <= brandSettings.consultation.textarea.max) ? 'good' : 'bad'}`}>{data.message.length} / {brandSettings.consultation.textarea.max}</p>
					</div>
					<p className="small-text">{brandSettings.consultation.messages.error[0]}</p>
					<Button className="m-width-fill" onClick={submit} text="Submit Your Form!" />
				</form>
			</div>
		</div>
	)

}
