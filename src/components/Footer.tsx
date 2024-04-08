import brandSettings from '@/app/brand.settings'
import '../styles/footer.scss'
import { Logo } from './Navbar'
import Button from './Button'

type ListItem = {
	name: string;
	url?: string;
}

function List({ title, items }: { items: ListItem[], title: string }) {
	return (
		<div className="list">
			<p className="title">{title}</p>
			<div className="list-items">
				{items.map((item, index) => <p key={index}>{item.name}</p>)}
			</div>
		</div>
	)
}

const companyItems: ListItem[] = [
	{ name: 'About Us', url: "/about" },
	{ name: 'Twitter', url: "" },
]

const servicesItems: ListItem[] = [
	{ name: 'Photography', url: "/photography" },
	{ name: 'Videography', url: "/videography" },
]

export function Footer() {
	return (
		<footer className="full-width">
			<div className="content flex m-flex-column m-height-fill m-align-center justify-between m-gap-08 center-margin ">
				<div className="info flex column fit-width m-width-fill fill-height m-gap-04">
					<div className="top">
						<Logo />
						<p className="description">{brandSettings.description}</p>
					</div>
					<div className="bottom">
						<span>Copyright © 2024 By {brandSettings.llc}</span>
					</div>
				</div>
				<div className="right flex column justify-between m-width-fill m-gap-10">
					<div className="links flex justify-between">
						<List title="Company" items={companyItems} />
						<List title="Services" items={servicesItems} />
					</div>
					<div className="buttons flex column button-gap m-gap-05">
						<a href="/contact">
							<Button className="m-width-fill" text="Contact Us" />
						</a>
						<a href={`mailto::`}>
							<Button className="m-width-fill" text={brandSettings.contact.email} icon_type="email" primary={false} />
						</a>
						<a href={`tel::${brandSettings.contact.phone}`}>
							<Button className="m-width-fill" text={brandSettings.contact.phone} icon_type="phone" primary={false} />
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

