import { createClient } from 'next-sanity';
import createImageUrlBuilder from '@sanity/image-url';
export * from './sanity';

export const sanityClient = createClient({
  projectId: '2c7kay1d',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2021-08-31',
  useCdn: process.env.NODE_ENV === 'production',
});

export const urlFor = (source: any) => createImageUrlBuilder(sanityClient).image(source);