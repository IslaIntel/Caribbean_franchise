import Head from 'next/head'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import BrandsSection from '../components/BrandsSection'
import ServicesSection from '../components/ServicesSection'
import businessProfile from '../data/business-profile.json'

export default function AcercaDe() {
  const { company, brands, services, social } = businessProfile

  return (
    <>
      <Head>
        <title>Acerca de - Caribbean Franchise, Inc. | Nuestras Marcas y Servicios</title>
        <meta name="description" content="Descubre lo que ofrecemos: nuestras marcas exitosas como Subway, Red Mango, Açai Express y nuestros servicios especializados de franquicia en Puerto Rico." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="text-white py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#00964B' }}>
          <div className="absolute inset-0 bg-black bg-opacity-10"></div>
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <motion.h1 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight tracking-tight"
              >
                Acerca de
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Lo Que Ofrecemos
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed"
              >
                Descubre nuestras marcas exitosas y los servicios especializados
                <br />
                que ofrecemos a nuestros socios de franquicia
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              >
                <motion.a
                  href="#marcas"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black text-lg font-bold rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-2xl"
                >
                  Ver Nuestras Marcas
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#servicios"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300"
                >
                  Conocer Servicios
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Brands Section */}
        <div id="marcas">
          <BrandsSection brands={brands} />
        </div>
        
        {/* Services Section */}
        <div id="servicios">
          <ServicesSection services={services} />
        </div>
      </main>

      <Footer 
        companyName={company.name}
        addresses={company.headquarters.addresses}
        social={social}
      />
    </>
  )
} 