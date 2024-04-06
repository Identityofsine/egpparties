import brandSettings from '@/app/brand.settings'
import '../styles/navbar.scss'

export function Logo({ className = "" }: { className?: string }) {
	return (
		<a className={"flex align-center logo" + ` ${className}`} href={brandSettings.path}>
			{className === "mobile" ?
				<>
					<p className="mobile-disable">{brandSettings.name}</p>
					<p className="mobile-enable">{brandSettings.shortName}</p>
				</>
				:
				<p className="">{brandSettings.name}</p>
			}
			<div className="line"></div>
			<img src={brandSettings.logo} alt="logo" />
		</a>
	)
}

export function NavBar() {
	return (
		<nav className="relative center-margin">
			<div className="content flex align-center justify-between margin-width center-margin">
				<Logo className="mobile" />
				<div className="flex align-center nav-gap mobile-disable">
					<a href="/services">Services</a>
					<a href="/about">About</a>
					<a href="/consultation">Contact</a>
				</div>
				<div className="hamburger mobile-enable fit-height">
					<img src="/icons/hamburger.svg" alt="" />
				</div>
			</div>
		</nav>
	)
}
