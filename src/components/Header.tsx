import * as React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Socials } from 'typings'
import Image from 'next/image'
import GrayEmailLogo from '../images/grayemaillogo.png'

type Props = {
  socials: Socials[]
}

export function Header({socials}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20
    xl:items-center'>
      <motion.div
       initial={{
        x: -500,
        opacity: 0,
        scale: 0.5
       }}
       animate={{
        x:0,
        opacity: 1,
        scale: 1
       }}
       transition={{
        duration: 1.5
       }}
       className='flex flex-row items-center'>
        {socials.map((social) => (
             <SocialIcon
             key={social._id}
             url={social.url}
             fgColor='gray' 
             bgColor='transparent'/>
        ))}
     
      </motion.div>

      <Link href='#contact'>
      <motion.div 
      initial={{
        x: 500,
        opacity: 0,
        scale: 0.5
      }}
      animate={{
        x: 0,
        opacity: 1,
        scale: 1
      }}
      transition={{
        duration: 1.5
      }}
      
      className='flex flex-row items-center text-gray-300 cursor-pointer'>
       <Image 
        src={GrayEmailLogo}
        alt=''
        width={20}
        height={20}
        />
        <div className='uppercase hidden md:inline-flex text-sm text-gray-400'>
          Contact Me
        </div>


      </motion.div>
      </Link>
    
        
    </header>
  )
}

//export default Header