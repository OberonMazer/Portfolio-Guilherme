import { Skills } from "typings";

export const fetchSkills = async() => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/src/pages/api/getSkills`)

    const data = await res.json()
    const skills: Skills[] = data.skills

    //console.log("fetching", skills)

    return skills
}