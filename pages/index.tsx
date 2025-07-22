'use client'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { useState } from 'react'
import businessProfile from '../data/business-profile.json'
import Navigation from '../components/Navigation'
import HeroSection from '../components/HeroSection'
import Footer from '../components/Footer'

export default function Home() {
  const { company, social, seo } = businessProfile
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="keywords" content={seo.keywords.join(', ')} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={company.name} />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seo.title} />
        <meta name="twitter:description" content={seo.description} />
        
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </Head>

      <Navigation scrollToSection={scrollToSection} isHomePage={true} />

      <main className="overflow-hidden">
        <HeroSection 
          companyName={company.name}
          description={company.description}
          founded={company.founded}
          territory={company.headquarters.territory}
        />
        
        {/* Enhanced CTA Section */}
        <section className="py-20" style={{ backgroundColor: '#DCE4E7' }}>
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl sm:text-4xl font-black text-gray-900">
                Descubre Todo Sobre
                <br />
                <span style={{ color: '#1F5198' }}>Caribbean Franchise</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Haz click en cualquiera de estos para explorar quiénes somos, lo que ofrecemos y cómo unirte a nuestro equipo
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {[
                  { 
                    title: "Nosotros", 
                    link: "/nosotros", 
                    icon: "🏢", 
                    description: "Nuestra historia y fortalezas desde 2007",
                    color: '#00964B'
                  },
                  { 
                    title: "Acerca de", 
                    link: "/acerca-de", 
                    icon: "⭐", 
                    description: "Nuestras marcas y servicios especializados",
                    color: '#1F5198'
                  },
                  { 
                    title: "Empleos", 
                    link: "/empleos", 
                    icon: "💼", 
                    description: "Únete a nuestro equipo en +20 restaurantes exitosos",
                    color: '#00964B'
                  },
                  { 
                    title: "Contáctanos", 
                    link: "/contactos", 
                    icon: "📞", 
                    description: "Habla con nosotros y solicita tu plaza",
                    color: '#1F5198'
                  }
                ].map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-100 transition-all duration-300"
                  >
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                    <div className="mt-4 w-full h-1 rounded-full" style={{ backgroundColor: item.color, opacity: 0.2 }}></div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        
        <Footer 
          companyName={company.name}
          addresses={company.headquarters.addresses}
          social={social}
        />
      </main>
    </>
  )
} 