'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  companyName: string
  description: string
  founded: string
  territory: string
}

export default function HeroSection({ companyName, description, founded, territory }: HeroSectionProps) {
  return (
    <section className="text-white py-32 px-6 relative overflow-hidden" style={{ backgroundColor: '#00964B' }}>
      {/* Background pattern/texture */}
      <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="max-w-7xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-12"
        >
          {/* Main Title - Much Larger and More Confident */}
          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-tight tracking-tight"
          >
            {companyName}
          </motion.h1>
          
          {/* Subtitle - Enhanced Typography */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl sm:text-2xl lg:text-3xl text-white max-w-4xl mx-auto leading-relaxed font-medium"
          >
            Operador líder de franquicias en {territory} desde {founded}
          </motion.p>
          
          {/* Description - Better Spacing */}
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg sm:text-xl text-white max-w-4xl mx-auto leading-relaxed font-light opacity-90"
          >
            {description}
          </motion.p>
          
          {/* CTA Buttons - Enhanced with Better Animation */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                href="/acerca-de" 
                className="inline-flex items-center px-10 py-5 bg-white text-black text-xl font-bold rounded-2xl hover:bg-gray-100 transition-all duration-300 ease-in-out shadow-2xl shadow-black/20 hover:shadow-3xl"
              >
                Explorar Marcas
                <motion.svg 
                  className="ml-3 w-6 h-6"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  whileHover={{ x: 3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </motion.svg>
              </Link>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Link 
                href="/contactos" 
                className="inline-flex items-center px-10 py-5 bg-transparent border-3 border-white text-white text-xl font-bold rounded-2xl hover:bg-white hover:text-black transition-all duration-300 ease-in-out"
              >
                Contáctanos
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Stats - Enhanced Visual Design */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-12 pt-20 max-w-4xl mx-auto"
          >
            {[
              { number: "+20", label: "Restaurantes Exitosos", icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" },
              { number: "4", label: "Marcas Líderes", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
              { number: `${new Date().getFullYear() - parseInt(founded)}+`, label: "Años de Experiencia", icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-3xl p-8 border border-white border-opacity-20"
              >
                <div className="flex justify-center mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                  </svg>
                </div>
                <div className="text-4xl sm:text-5xl font-black text-white mb-3">{stat.number}</div>
                <div className="text-white text-lg font-semibold uppercase tracking-wider opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 