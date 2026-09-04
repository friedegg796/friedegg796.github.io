import { useState } from 'react'
import './index.css'
import { HashRouter, Routes, Route } from "react-router-dom"
import Index from './pages/Index.jsx'
import Projects from './pages/Projects.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <>
 <HashRouter>
      {/*  <Nav/>    */}
       <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/Projects" element={<Projects/>}/>
        </Routes>
        <Footer/> 
    </HashRouter>

    </>
  )
}

export default App
