import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import React, { use, useEffect } from 'react'
import { useState } from "react";

function DarkLightMode() {
  const [showIcon, setShowIcon] = useState(true);
  const [scrollBy, setScrollBy] = useState(React.useRef(window.scrollY));
  
  // React.useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > lastScrollY.current) {
  //       console.log(window.scrollY, lastScrollY.current);
  //       setShowIcon(false); // scrolling down, hide icon
  //     } else {
  //       setShowIcon(true); // scrolling up, show icon
  //     }
  //     lastScrollY.current = window.scrollY;
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  var element = document.getElementById("DLMode");
  const [DL, setDL] = useState(()=>{
     return localStorage.getItem('theme')=='light';
  })

  if (DL) {
    localStorage.setItem('theme', 'light')
    element.classList.remove("dark");
  } else {
    localStorage.removeItem('theme')
    // localStorage.removeItem('theme')
    element.classList.add("dark");
  }
  // setDL(!DL)


//  console.log(DL)
  
  const handleDL = (e) => {
   
      e.stopPropagation(); 
      // console.log("Icon clicked")
  
    
    if (DL) {
      localStorage.setItem('theme', 'light')
      element.classList.remove("dark");
    } else {
      localStorage.removeItem('theme')
      // localStorage.removeItem('theme')
      element.classList.add("dark");
    }
    setDL(!DL)

  }
  return (
    <>
      <div className={`relative right-2 z-1 bg-green-50 ${window.scrollY > 2 ? 'translate-y-40' : 'translate-y-0'} duration-500`}>
        <div className="text-black icons dark:text-white w-[0] text-3xl scale-95 md:text-3xl lg:text-4xl p-2 fixed right-[20%] top-[2%]">
          {DL ? (
            <MdDarkMode onClick={handleDL} />
          ) : (
            <MdLightMode onClick={handleDL} />
          )}
        </div>
      </div>
    </>
  )
}

export default DarkLightMode