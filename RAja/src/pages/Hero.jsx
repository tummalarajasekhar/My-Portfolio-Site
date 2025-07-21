import React from 'react'
import Profile from '../Components/Profile'
import Name from '../Components/Name'
import SocialIcons from '../Components/SocialIcons'
import DarkLightMode from '../Components/DarkLightMode'
import Sign from '../Components/Sign'

function Hero() {
  
  return (
    <div className=' overflow-hidden '>
    <Sign/>
    <div id="music-keyboard">
      <span class="note" data-note="R"></span>
      <span class="note" data-note="A"></span>
      <span class="note" data-note="J"></span>
      <span class="note" data-note="S"></span>
      <span class="note" data-note="E"></span>
      <span class="note" data-note="K"></span>
      <span class="note" data-note="H"></span>
    </div>
    {/* <div className=' h-[95%] '> </div> */}
    <div className=' lg:scale-120 '>
         <div className=' m-auto h-screen my-auto flex flex-col md:flex-row justify-center items-center lg:gap-20  '>
          
        <Profile/>
        
        
        <div className='scale-80 '>
          <h2 className='text-black dark:text-white opacity-75 text-center md:text-start text-2xl md:text-3xl font-black md:ml-4 '>Hi, My Name is</h2>
        <Name/>
        <SocialIcons/>
        </div>

        {/* <Web/> */}
        </div>
        
       
      
    </div>
    <p className="text-center text-gray-900 dark:text-gray-400 mt-4 text-lg italic opacity-50 text- fixed  right-2 bottom-2 hidden lg:block">
    👋 Try typing my name on your keyboard 🎹
</p>
    </div>
  )
}

export default Hero