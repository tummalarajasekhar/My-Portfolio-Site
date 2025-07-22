
import React, { useState } from 'react'
import { useLocation ,useNavigate} from 'react-router-dom';
import { HiAcademicCap } from "react-icons/hi";
import { FaAtlas } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { MdContactPhone, MdOutlineWork } from "react-icons/md";

function Navbar() {
  
  const location = useLocation();
  const navigate=useNavigate()
  const [path,setPath] =useState(location.pathname)
  const handlePath = (str) => {
    navigate(str)
    // console.log(str)
    setPath(str)
  }
  // console.log(path)
  return (

    <>
      <div className='fixed w-full bottom-0  flex justify-evenly lg:w-auto lg:right-5 lg:top-0 lg:my-auto lg:rounded-full lg:h-[500px] z-50  p-2 dark:bg-black bg-gray-300'>
        <ul className='w-[100%] flex justify-evenly lg:flex-col ' >
          <li className={ path ==='/' ? ' navbar icons active-nav ' : 'navbar icons'   } onClick={() => handlePath('/')}><AiFillHome /></li>
          <li className={ path ==='/about-me' ? ' navbar icons active-nav ' : 'navbar icons'   } onClick={() => handlePath('/about-me')}><FaAtlas /></li>
          <li className={ path ==='/projects' ? ' navbar icons active-nav  ' : 'navbar icons '   } onClick={() => handlePath('/projects')}><MdOutlineWork/></li>
          <li className={ path ==='/contact' ? ' navbar icons active-nav  ' : 'navbar icons '   }onClick={() => handlePath('/contact')}>< MdContactPhone /></li>
        </ul>
      </div></>

  )
}

export default Navbar