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
			<div className="content flex justify-between center-margin">
				<div className="info flex column fit-width justify-between fill-height">
					<div className="top">
						<Logo />
						<p className="description">{brandSettings.description}</p>
					</div>
					<div className="bottom">
						<span>Copyright © 2024 By {brandSettings.llc}</span>
					</div>
				</div>
				<div className="right flex column">
					<div className="links flex justify-between">
						<List title="Company" items={companyItems} />
						<List title="Services" items={servicesItems} />
					</div>
					<div className="buttons flex column button-gap">
						<Button text="Contact Us" />
						<Button text="egpimages@gmail.com" icon_type="email" primary={false} />
						<Button text="631-500-4189" icon_type="phone" primary={false} />
					</div>
				</div>
			</div>
		</footer>
	)
}

