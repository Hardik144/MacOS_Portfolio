import React from 'react'
import { Dock, Home, Navbar, Welcome } from '#components'

import gsap from 'gsap'
import { Draggable } from 'gsap/Draggable'

import { Finder, Resume, Safari, Terminal, Text, Image, Contact, Article, Photos } from '#windows';

gsap.registerPlugin(Draggable);

const App = () => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
      
      <Terminal />
      <Safari />
      <Resume />
      <Text />
      <Image />
      <Article />
      <Photos />
      <Finder />
      <Contact />
      <Home />
    </main>
  )
}

export default App
