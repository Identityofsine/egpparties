import brandSettings from '@/app/brand.settings'
import '../styles/footer.scss'
import { Logo } from './Navbar'

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
			</div>
		</footer>
	)
}

