'use client';

import { useEffect, useState } from "react";
import Toggleable from "./Toggleable";

export type Service = {
	name: string,
	active?: boolean
}

type ServicesProps = {
	services: string[],
	onChange?: (services: Service[]) => void
	query?: () => string[]
}

export default function Services(props: ServicesProps) {

	const [services, setServices] = useState<Service[]>(props.services.map(service => ({ name: service, active: false })));

	useEffect(() => {
		let active_list: number[] = [];
		props.query?.()?.forEach?.(service => {
			const index = services.findIndex(s => s.name === service);
			if (index !== -1) {
				active_list.push(index);
			}
		});
		setActive(active_list);
	}, [])

	useEffect(() => {
		props.onChange?.(services.filter(service => service.active));
	}, [services]);

	function setActive(index: number | number[]) {
		if (Array.isArray(index)) {
			const newServices = services.map((service, i) => {
				if (index.includes(i)) {
					return { ...service, active: !service.active }
				}
				return service;
			});
			setServices(newServices);
			return;
		} else {
			const newServices = services.map((service, i) => {
				if (i === index) {
					return { ...service, active: !service.active }
				}
				return service;
			});
			setServices(newServices);
			return;
		}
	}

	return (
		<>
			<input type="hidden" hidden={true} name="services" value={JSON.stringify(services.filter(service => service.active))} />
			{services.map((service, index) => (
				< Toggleable key={service.name + index} text={service.name} active={service.active} onClick={() => setActive(index)} />
			))}
		</>
	)

}
