import {createClient} from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
    projectId: '2c7kay1d', //deveria receber "NEXT_PUBLIC_SANITY_PROJECT_ID!" como valor para ocultar o id, mas ocasiona um erro
    apiVersion: '2023-03-01',
    useCdn: process.env.NODE_ENV === 'production'
}

export const sanityClient = createClient(config)

export const urlFor = (source: any) => createImageUrlBuilder(config).image(source)