import React from 'react'
import { FaGithub ,FaLinkedin } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
function SocialIcons() {
  return (
    <>
    <div className='flex justify-center items-center gap-4  mt-8'>
    <div
  className="icons dark:text-white text-3xl " onClick={() => window.open('https://github.com/tummalarajasekhar', '_blank')} role="button">  <FaGithub /> </div>

    <div className='icons dark:text-white hover:text-[#0077B5] text-3xl'  onClick={() => window.open('https://www.linkedin.com/in/tummala-raja-sekhar-reddy/', '_blank')} role="button" ><FaLinkedin/></div>
    <div className='icons dark:text-white hover:text-yellow-500 text-3xl'  onClick={() => window.open('https://leetcode.com/u/rajasekhar_556/', '_blank')} role="button" ><SiLeetcode/></div>
    </ div>
    </>
  )
}

export default SocialIcons