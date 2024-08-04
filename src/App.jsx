import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import Programs from './components/Programs/Programs'
import Title from './components/Title/Title'
import About from './components/About/About'
import Camous from './components/Campus/Campus'
import Testimonials from './components/Testimonials/Testimonials'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import VideoPlayer from './components/VideoPlayer/VideoPlayer'

function App() {

  const [playState, setPlaystate] = useState(false)

  return (
    <div>
      <Navbar />
      <Hero />
      <div className='container'>
        <Title subTitle = 'Our PROGRAM' title = 'What We Offer'/>
        <Programs />
        <About setPlaystate={setPlaystate}/>
        <Title subTitle = 'Gallery' title = 'Campus Photos'/>
        <Camous/>
        <Title subTitle = 'TESTIMONIALS' title = 'What Student Says'/>
        <Testimonials/>
        <Title subTitle = 'Contact Us' title = 'Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
      <VideoPlayer playState={playState} setPlaystate={setPlaystate}/>
    </div>
  )
}

export default App
