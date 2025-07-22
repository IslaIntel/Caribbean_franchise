'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface Brand {
  name: string
  type: string
  category: string
  url: string | null
}

interface BrandsSectionProps {
  brands: Brand[]
}

const brandLogos: { [key: string]: string } = {
  "Subway": "/images/Subway_logo.png",
  "Açai Express": "/images/acai_express_logo.png", 
  "Red Mango": "/images/red_mango_logo.png",
  "Fueguito / Burritos": "/images/burritos_fuegitos_logo.png"
}

export default function BrandsSection({ brands }: BrandsSectionProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.9
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
    <section className="py-32 bg-white">
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
            Nuestras Marcas
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed font-light"
          >
            Operamos las marcas de restaurantes más exitosas y reconocidas
            <br />
            ofreciendo experiencias culinarias excepcionales en Puerto Rico
          </motion.p>
        </motion.div>

        {/* Brands Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {brands.map((brand, index) => (
            <motion.div
              key={brand.name}
              variants={cardVariants}
              whileHover={{ 
                y: -15, 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="group relative"
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-gray-200 text-center h-full flex flex-col justify-between"
                   style={{ backgroundColor: '#DCE4E7' }}>
                
                {/* Brand Logo */}
                <div className="mb-6">
                  <div className="w-32 h-32 mx-auto bg-white rounded-2xl p-4 shadow-md flex items-center justify-center">
                    {brandLogos[brand.name] ? (
                      <Image
                        src={brandLogos[brand.name]}
                        alt={`Logo de ${brand.name}`}
                        width={120}
                        height={120}
                        className="max-w-full max-h-full object-contain"
                      />
                    ) : (
                      <div className="text-4xl">🏪</div>
                    )}
                  </div>
                </div>

                {/* Brand Info */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                    {brand.name}
                  </h3>
                  
                  <p className="text-gray-600 text-lg mb-4 leading-relaxed">
                    {brand.category}
                  </p>
                  
                  <div className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold text-white"
                       style={{ backgroundColor: '#00964B' }}>
                    {brand.type}
                  </div>
                </div>

                {/* Decorative element */}
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="w-8 h-1 bg-gradient-to-r mx-auto rounded-full" style={{
                    background: `linear-gradient(to right, #00964B, #1F5198)`
                  }}></div>
                </div>
              </div>

              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl" style={{
                background: `linear-gradient(to bottom right, #00964B, #1F5198)`
              }}></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="rounded-3xl p-10 shadow-lg" style={{ backgroundColor: '#DCE4E7' }}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-black mb-2" style={{ color: '#00964B' }}>+20</div>
                <div className="text-xl font-semibold text-gray-700">Restaurantes Exitosos</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black mb-2" style={{ color: '#1F5198' }}>4</div>
                <div className="text-xl font-semibold text-gray-700">Marcas Líderes</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-black mb-2" style={{ color: '#00964B' }}>240+</div>
                <div className="text-xl font-semibold text-gray-700">Empleados Felices</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/empleos"
              className="inline-flex items-center px-10 py-5 text-white font-bold text-lg rounded-2xl transition-all duration-300 shadow-2xl hover:shadow-3xl"
              style={{ backgroundColor: '#1F5198' }}
            >
              Únete a Nuestro Equipo
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