import { Metadata } from "next";
import brandSettings from "./brand.settings";

export const MetaDataTemplate: Metadata = {
	title: 'Long Island DJ | Photography | Videography - EGPParties',
	description: 'Childrens parties | Weddings | Sweet 16 - EGP Parties is a Long Island based party and entertainment company. We specialize in DJ, Photography, and Videography services. We are a one stop shop for all party events!',
	twitter: {
		title: 'EGPParties - Long Island DJ | Photography | Videography',
		description: 'Childrens parties | Weddings | Sweet 16 - EGP Parties is a Long Island based party and entertainment company. We specialize in DJ, Photography, and Videography services. We are a one stop shop for all party events!',
	},
	openGraph: {
		title: 'Long Island DJ | Photography | Videography - EGPParties',
		description: 'Childrens parties | Weddings | Sweet 16 - EGP Parties is a Long Island based party and entertainment company. We specialize in DJ, Photography, and Videography services. We are a one stop shop for all party events!',
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

