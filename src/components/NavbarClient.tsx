'use client'
import React, { Fragment } from "react"
import Button from "./Button";
import { Logo } from "./Navbar";
import brandSettings from "@/app/brand.settings";

export default function MobileNavBar() {
	const [open, setOpen] = React.useState(false);

	React.useEffect(() => {
		document.body.style.overflow = open ? "hidden" : "auto"
		//go to top of the page
		if (open)
			window.scrollTo(0, 0)
		return () => {
			document.body.style.overflow = "auto"
		}
	}, [open])

	return (
		<Fragment>
			<div className={`hamburger mobile-enable fit-height ${open ? "open" : ""}`} onClick={() => setOpen(!open)} >
				<img src="/icons/hamburger.svg" alt="hamburger" />
			</div>
			<div className={`mobile-nav m-gap-04 ${open ? "open" : ""} `}>
				<Logo className="logo-nav" />
				<a href={brandSettings.path} className="m-width-fill">
					<Button primary={false} text={"Home"} className="m-width-fill" />
				</a>
				<a href={brandSettings.path + "services"} className="m-width-fill">
					<Button primary={false} text={"Services"} className="m-width-fill" />
				</a>
				<a href={brandSettings.path + "contact"} className="m-width-fill">
					<Button primary={false} text={"Contact"} className="m-width-fill" />
				</a>
				<a href={brandSettings.path + "about"} className="m-width-fill">
					<Button primary={false} text={"About"} className="m-width-fill" />
				</a>
				<a href={brandSettings.path + "consultation"} className="m-width-fill">
					<Button primary={true} text={"Free Consultation"} className="m-width-fill" />
				</a>
			</div>
			<div className={`mobile-backdrop ${open ? "open" : ""} `} />
		</Fragment>
	)
}
