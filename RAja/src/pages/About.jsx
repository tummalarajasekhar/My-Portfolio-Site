import React from 'react';
import aboutMe from '../assets/raja.avif';

function About() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden ">
      {/* Background image */}
      <img
        src={aboutMe}
        alt="About background"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 py-10 max-w-3xl ">
        <h1 className="text-4xl font-bold mb-6 border-b-1 pb-1 border-white inline-block">About Me</h1>
        <p className="text-lg md:text-xl leading-relaxed">
          I am a passionate MERN stack developer with expertise in building dynamic and responsive web applications.
          I specialize in working with MongoDB, Express.js, React, and Node.js to create seamless user experiences.
          I enjoy solving complex problems, learning new technologies, and contributing to impactful projects.
        </p>
      </div>
    </div>
  );
}

export default About;
    