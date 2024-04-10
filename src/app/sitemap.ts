import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://egpparties.com',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 1,
		},
		{
			url: 'https://egpparties.com/about',
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: 'https://egpparties.com/services',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: .8,
		},
		{
			url: 'https://egpparties.com/services/photography',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://egpparties.com/contact',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: 'https://egpparties.com/consultation',
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: .6,
		},
	]
}
