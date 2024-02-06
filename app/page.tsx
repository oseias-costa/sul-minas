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

export default function Home() {
 const [scrollPosition, setScrollPosition] = useState(0);
const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
};

useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);

console.log(scrollPosition)

  return (
    <main>
      <Whatsapp />
      <Header />
      <Headline />
      <Inovation />
      <About />
      <Products />
      <Contact />
      <Footer />
    </main>
  )
}
