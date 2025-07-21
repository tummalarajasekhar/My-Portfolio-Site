import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import DarkLightMode from './Components/DarkLightMode.jsx'
import { BrowserRouter } from 'react-router-dom'
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Scroll from './Components/Scroll.jsx'
// import Profile from './Components/Profile'

import Hero from './pages/Hero';
import About from './pages/About';
import Projects,{gitHub } from './pages/Projects';
import Contact from './pages/Contact';
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
      <Route path='/' element={<Hero />} />
      <Route path='/about-me' element={<About />} />
      <Route loader={gitHub} path="/projects" element={<Projects />} />
      <Route path='/contact' element={<Contact />} />
      
      
    </Route>
  )
)
createRoot(document.getElementById('root')).render(

  <StrictMode>
    {/* <Scroll/>  */}
    <RouterProvider router={router}/>
      


      {/* <App /> */}
    
  </StrictMode>,
)
