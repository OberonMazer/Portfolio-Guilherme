import { Skills } from "typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchSkills = async() => {
    const res = await sanityClient.fetch(query)

    const skills: Skills[] = res

    //console.log("fetching", skills)

    return skills
}

const query = groq`
*[_type == "skill"]{
  ...,
}
`

type Data = {
    skills: Skills[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const skills: Skills[] = await sanityClient.fetch(query)
    res.status(200).json({ skills })
  }