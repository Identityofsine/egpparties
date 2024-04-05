import brandSettings from '@/app/brand.settings'
import '../styles/navbar.scss'

export function Logo() {
	return (
		<div className="flex align-center logo">
			<p>{brandSettings.name}</p>
			<div className="line"></div>
			<img src={brandSettings.logo} alt="logo" />
		</div>
	)
}

export function NavBar() {
	return (
		<nav className="relative center-margin">
			<div className="content flex align-center justify-between margin-width center-margin">
				<Logo />
				<div className="flex align-center nav-gap">
					<a href="/#">Services</a>
					<a href="/#">About</a>
					<a href="/#">Contact</a>
				</div>
			</div>
		</nav>
	)
}
