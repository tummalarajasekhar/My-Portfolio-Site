import React from 'react'
import profile from '../assets/rajaEdit.webp'
import '../App.css'

function Profile() {
  return (
   
    <div className='relative  mx-4 my-8  w-70    md:w-80    '>

    <div className='   rounded-full    text-white p-1  box after:blur-[50px]  before:opacity-50 after:w-full after:border-5 before-border-5 '>
        <img src={profile} className='rounded-full no-select' alt='raja'></img>
    </div>
    </div>
    
    // <div className='box text-gray-50 m-5 p-2 relative '> raja </div>
  )
}

export default Profile