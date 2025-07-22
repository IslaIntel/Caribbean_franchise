'use client'
import { motion } from 'framer-motion'

interface Address {
  type: string
  line1: string
  suite: string
  city: string
  zip: string
}

interface AboutSectionProps {
  companyName: string
  founded: string
  city: string
  territory: string
  description: string
  employeeCount: {
    min: number
    max: number
  }
  addresses: Address[]
}

export default function AboutSection({ 
  companyName, 
  founded, 
  city, 
  territory, 
  description, 
  employeeCount,
  addresses 
}: AboutSectionProps) {
  const officeAddress = addresses.find(addr => addr.type === 'office') || addresses[0]
  const yearsExperience = new Date().getFullYear() - parseInt(founded)
  
  const statsData = [
    {
      number: `${yearsExperience}+`,
      label: "Años de Experiencia",
      sublabel: "Desde " + founded,
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      number: "240+",
      label: "Miembros del Equipo",
      sublabel: "Profesionales dedicados",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      gradient: "from-teal-500 to-teal-600"
    }
  ]
  
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* Left Column - Company Info */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <motion.h2 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight"
              >
                ¿Qué es Caribbean Franchise, Inc?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-xl text-gray-600 leading-relaxed font-light"
              >
                {description}
              </motion.p>
            </div>

            {/* Enhanced Company Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {statsData.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    scale: 1.05, 
                    transition: { duration: 0.2 } 
                  }}
                  className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 border border-gray-200 hover:border-teal-200 hover:shadow-lg transition-all duration-300"
                >
                  {/* Icon */}
                  <motion.div 
                    className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={stat.icon} />
                    </svg>
                  </motion.div>

                  {/* Content */}
                  <div className="space-y-3">
                    <div className="text-4xl font-black text-gray-900">{stat.number}</div>
                    <div className="text-xl font-bold text-gray-900">{stat.label}</div>
                    <div className="text-gray-600">{stat.sublabel}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Office & Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Headquarters Info Card */}
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 border border-teal-100">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="flex items-start space-x-6"
              >
                <div className="w-16 h-16 bg-teal-500 rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Oficina Principal</h3>
                  <div className="space-y-2 text-gray-700">
                    <div className="font-semibold">Fundada</div>
                    <div className="text-lg">{founded} en {city}, {territory}</div>
                    <div className="font-semibold mt-4">Ubicación de Oficina</div>
                    <div className="space-y-1">
                      <div>{officeAddress?.line1}</div>
                      <div>{officeAddress?.suite}</div>
                      <div>{officeAddress?.city}, {officeAddress?.zip}</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Territory Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl p-8 text-white text-center shadow-xl">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  </svg>
                  <span className="text-2xl font-black">{territory}</span>
                </div>
                <p className="text-lg text-teal-100">
                  Orgullosos de servir a toda la isla con excelencia
                </p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <motion.a
                href="/acerca-de"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-teal-600 text-white text-lg font-bold rounded-2xl hover:bg-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Conoce Más Sobre Nosotros
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 