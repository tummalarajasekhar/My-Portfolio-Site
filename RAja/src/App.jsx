import React from 'react'
import Navbar from './Components/Navbar'
// import Profile from './Components/Profile'
import DarkLightMode from './Components/DarkLightMode';
import { Outlet } from 'react-router-dom';


function App() {
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);

  React.useEffect(() => {
    const img = new Image();
    img.src = '/assets/rajaEdit.webp'; // Adjust the path as necessary
    img.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);
  return (
    <>
    {!isImageLoaded && (
      <div>
      <Navbar />
      <DarkLightMode />
      <Outlet />
    </div>
    )}
    </>
  );
}

// function App() {
//   return (
//     <div className=''>

//       <Hero />
     
//       <Navbar />
//     </div>
//   )
// }

export default App











// import React from 'react'
// import Navbar from './Components/Navbar'
// // import Profile from './Components/Profile'
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Hero from './pages/Hero';
// import About from './pages/About';
// import Projects,{gitHub } from './pages/Projects';
// import Contact from './pages/Contact';
// function App() {
//   React.useEffect(() => {
//     gitHub();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Hero />} />
//         <Route path="/about-me" element={<About />} />
//         <Route loader={gitHub} path="/projects" element={<Projects />} />
//         <Route path="/contact-me" element={<Contact />} />
//       </Routes>
//     </>
//   );
// }

// // function App() {
// //   return (
// //     <div className=''>

// //       <Hero />
     
// //       <Navbar />
// //     </div>
// //   )
// // }

// export default App