import brandSettings from '@/app/brand.settings'
import '../styles/navbar.scss'

export function Logo() {
	return (
		<a className="flex align-center logo" href={brandSettings.path}>
			<p>{brandSettings.name}</p>
			<div className="line"></div>
			<img src={brandSettings.logo} alt="logo" />
		</a>
	)
}

export function NavBar() {
	return (
		<nav className="relative center-margin">
			<div className="content flex align-center justify-between margin-width center-margin">
				<Logo />
				<div className="flex align-center nav-gap">
					<a href="/services">Services</a>
					<a href="/about">About</a>
					<a href="/consultation">Contact</a>
				</div>
			</div>
		</nav>
	)
}
