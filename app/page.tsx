"use client";
import Header from './components/header/Header'
import Headline from './components/headline/Headline'
import Inovation from './components/Inovation'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Whatsapp from './components/Whatsapp'
import { useEffect, useRef, useState } from 'react'
import { useScroll } from './components/useScroll';

export default function Home() {
const { scrollPosition } = useScroll()

  return (
    <main>
      <Whatsapp />
      <Header />
      <Headline />
      <Inovation />
      <About  />
      <Products  />
      <Contact  />
      <Footer  />
    </main>
  )
}
