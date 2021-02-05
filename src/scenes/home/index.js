import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Navbar from './navbar'
import Hero from './hero'
import Album from './album'
import Footer from './footer'

function Home() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <main>
        <Hero />
        <Album />
      </main>
      <Footer />
    </>
  )
}

export default Home