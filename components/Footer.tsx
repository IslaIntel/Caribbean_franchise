'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface Address {
  type: string
  line1: string
  suite: string
  city: string
  zip: string
}

interface Social {
  linkedin: string | null
  facebook: string | null
  instagram?: string | null
  email: string
}

interface FooterProps {
  companyName: string
  addresses: Address[]
  social: Social
}

export default function Footer({ companyName, addresses, social }: FooterProps) {
  const registeredAddress = addresses.find(addr => addr.type === 'registered') || addresses[0]
  const officeAddress = addresses.find(addr => addr.type === 'office') || addresses[1]

  return (
    <footer id="contact" className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}></div>
      
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-16">
          {/* Company Info - Enhanced */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-3xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
                {companyName}
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg max-w-lg">
                Operador líder de franquicias en Puerto Rico, brindando
                soporte integral y experiencia para ayudar a los negocios de restaurantes
                a prosperar y crecer a través del Caribe.
              </p>
            </div>

            {/* Enhanced Social Links */}
            <div>
              <h4 className="text-xl font-bold mb-4 text-white">Conéctate con Nosotros</h4>
              <div className="flex space-x-4">
                {social.linkedin && (
                  <motion.a
                    href={social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center hover:bg-blue-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </motion.a>
                )}
                
                {social.facebook && (
                  <motion.a
                    href={social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center hover:bg-blue-400 transition-colors duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </motion.a>
                )}

                {social.instagram && (
                  <motion.a
                    href={social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center hover:from-purple-400 hover:to-pink-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.017 0C8.396 0 7.989.016 6.756.072 5.526.127 4.666.302 3.906.557c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.375 4.9.2 5.76.145 6.99.089 8.223.073 8.63.073 12.017s.016 3.794.072 5.027c.055 1.23.23 2.09.485 2.85.306.789.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.76.255 1.62.43 2.85.485 1.233.056 1.64.072 5.027.072s3.794-.016 5.027-.072c1.23-.055 2.09-.23 2.85-.485.789-.305 1.459-.718 2.126-1.384.666-.667 1.079-1.337 1.384-2.126.255-.76.43-1.62.485-2.85.056-1.233.072-1.64.072-5.027s-.016-3.794-.072-5.027c-.055-1.23-.23-2.09-.485-2.85-.305-.789-.718-1.459-1.384-2.126C19.76.935 19.091.63 18.301.375c-.76-.255-1.62-.43-2.85-.485C14.218.089 13.811.073 10.424.073L12.017 0zm0 2.158c3.335 0 3.728.013 5.045.066 1.217.056 1.878.258 2.318.428.583.227.999.497 1.436.934.437.437.707.853.934 1.436.17.44.372 1.101.428 2.318.053 1.317.066 1.71.066 5.045s-.013 3.728-.066 5.045c-.056 1.217-.258 1.878-.428 2.318-.227.583-.497.999-.934 1.436-.437.437-.853.707-1.436.934-.44.17-1.101.372-2.318.428-1.317.053-1.71.066-5.045.066s-3.728-.013-5.045-.066c-1.217-.056-1.878-.258-2.318-.428-.583-.227-.999-.497-1.436-.934-.437-.437-.707-.853-.934-1.436-.17-.44-.372-1.101-.428-2.318-.053-1.317-.066-1.71-.066-5.045s.013-3.728.066-5.045c.056-1.217.258-1.878.428-2.318.227-.583.497-.999.934-1.436.437-.437.853-.707 1.436-.934.44-.17 1.101-.372 2.318-.428 1.317-.053 1.71-.066 5.045-.066z"/>
                      <path d="M12.017 5.838A6.179 6.179 0 1 0 18.196 12.017 6.179 6.179 0 0 0 12.017 5.838zm0 10.18A4.001 4.001 0 1 1 16.018 12.017 4.001 4.001 0 0 1 12.017 16.018z"/>
                      <circle cx="18.406" cy="5.594" r="1.44"/>
                    </svg>
                  </motion.a>
                )}

                <motion.a
                  href={`mailto:${social.email}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-teal-600 rounded-2xl flex items-center justify-center hover:bg-teal-500 transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>

          {/* Office Location */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="bg-teal-600 rounded-2xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <h4 className="text-lg font-bold text-white">Ubicación de Oficina</h4>
              </div>
              <div className="text-teal-100 space-y-1">
                <p>{officeAddress?.line1}</p>
                <p>{officeAddress?.suite}</p>
                <p>{officeAddress?.city}, {officeAddress?.zip}</p>
              </div>
            </div>
          </motion.div>

          {/* Registered Address */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-blue-600 rounded-2xl p-6 mb-8">
              <div className="flex items-center mb-4">
                <svg className="w-6 h-6 text-white mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h4 className="text-lg font-bold text-white">Dirección Registrada</h4>
              </div>
              <div className="text-blue-100 space-y-1">
                <p>{registeredAddress?.line1}</p>
                <p>{registeredAddress?.suite}</p>
                <p>{registeredAddress?.city}, {registeredAddress?.zip}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-16 text-center"
        >
          <p className="text-gray-400">
            © {new Date().getFullYear()} {companyName}. Todos los derechos reservados.
          </p>
          <p className="text-gray-500 mt-2 text-sm">
            Orgullosos de servir a Puerto Rico desde 2007
          </p>
        </motion.div>
      </div>
    </footer>
  )
} 