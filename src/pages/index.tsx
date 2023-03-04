import Head from 'next/head'
import type { GetStaticProps } from 'next'
import { Header } from '@/components/Header'
import {Hero} from '@/components/Hero'
import {About} from '@/components/About'
import {WorkExperience} from '@/components/WorkExperience'
import {Skills as SkillsType} from '@/components/Skills'
import {Projects as ProjectsType} from '@/components/Projects'
import {ContactMe} from '@/components/ContactMe'
import { Experiences, PageInfo, Projects, Skills, Socials } from 'typings'
import { fetchPageInfo } from 'utils/fetchPageInfo'
import { fetchExperiences } from 'utils/fetchExperiences'
import { fetchSkills } from 'utils/fetchSkills'
import { fetchProjects } from 'utils/fetchProjects'
import { fetchSocials } from 'utils/fetchSocials'

type Props = {
  pageInfo: PageInfo;
  experiences: Experiences[];
  skills: Skills[];
  projects: Projects[];
  socials: Socials[];
}

export const Home = ({pageInfo, experiences, projects, skills, socials}: Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20
    scrollbar-thumb-[#F7AB0A]/80'>
      <Head>
        <title>{pageInfo?.name} - Portfolio</title>
      </Head>

      <Header socials={socials}/>

      <section id='hero' className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id='about' className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id='experience' className='snap-center'>
        <WorkExperience experiences={experiences} />
      </section>

      <section id='skills' className='snap-start'>
        <SkillsType skills={skills} />
      </section>

      <section id='projects' className='snap-start'>
        <ProjectsType projects={projects} />
      </section>

      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async() => {
  const pageInfo: PageInfo = await fetchPageInfo()
  const experiences: Experiences[] = await fetchExperiences()
  const skills: Skills[] = await fetchSkills()
  const projects: Projects[] = await fetchProjects()
  const socials: Socials[] = await fetchSocials()

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials
    },
    revalidate: 10
  }
}
