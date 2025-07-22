'use client'
import { motion } from 'framer-motion'

interface ServicesSectionProps {
  services: string[]
}

  const serviceDetails: { [key: string]: { description: string, icon: string, gradient: string } } = {
    "Operaciones de Franquicia": {
      description: "Te ayudamos a manejar tu franquicia con soporte completo y administración profesional.",
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      gradient: "from-blue-800 to-blue-900"
    },
    "Servicios Contables y Financieros": {
      description: "Manejo de finanzas y contabilidad para que tu restaurante sea más rentable.",
      icon: "M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z",
      gradient: "from-green-800 to-green-900"
    },
    "Administración de Restaurantes": {
      description: "Administramos tu restaurante para asegurar el mejor servicio y satisfacción de clientes.",
      icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z",
      gradient: "from-red-800 to-red-900"
    },
    "Recursos Humanos": {
      description: "Reclutamos, entrenamos y desarrollamos empleados para tu equipo de trabajo.",
      icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 515.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
      gradient: "from-purple-800 to-purple-900"
    },
    "Entrenamiento y Desarrollo": {
      description: "Programas de capacitación para mejorar habilidades y ofrecer mejor servicio.",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      gradient: "from-yellow-800 to-orange-800"
    },
    "Mercadeo y Promociones": {
      description: "Creamos campañas publicitarias para que más clientes conozcan tu negocio.",
      icon: "M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z",
      gradient: "from-pink-800 to-rose-800"
    },
    "Selección de Ubicaciones y Estrategia de Expansión": {
      description: "Te ayudamos a encontrar los mejores lugares para abrir nuevos restaurantes.",
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
      gradient: "from-teal-800 to-cyan-800"
    }
  }

export default function ServicesSection({ services }: ServicesSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <section className="py-32" style={{ backgroundColor: '#DCE4E7' }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-8 tracking-tight"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Ofrecemos soporte integral de franquicia con servicios especializados
            <br />
            para el éxito de nuestros socios comerciales
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => {
            const details = serviceDetails[service]
            if (!details) return null

            return (
              <motion.div
                key={service}
                variants={cardVariants}
                whileHover={{ 
                  y: -10, 
                  scale: 1.02,
                  transition: { duration: 0.3 }
                }}
                className="group relative"
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-gray-200 h-full flex flex-col">
                  
                  {/* Service Content - Centered without checkmarks */}
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">
                      {service}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {details.description}
                    </p>
                  </div>

                  {/* Subtle decorative element */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <div className="w-8 h-1 bg-gradient-to-r mx-auto rounded-full" style={{
                      background: `linear-gradient(to right, #00964B, #1F5198)`
                    }}></div>
                  </div>
                </div>

                {/* Background decoration */}
                <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-3xl" style={{
                  background: `linear-gradient(to bottom right, #00964B, #1F5198)`
                }}></div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-20"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/contactos"
              className="inline-flex items-center px-10 py-5 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl"
              style={{ backgroundColor: '#00964B' }}
            >
              Conoce Más Sobre Nuestros Servicios
              <svg className="ml-3 w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 