import React, { useState } from 'react'

import { CiLink } from "react-icons/ci";
import { IoDocumentText } from "react-icons/io5";


function Card(
  
  {
    id='822262995',
    title='No Internet',
    discription='This is a Full Stack development project, built using React, Node.js, and MongoDB. It features a responsive design, user authentication, and a RESTful API for data management.',
    DLink='',
    RLink='',
    click,
    setClick,
    setwebsite,
  }
  
) 
{
const handleClick = (e) => {
  setClick(id)
  setwebsite(DLink)
  console.log(DLink)
}

 
  console.log(click)
  return (
    <>
       
    <div className={`${click===id ?"dark:bg-gray-800 bg-gray-200 scale-120 md:scale-120 duration-300":""} text-black dark:text-white min-w-50 text-pretty md:min-w-60 h-30  border-2  text-center m-8 rounded-lg scale-110 md:hover:scale-120 hover:duration-400 `} id={id} onClick={handleClick}>
      <div className={`flex items-center justify-center py-4`}>
        {title}
      </div>
      <div className={` flex items-center justify-center `}>
        { RLink && <a
          className='text-xl border rounded-full p-1 hover:bg-white duration-500 mr-2 hover:dark:text-black'
          alt='link'
          href={RLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <IoDocumentText />
        </a>}
        { DLink && <a
          className='text-xl border rounded-full p-1 hover:bg-white duration-500 '
          alt='link'
          href={DLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          <CiLink />
        </a>}
        
        <div></div>
      </div>
    </div>
    </>
  )
}

export default Card