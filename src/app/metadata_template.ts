import { Metadata } from "next";
import brandSettings from "./brand.settings";

export const MetaDataTemplate: Metadata = {
	title: 'Long Island DJ | Photography | Videography - EGPParties',
	description: 'EGP Parties, based in Long Island, offers DJ, photography, and videography services for children\'s parties, weddings, and Sweet 16s. One-stop shop for events!',
	twitter: {
		title: 'EGPParties - Long Island DJ | Photography | Videography',
		description: 'EGP Parties, based in Long Island, offers DJ, photography, and videography services for children\'s parties, weddings, and Sweet 16s. One-stop shop for events!',
	},
	openGraph: {
		title: 'Long Island DJ | Photography | Videography - EGPParties',
		description: 'EGP Parties, based in Long Island, offers DJ, photography, and videography services for children\'s parties, weddings, and Sweet 16s. One-stop shop for events!',
		images: [
			{
				url: `${brandSettings.url}/images/egp-parties-logo.png`,
				width: 800,
				height: 600,
				alt: 'EGPParties - Long Island DJ | Photography | Videography',
			},
		],
	},
}

