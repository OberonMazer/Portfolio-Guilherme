import { Projects } from "../typings";
import type { NextApiRequest, NextApiResponse } from "next";
import { groq } from "next-sanity";
import { sanityClient } from "../sanity";

export const fetchProjects = async() => {
    const res = await sanityClient.fetch(query)

    const projects: Projects[] = res

    //console.log("fetching", projects)

    return projects
}

const query = groq`
*[_type == "project"] {
    ...,
    technologies[]->
}
`

type Data = {
    projects: Projects[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const projects: Projects[] = await sanityClient.fetch(query)
    res.status(200).json({ projects })
  }