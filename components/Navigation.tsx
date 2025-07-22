'use client'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import { useRouter } from 'next/router'

interface NavigationProps {
  scrollToSection?: (sectionId: string) => void
  isHomePage?: boolean
}

export default function Navigation({ scrollToSection, isHomePage = false }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const handleNavigation = (path: string) => {
    router.push(path)
    setIsMenuOpen(false)
  }

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Nosotros', path: '/nosotros' },
    { name: 'Acerca de', path: '/acerca-de' },
    { name: 'Empleos', path: '/empleos' },
    { name: 'Contáctanos', path: '/contactos' }
  ]

  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50 border-b border-gray-100"
    >
      <nav className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-18">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center"
            whileHover={{ scale: 1.02 }}
          >
            <Link href="/" className="flex-shrink-0 flex items-center">
              <div className="relative">
                <Image
                  src="/images/logo.png"
                  alt="Logo Caribbean Franchise"
                  width={280}
                  height={84}
                  className="h-16 w-auto object-contain"
                  priority
                />
              </div>
            </Link>
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.button
                key={`${item.name}-${index}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                onClick={() => handleNavigation(item.path)}
                className={`font-semibold text-base transition-colors duration-200 relative group ${
                  router.pathname === item.path
                    ? 'text-teal-600'
                    : 'text-gray-600 hover:text-teal-600'
                }`}
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-teal-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left"></span>
              </motion.button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-teal-600 focus:outline-none focus:text-teal-600 transition-colors duration-200"
              aria-label="Alternar menú móvil"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} 
                />
              </svg>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0, opacity: isMenuOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-100">
            {navItems.map((item, index) => (
              <motion.button
                key={`mobile-${item.name}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: isMenuOpen ? 0.1 * index : 0 }}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md ${
                  router.pathname === item.path
                    ? 'text-teal-600 bg-teal-50'
                    : 'text-gray-600 hover:text-teal-600 hover:bg-gray-50'
                }`}
              >
                {item.name}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </nav>
    </motion.header>
  )
} 