import brandSettings from '@/app/brand.settings'
import '../styles/navbar.scss'

export function NavBar() {
	return (
		<nav className="relative">
			<div className="content flex align-center justify-between margin-width center-margin">
				<div className="flex align-center logo-gap">
					<p>{brandSettings.name}</p>
				</div>
				<div className="flex align-center nav-gap">
					<a href="/#">Services</a>
					<a href="/#">About</a>
					<a href="/#">Contact</a>
				</div>
			</div>
		</nav>
	)
}
