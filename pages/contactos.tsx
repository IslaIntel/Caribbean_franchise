import Head from 'next/head'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import businessProfile from '../data/business-profile.json'

export default function Contactos() {
  const { company, social } = businessProfile
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    jobType: '',
    location: '',
    message: '',
    resume: null as File | null
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData(prev => ({
        ...prev,
        resume: e.target.files![0]
      }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.')
  }

  const contactInfo = [
    {
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
      title: "Correo Electrónico",
      content: "info@caribbeanfranchisepr.com",
      href: "mailto:info@caribbeanfranchisepr.com"
    },
    {
      icon: "M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z",
      title: "Teléfono",
      content: "787-282-0101\nExt.219 Recursos Humanos",
      href: "tel:787-282-0101"
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
      title: "Oficina",
      content: "Calle Alda, Suite 301\nUrb. Caribe, San Juan 00926",
      href: "#"
    }
  ]

  const jobTypes = [
    "Team member",
    "Artista del sandwich"
  ]

  const locations = [
    "San Juan",
    "Bayamón", 
    "Carolina",
    "Caguas",
    "Ponce",
    "Mayagüez",
    "Arecibo",
    "Otro"
  ]

  return (
    <>
      <Head>
        <title>Contáctanos - Caribbean Franchise, Inc. | Únete a Nuestro Equipo</title>
        <meta name="description" content="¿Interesado en trabajar con Caribbean Franchise? Contáctanos hoy y descubre las oportunidades de carrera en nuestros restaurantes en Puerto Rico." />
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
                Contáctanos
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  Hoy Mismo
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed"
              >
                ¿Listo para formar parte del equipo líder en franquicias?
                <br />
                Completa el formulario y comencemos tu historia de éxito
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden" style={{ backgroundColor: '#DCE4E7' }}>
          {/* Background decorative elements */}
          <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 -translate-x-48 -translate-y-48" style={{ backgroundColor: '#00964B' }}></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 translate-x-40 translate-y-40" style={{ backgroundColor: '#1F5198' }}></div>

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              
              {/* Left side - Image/Illustration */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                     style={{ backgroundColor: '#00964B' }}>
                  <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-20 rounded-full -translate-y-16 translate-x-16"></div>
                  
                  <div className="relative z-10">
                    <div className="w-32 h-32 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg overflow-hidden">
                      <Image
                        src="/images/contactanos_persona.png"
                        alt="Contáctanos Caribbean Franchise"
                        width={120}
                        height={120}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <h3 className="text-3xl font-black mb-6 text-center">
                      ¡Tu futuro profesional
                      <br />
                      te espera!
                    </h3>
                    
                    <div className="space-y-4">
                      {contactInfo.map((info, index) => (
                        <motion.a
                          key={index}
                          href={info.href}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: index * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02 }}
                          className="flex items-center space-x-4 p-4 bg-white bg-opacity-20 rounded-2xl hover:bg-opacity-30 transition-all duration-300 backdrop-blur-sm"
                        >
                          <div className="w-10 h-10 bg-white bg-opacity-30 rounded-lg flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={info.icon} />
                            </svg>
                          </div>
                          <div>
                            <div className="font-bold text-lg">{info.title}</div>
                            <div className="text-white whitespace-pre-line opacity-90">{info.content}</div>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right side - Form */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-10 shadow-2xl relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-2 rounded-full" style={{ backgroundColor: '#1F5198' }}></div>
                
                <h2 className="text-3xl font-black text-gray-900 mb-2">
                  Solicita Tu Plaza
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  Completa el formulario y nos pondremos en contacto contigo
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Nombre Completo</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none"
                        placeholder="Tu nombre completo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Correo Electrónico</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none"
                        placeholder="tu@correo.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Teléfono</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none"
                        placeholder="787-000-0000"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 font-semibold mb-2">Posición de Interés</label>
                      <select
                        name="jobType"
                        value={formData.jobType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none"
                      >
                        <option value="">Selecciona una posición</option>
                        {jobTypes.map((job, index) => (
                          <option key={index} value={job}>{job}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Ubicación Preferida</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none"
                      placeholder="Ej: San Juan, Bayamón, etc."
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Mensaje</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none resize-none"
                      placeholder="Cuéntanos por qué quieres trabajar con nosotros..."
                    ></textarea>
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Resume (Opcional)</label>
                    <div className="relative">
                      <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-green-600 focus:ring-4 focus:ring-green-100 transition-all duration-300 outline-none file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-green-700 file:text-white hover:file:bg-green-600"
                      />
                    </div>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-lg"
                    style={{ backgroundColor: '#00964B' }}
                  >
                    Enviar Solicitud
                    <svg className="inline-block ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Additional CTA Section */}
        <section className="py-16 text-white" style={{ backgroundColor: '#1F5198' }}>
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold">¿Prefieres llamar directamente?</h2>
              <p className="text-xl text-blue-100">
                Nuestro equipo está disponible para responder todas tus preguntas
              </p>
              <motion.a
                href="tel:787-282-0101"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black text-xl font-bold rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-lg"
              >
                <div className="text-center">
                  📞 787-282-0101
                  <br />
                  <span className="text-sm font-normal">Ext.219 Recursos Humanos</span>
                </div>
              </motion.a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer 
        companyName={company.name}
        addresses={company.headquarters.addresses}
        social={social}
      />
    </>
  )
} 