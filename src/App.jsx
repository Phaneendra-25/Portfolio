// App.js
import { motion, AnimatePresence } from 'framer-motion'
import Header from './Header'
import Hero from './Hero'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <>
    <head>
      <img src="react.svg" alt="" />
      <title>Portfolio</title>
    </head>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <AnimatePresence>
        <Header />
        <main>
          <Hero />
          <About id="about" />
          <Projects id="projects" />
          <Contact id="contact" />
        </main>
        <Footer />
      </AnimatePresence>
    </div>
    </>
  )
}

export default App