import { motion } from 'framer-motion'
import { Code, Palette, Zap, Users, X, ChevronDown, GraduationCap, MapPin, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  const [showMore, setShowMore] = useState(false)

  const skills = [
    { icon: Code, label: 'Full-Stack Development', description: 'React, Node.js, Python' },
    { icon: Palette, label: 'UI/UX Design', description: 'Figma, Tailwind, Framer Motion' },
    { icon: Zap, label: 'Performance', description: 'Optimization & Best Practices' },
    { icon: Users, label: 'Collaboration', description: 'Team Leadership & Mentoring' }
  ]

  // Updated with your education details
  const aboutDetails = {
    education: {
      btech: {
        degree: "B.Tech in Computer Science",
        status: "3rd Year (Currently Pursuing)",
        duration: "2022 - Present"
      },
      diploma: {
        degree: "Diploma in Computer Science",
        institution: "Government Polytechnic",
        years: [
          {
            year: "2nd Year",
            location: "Obulavaripalli",
            note: "Transferred"
          },
          {
            year: "1st Year", 
            location: "Pillarippattu (Puttur)",
            note: ""
          }
        ],
        duration: "2019 - 2022"
      },
      school: {
        degree: "Secondary School (10th)",
        institution: "Victory High School", 
        duration: "2018 - 2019"
      }
    },
    experience: "2+ years in web development",
    specialization: "Full-stack development with focus on React and Node.js",
    passions: [
      "Building responsive and user-friendly applications",
      "Learning new technologies and frameworks",
      "Solving complex problems with clean code",
      "Collaborating on innovative projects"
    ],
    technologies: [
      "Frontend: React, JavaScript, TypeScript, HTML5, CSS3, Tailwind CSS",
      "Backend: Node.js, Express, Python, REST APIs",
      "Database: MongoDB, PostgreSQL, Firebase",
      "Tools: Git, GitHub, VS Code, Figma, Postman"
    ],
    currentFocus: "Building modern web applications and expanding skills in cloud technologies",
    funFact: "I enjoy contributing to open-source projects and learning about AI/ML"
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        type: "spring",
        damping: 25,
        stiffness: 300
      }
    },
    exit: { 
      opacity: 0, 
      scale: 0.8,
      transition: {
        duration: 0.3
      }
    }
  }

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-4">
            Passionate Developer Crafting Digital Experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.label}
                variants={itemVariants}
                className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all group"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <skill.icon className="w-8 h-8 text-blue-400 mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">{skill.label}</h3>
                <p className="text-gray-400 text-sm">{skill.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-gray-300 leading-relaxed">
              I'm a passionate full-stack developer with {aboutDetails.experience.toLowerCase()} 
              creating digital products that users love. I specialize in {aboutDetails.specialization.toLowerCase()}.
            </p>
            <p className="text-xl text-gray-300 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open-source projects, or sharing knowledge with 
              the developer community.
            </p>
            
            <div className="space-y-4">
              <motion.button
                onClick={() => setShowMore(true)}
                className="w-full px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform" />
                Learn More About Me
              </motion.button>
              
              <p className="text-gray-400 text-sm text-center">
                Click to see my background, skills, and passions
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Detailed About Modal */}
      {showMore && (
        <motion.div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setShowMore(false)}
        >
          <motion.div
            className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/10"
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-white/10 sticky top-0 bg-slate-800 rounded-t-2xl">
              <h3 className="text-2xl font-bold text-white">More About Me</h3>
              <motion.button
                onClick={() => setShowMore(false)}
                className="p-2 text-gray-400 hover:text-white transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-6 h-6" />
              </motion.button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-8">
              {/* Education & Background */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-blue-400" />
                  Education Background
                </h4>
                <div className="space-y-6">
                  {/* B.Tech */}
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h5 className="text-lg font-semibold text-white">{aboutDetails.education.btech.degree}</h5>
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30">
                        {aboutDetails.education.btech.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{aboutDetails.education.btech.duration}</span>
                    </div>
                  </div>

                  {/* Diploma */}
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <h5 className="text-lg font-semibold text-white mb-3">{aboutDetails.education.diploma.degree}</h5>
                    <p className="text-gray-300 mb-3">{aboutDetails.education.diploma.institution}</p>
                    <div className="space-y-2">
                      {aboutDetails.education.diploma.years.map((year, index) => (
                        <div key={index} className="flex items-center gap-4 text-gray-400 text-sm">
                          <Calendar size={16} />
                          <span className="font-medium min-w-[60px]">{year.year}:</span>
                          <span className="flex items-center gap-1">
                            <MapPin size={14} />
                            {year.location}
                          </span>
                          {year.note && (
                            <span className="px-2 py-1 bg-orange-500/20 text-orange-300 rounded text-xs border border-orange-500/30">
                              {year.note}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mt-3">
                      <Calendar size={16} />
                      <span>{aboutDetails.education.diploma.duration}</span>
                    </div>
                  </div>

                  {/* 10th Grade */}
                  <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                    <h5 className="text-lg font-semibold text-white mb-2">{aboutDetails.education.school.degree}</h5>
                    <p className="text-gray-300 mb-2">{aboutDetails.education.school.institution}</p>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar size={16} />
                      <span>{aboutDetails.education.school.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Technical Skills */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Code className="w-5 h-5 text-green-400" />
                  Technical Skills
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  {aboutDetails.technologies.map((tech, index) => (
                    <div key={index} className="p-3 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-gray-300 text-sm">{tech}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Passions */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Zap className="w-5 h-5 text-yellow-400" />
                  What Drives Me
                </h4>
                <div className="space-y-3">
                  {aboutDetails.passions.map((passion, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                      <p className="text-gray-300">{passion}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Current Focus */}
              <div>
                <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-3">
                  <Palette className="w-5 h-5 text-purple-400" />
                  Current Focus
                </h4>
                <p className="text-gray-300 leading-relaxed">
                  {aboutDetails.currentFocus}
                </p>
              </div>

              {/* Fun Fact */}
              <div className="p-4 bg-blue-400/10 rounded-xl border border-blue-400/20">
                <h4 className="text-white font-semibold mb-2">Fun Fact</h4>
                <p className="text-gray-300">{aboutDetails.funFact}</p>
              </div>
            </div>

            {/* Footer */}
            <div className="p-6 border-t border-white/10 bg-slate-900/50 rounded-b-2xl">
              <motion.button
                onClick={() => setShowMore(false)}
                className="w-full px-6 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Close
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  )
}