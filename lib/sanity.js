import SanityClient from 'next-sanity-client';

const client = new SanityClient({
	projectId: 'ncg6rrlr',
	dataset: 'production',
	useCdn: process.env.NODE_ENV === 'production',
});

client.fetch({
	query: `[_type == 'post']`,
	config: {
		cache: 'force-cache',
		next: { revalidate: 60 },
	},
});

export default client;
