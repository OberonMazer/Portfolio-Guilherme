import { Socials } from "../typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchSocials = async() => {
    const res = await sanityClient.fetch(query)

    const socials: Socials[] = res

    //console.log("fetching", socials)

    return socials
}

const query = groq`
*[_type == "social"]
`

type Data = {
    socials: Socials[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const socials: Socials[] = await sanityClient.fetch(query)
    res.status(200).json({ socials })
  }