import Head from 'next/head'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import AboutSection from '../components/AboutSection'
import StrengthsSection from '../components/StrengthsSection'
import businessProfile from '../data/business-profile.json'

export default function Nosotros() {
  const { company, strengths, social } = businessProfile

  return (
    <>
      <Head>
        <title>Nosotros - Caribbean Franchise, Inc. | Nuestra Empresa y Fortalezas</title>
        <meta name="description" content="Conoce Caribbean Franchise, Inc. Nuestra historia desde 2007, nuestros valores y las fortalezas que nos hacen líderes en franquicias de restaurantes en Puerto Rico." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="text-white py-24 px-6 relative overflow-hidden" style={{ backgroundColor: '#1F5198' }}>
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
                Nosotros
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Caribbean Franchise
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed"
              >
                Conoce nuestra historia, valores y las fortalezas que nos hacen
                <br />
                líderes en franquicias de restaurantes en Puerto Rico
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <AboutSection 
          companyName={company.name}
          founded={company.founded}
          city={company.headquarters.city}
          territory={company.headquarters.territory}
          description={company.description}
          employeeCount={company.employeeCount}
          addresses={company.headquarters.addresses}
        />
        
        {/* Strengths Section */}
        <StrengthsSection strengths={strengths} />
      </main>

      <Footer 
        companyName={company.name}
        addresses={company.headquarters.addresses}
        social={social}
      />
    </>
  )
} 