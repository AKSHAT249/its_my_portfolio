import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import Navbar from './components/Navbar'
import LogoMarquee from './sections/LogoMarqueeSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import Techstack from './sections/Techstack'
import Testimonials from './sections/Testimonials'
import Contact from './sections/Contact'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <ShowcaseSection />
      <LogoMarquee />
      <FeatureCards />
      <ExperienceSection />
      <Techstack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App