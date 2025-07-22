import React, { useRef } from 'react'
import { useLoaderData } from 'react-router-dom'
import { MdKeyboardArrowLeft,MdKeyboardArrowRight } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa";
import WebsitePreview from '../Components/WebsitePreview';
import Card from '../Components/Card';
import { useState } from 'react';
import { FaAnglesUp } from "react-icons/fa6";

function Projects() {
  const scrollRef = useRef(null);
  const [showTopButton, setShowTopButton] = useState(false);

  const scrollLeft = () => {
    let scrollAmount = 600;
    if (window.innerWidth < 1024) {
      scrollAmount = 400;
    }
    if (window.innerWidth < 640) {
      scrollAmount = 250;
    }
    scrollRef.current.scrollBy({
      left: -scrollAmount,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    let scrollAmount = 600;
    if (window.innerWidth < 1024) {
      scrollAmount = 400;
    }
    if (window.innerWidth < 640) {
      scrollAmount = 250;
    }
    scrollRef.current.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  // Show "Go to Top" button when scrolled near bottom
  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;
      if (scrollY + windowHeight >= docHeight - 100) {
        setShowTopButton(true);
      } else {
        setShowTopButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGoToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const data = useLoaderData();
  const [click, setClick] = useState(822262995);
  const [website, setwebsite] = useState('https://burger-raja.netlify.app/');

  return (
    <>
      <div className=''></div>
      <div className='mt-4'>
        <div className='dark:text-white text-black text-center text-4xl '>Projects</div>
        <p className='text-black dark:text-white text-center text-lg mt-4 mb-2'>
          Browse through my projects below. Click on any project card to see a live preview of that project.
        </p>

        <div className='flex items-center justify-center '>
          <div className='left-right-arrow duration-500' onClick={scrollLeft}><MdKeyboardArrowLeft /></div>
          <div className=' flex w-full gap-2 ml-4  mt-10 scroll-hidden items-center ' ref={scrollRef} id='card-scroll'>
            {data.map((item) => {
              return (
                <Card
                  id={item.id}
                  title={item.name}
                  discription={item.description}
                  DLink={item.homepage}
                  RLink={item.html_url}
                  click={click}
                  setClick={setClick}
                  setwebsite={setwebsite}
                />
              )
            })}
          </div>
          <div className='left-right-arrow lg:mr-20 ml-2 duration-500' onClick={scrollRight}><MdKeyboardArrowRight /></div>
        </div>
        <div className="flex justify-center mt-4">
          <div className="max-w-xl text-center text-base text-gray-700 dark:text-gray-300">
            {data.find(item => item.id === click)?.description || "Select a project to see its description here."}
          </div>
        </div>
        <div className=' text-2xl font-bold mt-10 flex items-center justify-center dark:text-white'>{website ? "Live Preview" : "No Preview Available"} <span className='ml-2'>{website && <FaArrowDown />}</span></div>
        <div className='  md:mx-30 mb-20 md:mb-0  '>
          {data[0].name === 'No Internet ' ? '' : <WebsitePreview website={website} />}
        </div>
      </div>
      {showTopButton && (
        <button
          onClick={handleGoToTop}
          className="fixed bottom-20 animate-bounce lg:bottom-8 right-8 text-white px-4 py-2 rounded shadow-2xl z-50 bg-black hover:bg-grey-900 transition"
        >
          <FaAnglesUp />
        </button>
      )}
    </>
  )
}



const gitHub = async () => {
  try {
    const response = await fetch('https://api.github.com/users/tummalarajasekhar/repos');
    if (!response.ok) {
      // If response is not ok, return empty array or suitable fallback
      return [{
        name:'No Internet ',
        

      }];
    }
    return await response.json();
  } catch (error) {
    // If fetch fails (e.g., network error), return empty array or suitable fallback
    return [{
        name:'No Internet ',
        

      }];
  }
}
export default Projects;
export { gitHub };