const brandSettings = {
	path: "/",
	name: 'Exquisite Gallery Photography',
	shortName: 'EGP',
	llc: 'EGP. LLC',
	description: 'Key moments in our lives act as milestones, encapsulating cherished memories that define us.',
	theme: 'light',
	logo: '/icons/apature.svg',
	contact: {
		email: 'egpimages@gmail.com',
		phone: '631-500-4189',
	},
	socials: {
		twitter: 'https://twitter.com',
		facebook: 'https://facebook.com',
		instagram: 'https://instagram.com',
		youtube: 'https://youtube.com',
		tiktok: 'https://tiktok.com'
	},
	consultation: {
		services: ["Photobooth", "Drone Shots", "Printing", "DJ", "Party Add-Ons"],
		textarea: { min: 20, max: 500 },
		messages: {
			default: "Guaranteed Response Time of 24 Hours or Less!",
			success: "Thank you for your submission! We will get back to you within 24 hours!",
			error: {
				0: "* Please fill out all fields before submitting.",
				400: "Please fill out all fields before submitting.",
				403: "You are not authorized to submit this form.",
				500: "Something went wrong. Please try again later."
			}
		}
	}
}

export default brandSettings;	
