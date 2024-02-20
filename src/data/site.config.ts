interface SiteConfig {
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	author: 'sanity esports', // Site author
	title: 'Sanity Esports Blog', // Site title.
	description: 'sanity esports blog', // Description to display in the meta tags
	lang: 'en',
	ogLocale: 'en',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 10 // Number of posts per page
}
