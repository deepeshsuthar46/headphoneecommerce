import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'vv6p8rs0',
    dataset: 'production',
    apiVersion: '2023-11-12',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});

const builder = imageUrlBuilder(client);

// Modify the urlFor function to return a string URL
export const urlFor = (source) => builder.image(source).toString();

export default client;