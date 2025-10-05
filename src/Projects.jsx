// Projects.jsx (updated)
import { motion } from 'framer-motion'
import { ExternalLink, Github, ArrowRight, Code } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const projects = [
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio built with React, Framer Motion, and Tailwind CSS. Features smooth animations and interactive UI components.",
      technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
      liveUrl: "#", // Add your actual portfolio URL
      githubUrl: "#", // Add your actual GitHub URL
      featured: true
    },
    {
      title: "Task Manager Pro",
      description: "Collaborative task management application with real-time updates, drag & drop functionality, and team collaboration features.",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Weather Dashboard",
      description: "Beautiful weather application with interactive maps, detailed forecasts, and location-based services using modern APIs.",
      technologies: ["Vue.js", "Chart.js", "Mapbox", "Weather API"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "E-Commerce Store",
      description: "Full-stack e-commerce platform with product catalog, shopping cart, user authentication, and payment integration.",
      technologies: ["Next.js", "Stripe", "PostgreSQL", "Auth0"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media App",
      description: "Modern social media platform with real-time messaging, post sharing, and user engagement features.",
      technologies: ["React Native", "Firebase", "Redux", "Node.js"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "AI Chat Assistant",
      description: "Intelligent chat assistant powered by machine learning with natural language processing capabilities.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ]

  // Function to handle project clicks
  const handleProjectClick = (url, type) => {
    if (url && url !== '#') {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      alert(`${type} link coming soon! This project is under development.`);
    }
  }

  const handleViewAllProjects = () => {
    // Scroll to contact section to encourage connection
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="projects" className="py-20 px-6 bg-slate-900/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-4 h-4 bg-green-400 rounded-full"
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-3 h-3 bg-cyan-400 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-green-400/10 text-green-400 rounded-full text-sm font-medium mb-4 border border-green-400/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            My Work
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white-400 mb-4 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills in modern web development and design.
          </p>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-green-400 to-cyan-500 mx-auto mt-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          className="grid lg:grid-cols-2 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.slice(0, 2).map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-white/10 hover:border-green-400/30 transition-all duration-500 shadow-2xl"
              whileHover="hover"
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
              
              {/* Project Image/Placeholder */}
              <div className="relative h-48 bg-gradient-to-r from-green-500/20 via-cyan-500/20 to-purple-500/20 overflow-hidden">
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-r from-green-400/10 to-cyan-400/10"
                  animate={{
                    backgroundPosition: ['0% 0%', '100% 100%'],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="w-16 h-16 bg-white/10 rounded-xl backdrop-blur-sm flex items-center justify-center border border-white/20"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Code className="w-8 h-8 text-green-400" />
                  </motion.div>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-xs font-medium border border-green-400/30">
                    Featured
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="relative z-20 p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white group-hover:text-green-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex gap-3">
                    <motion.button
                      onClick={() => handleProjectClick(project.githubUrl, 'GitHub')}
                      className="p-2 bg-white/5 rounded-lg hover:bg-green-400/20 transition-all duration-300 border border-white/10 hover:border-green-400/30"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-4 h-4 text-gray-400 group-hover:text-green-400 transition-colors" />
                    </motion.button>
                    <motion.button
                      onClick={() => handleProjectClick(project.liveUrl, 'Live Demo')}
                      className="p-2 bg-white/5 rounded-lg hover:bg-cyan-400/20 transition-all duration-300 border border-white/10 hover:border-cyan-400/30"
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                    </motion.button>
                  </div>
                </div>

                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-3 py-1 bg-green-400/10 text-green-400 rounded-full text-xs font-medium border border-green-400/20"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-400/5 to-cyan-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Projects */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            More Projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(2).map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                whileHover="hover"
                viewport={{ once: true }}
                className="p-6 bg-white/5 rounded-xl border border-white/10 hover:border-green-400/20 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors">
                    {project.title}
                  </h3>
                  <motion.button
                    onClick={() => handleProjectClick(project.liveUrl, 'Live Demo')}
                    className="p-2 bg-white/5 rounded-lg hover:bg-green-400/20 transition-all"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </motion.button>
                </div>
                
                <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex justify-between items-center">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 text-gray-400 rounded text-xs border border-white/10"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 text-gray-400 rounded text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <motion.button
                    onClick={() => handleProjectClick(project.githubUrl, 'GitHub')}
                    className="flex items-center gap-1 text-green-400 hover:text-green-300 transition-colors text-sm font-medium group/link"
                    whileHover={{ x: 5 }}
                  >
                    Code 
                    <Github className="w-4 h-4 group-hover/link:scale-110 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-green-400/10 to-cyan-400/10 rounded-2xl p-8 border border-green-400/20 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to see more?
            </h3>
            <p className="text-gray-400 mb-6 max-w-md mx-auto">
              I'm constantly working on new projects. Let's connect and discuss how we can work together!
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <motion.button
                onClick={handleViewAllProjects}
                className="px-6 py-3 bg-gradient-to-r from-green-400 to-cyan-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-green-400/25 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
              <motion.button
                onClick={() => handleProjectClick('https://github.com/yourusername', 'GitHub')}
                className="px-6 py-3 border border-green-400 text-green-400 rounded-lg font-semibold hover:bg-green-400/10 transition-all group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center gap-2">
                  View GitHub
                  <Github className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}