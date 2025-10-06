import { motion } from 'framer-motion'
import resume from './assets/Phaneendra_Resume.pdf' 
import { useState, useEffect } from 'react'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['About', 'Experience', 'Projects', 'Contact']

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/5 backdrop-blur-lg border-b border-white/10 py-4' 
          : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <nav className="container mx-auto px-6 flex justify-between items-center">
        <motion.div
          className="text-xl font-bold text-white"
          whileHover={{ scale: 1.05 }}
        >
          PN
        </motion.div>

        <div className="hidden md:flex gap-8">
          {navItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-gray-300 hover:text-white transition-colors relative"
              whileHover={{ y: -2 }}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-sm font-medium">{item}</span>
              <motion.div
                className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.button
          className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-sm font-medium"
          whileHover={{ scale: 1.05, boxShadow: '0 10px 30px -10px rgba(99, 102, 241, 0.5)' }}
          whileTap={{ scale: 0.95 }}
        >
         <a href={resume} target='_blank' rel='noreferrer'> Resume</a>
        </motion.button>
      </nav>
    </motion.header>
  )
}