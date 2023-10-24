import { sanityClient } from '@sanity/client';

// This connects with the sanity database
const options = {
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET_NAME,
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2021-11-11',
};

export const previewClient = sanityClient({
	...options,
	useCdn: true,
	// token: process.env.SANITY_API_TOKEN,
});

export default sanityClient(options);
