import { Experiences } from "../typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchExperiences = async() => {
    const res = await sanityClient.fetch(query)

    const experiences: Experiences[] = res

    //console.log("fetching", experiences)

    return experiences
}

const query = groq`
*[_type == "experience"]{
    ...,
    technologies[]->
}
`

type Data = {
    experiences: Experiences[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const experiences: Experiences[] = await sanityClient.fetch(query)
    res.status(200).json({ experiences })
  }