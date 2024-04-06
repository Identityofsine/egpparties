'use client';

import { useState } from "react";
import Toggleable from "./Toggleable";

export type Service = {
	name: string,
	active?: boolean
}

type ServicesProps = {
	services: string[]
}

export default function Services(props: ServicesProps) {

	const [services, setServices] = useState<Service[]>(props.services.map(service => ({ name: service, active: false })));

	function setActive(index: number) {
		const newServices = services.map((service, i) => {
			if (i === index) {
				return { ...service, active: !service.active }
			}
			return service;
		});
		setServices(newServices);
	}

	return (
		<>
			<input type="hidden" hidden={true} name="services" value={JSON.stringify(services.filter(service => service.active))} />
			{services.map((service, index) => (
				<>
					< Toggleable key={index} text={service.name} active={service.active} onClick={() => setActive(index)} />
				</>
			))}
		</>
	)

}
