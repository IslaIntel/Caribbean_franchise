import Head from 'next/head'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState } from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Image from 'next/image'

// Import business data
import businessProfile from '../data/business-profile.json'

export default function Empleos() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    availability: '',
    message: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert('¡Gracias por tu interés! Nos pondremos en contacto contigo pronto.')
  }

  const benefits = [
    {
      icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Salarios Competitivos",
      description: "Plazas desde $8.75 por hora con oportunidades de crecimiento salarial"
    },
    {
      icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Horarios Flexibles",
      description: "Trabajamos contigo para encontrar horarios que se adapten a tu vida"
    },
    {
      icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
      title: "Plan Médico",
      description: "Cobertura de salud completa para ti y tu familia"
    },
    {
      icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
      title: "Plan de Retiro 401k",
      description: "Plan de retiro con aportación patronal para tu futuro"
    },
    {
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
      title: "Capacitación y Desarrollo",
      description: "Programas de entrenamiento continuo para tu crecimiento profesional"
    },
    {
      icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z",
      title: "Ubicación Cercana",
      description: "Con +20 restaurantes exitosos, seguro hay uno cerca de tu hogar"
    }
  ]

  const testimonials = [
    {
      name: "Elena Santiago",
      position: "Gerente Subway",
      image: "/images/gerentedesubway.jpg",
      quote: "Fue aquel 24 de diciembre de 1997 en que decidí formar parte de la compañía Subway. Aquella empleada con muchos sueños y deseos de superación. Siendo el primer subway de los presidentes José Vázquez y Maritza Hernández. Muchos años de aprendizaje y crecimiento laboral, no fue fácil pero lo logré, he hecho este trabajo por 25 años, toda una vida y me siento muy orgullosa de ser parte y pertenecer a esta empresa que somos más que Caribbean Franchise, mi familia.",
      years: "25"
    },
    {
      name: "Antonio González",
      position: "Gerente de Subway",
      image: "/images/gerentedesubway2.png", 
      quote: "Soy Antonio González y comencé en Subway en el año 2000, ya llevo 22 años. Comencé en Subway de Jardines Reales como empleado regular, ahí me convertí en asistente. Luego me trasladaron a Subway de Esmeralda como gerente. A lo largo de estos 22 años he estado en varias tiendas y actualmente soy gerente de la tienda de Santolaya en Caguas.",
      years: "22"
    }
  ]

  return (
    <>
      <Head>
        <title>Empleos - Caribbean Franchise, Inc. | Únete a Nuestro Equipo</title>
        <meta name="description" content="Únete al equipo de Caribbean Franchise y desarrolla tu carrera en la industria de restaurantes. Ofrecemos salarios competitivos, beneficios completos y oportunidades de crecimiento." />
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
                Caribbean Franchise,
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                  tu próxima oportunidad
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl sm:text-2xl text-white max-w-4xl mx-auto leading-relaxed"
              >
                Una empresa donde crecer profesionalmente está al alcance de todos.
                <br />
                Únete a nuestro equipo de más de 240 empleados en Puerto Rico.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
              >
                <motion.a
                  href="/contactos"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black text-lg font-bold rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-2xl"
                >
                  Solicita Tu Plaza
                  <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
                
                <motion.a
                  href="#beneficios"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 text-white text-lg font-bold rounded-xl hover:bg-white hover:text-black transition-all duration-300"
                  style={{ borderColor: 'white' }}
                >
                  Ver Beneficios
                </motion.a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Story Section with Image */}
        <section className="py-20" style={{ backgroundColor: '#DCE4E7' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div className="font-bold text-lg" style={{ color: '#00964B' }}>TRABAJA EN UN RESTAURANTE DE PUERTO RICO</div>
                <h2 className="text-4xl lg:text-5xl font-black text-gray-900">
                  En Caribbean Franchise,
                  <br />
                  <span style={{ color: '#1F5198' }}>desde 2007</span>
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  nos dedicamos al manejo y operación de restaurantes de comida rápida. 
                  Actualmente, contamos con +20 restaurantes exitosos y 240+ empleados.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Estamos orgullosos de ser una empresa líder en el manejo de restaurantes, 
                  con presencia en múltiples municipios a través de todo Puerto Rico.
                </p>
                <motion.a
                  href="/contactos"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-6 py-3 text-white font-bold rounded-lg transition-all duration-300"
                  style={{ backgroundColor: '#1F5198' }}
                >
                  Únete al Equipo
                </motion.a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl" style={{ backgroundColor: '#00964B' }}></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                    <Image
                      src="/images/unete_al_equipo_persona.png"
                      alt="Únete al Equipo Caribbean Franchise"
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16" style={{ backgroundColor: '#1F5198' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold text-white mb-4">+240 EMPLEADOS NOS ELIGEN A DIARIO</h2>
            </motion.div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "240+", label: "Empleados Felices", icon: "😊" },
                { number: "+20", label: "Restaurantes Exitosos", icon: "🏪" },
                { number: "17+", label: "Años de Experiencia", icon: "🏆" },
                { number: "4", label: "Marcas Líderes", icon: "⭐" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center text-white"
                >
                  <div className="text-6xl mb-4">{stat.icon}</div>
                  <div className="text-4xl font-black mb-2">{stat.number}</div>
                  <div className="text-blue-100 font-semibold uppercase tracking-wider text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section - Completely Redesigned */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-gray-900 mb-4">Lo que dicen nuestros empleados</h2>
              <p className="text-xl text-gray-600">Historias reales de crecimiento profesional</p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="bg-white rounded-3xl p-8 shadow-2xl border-2" style={{ borderColor: '#DCE4E7' }}>
                    {/* Profile Image with Aesthetic Effect */}
                    <div className="relative mb-8 flex justify-center">
                      <div className="absolute -inset-4 rounded-full opacity-20 blur-xl" style={{ backgroundColor: index === 0 ? '#00964B' : '#1F5198' }}></div>
                      <div className="relative">
                        <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-xl flex items-center justify-center bg-gray-100">
                          <Image
                            src={testimonial.image}
                            alt={testimonial.name}
                            width={128}
                            height={128}
                            className="w-full h-full object-cover"
                            style={{ objectPosition: testimonial.name === 'Elena Santiago' ? 'center 20%' : 'center center' }}
                          />
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-bold shadow-lg"
                             style={{ backgroundColor: index === 0 ? '#00964B' : '#1F5198' }}>
                          {testimonial.years}
                        </div>
                      </div>
                    </div>
                    
                    {/* Quote */}
                    <blockquote className="text-gray-700 text-lg leading-relaxed mb-6 italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    {/* Attribution */}
                    <div className="text-center">
                      <div className="font-bold text-gray-900 text-xl mb-1">{testimonial.name}</div>
                      <div className="text-gray-600">{testimonial.position}</div>
                      <div className="font-semibold mt-2" style={{ color: index === 0 ? '#00964B' : '#1F5198' }}>
                        {testimonial.years} años con nosotros
                      </div>
                    </div>
                    
                    {/* Decorative element */}
                    <div className="mt-6 pt-4 border-t" style={{ borderColor: '#DCE4E7' }}>
                      <div className="w-12 h-1 bg-gradient-to-r mx-auto rounded-full" style={{
                        background: `linear-gradient(to right, #00964B, #1F5198)`
                      }}></div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brands Section */}
        <section className="py-16" style={{ backgroundColor: '#DCE4E7' }}>
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-4">+20 RESTAURANTES EXITOSOS</h2>
              <p className="text-xl text-gray-600">Trabaja en las mejores marcas de comida rápida</p>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {businessProfile.brands.map((brand, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-32 h-32 mx-auto mb-4 bg-gray-50 rounded-xl flex items-center justify-center p-2">
                    {brand.name === 'Subway' && (
                      <Image
                        src="/images/Subway_logo.png"
                        alt="Logo Subway"
                        width={120}
                        height={60}
                        className="max-w-full max-h-full object-contain"
                      />
                    )}
                    {brand.name === 'Açai Express' && (
                      <Image
                        src="/images/acai_express_logo.png"
                        alt="Logo Açai Express"
                        width={120}
                        height={60}
                        className="max-w-full max-h-full object-contain"
                      />
                    )}
                    {brand.name === 'Red Mango' && (
                      <Image
                        src="/images/red_mango_logo.png"
                        alt="Logo Red Mango"
                        width={120}
                        height={60}
                        className="max-w-full max-h-full object-contain"
                      />
                    )}
                    {brand.name === 'Fueguito / Burritos' && (
                      <Image
                        src="/images/burritos_fuegitos_logo.png"
                        alt="Logo Fueguito / Burritos"
                        width={120}
                        height={60}
                        className="max-w-full max-h-full object-contain"
                      />
                    )}
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{brand.name}</h3>
                  <p className="text-gray-600 text-sm">{brand.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section with Image */}
        <section id="beneficios" className="py-20" style={{ backgroundColor: '#DCE4E7' }}>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-black mb-8" style={{ color: '#1F5198' }}>
                  Nuestros
                  <br />
                  beneficios
                </h2>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start space-x-4"
                    >
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-1"
                           style={{ backgroundColor: '#00964B' }}>
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.icon} />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl" style={{ backgroundColor: '#1F5198' }}></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                    <Image
                      src="/images/Beneficios_persona.png"
                      alt="Beneficios Caribbean Franchise"
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-gray-900 mb-4">Conoce a Nuestros Gerentes</h2>
              <p className="text-xl text-gray-600">Historias reales de nuestros líderes en Subway Puerto Rico</p>
            </motion.div>

            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl overflow-hidden shadow-2xl"
              >
                <div className="aspect-video relative" style={{ backgroundColor: '#DCE4E7' }}>
                  <video
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                  >
                    <source 
                      src="https://caribbeanfranchisepr.com/wp-content/uploads/2023/03/Subway-San-Francisco-1.mp4" 
                      type="video/mp4" 
                    />
                    Tu navegador no soporta la reproducción de video.
                  </video>
                  
                  {/* Custom Play button overlay */}
                  <div 
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 hover:bg-opacity-10 transition-all duration-300 group cursor-pointer"
                    onClick={(e) => {
                      const video = e.currentTarget.parentElement?.querySelector('video') as HTMLVideoElement;
                      if (video) {
                        if (video.paused) {
                          video.play();
                          e.currentTarget.style.display = 'none';
                        }
                      }
                    }}
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300 shadow-lg"
                    >
                      <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24" style={{ color: '#00964B' }}>
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </motion.div>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="text-3xl mb-2">👨‍💼</div>
                      <h3 className="font-bold text-gray-900">Liderazgo Auténtico</h3>
                      <p className="text-gray-600 text-sm">Gerentes comprometidos con la excelencia</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🎯</div>
                      <h3 className="font-bold text-gray-900">Experiencia Real</h3>
                      <p className="text-gray-600 text-sm">Historias de crecimiento profesional</p>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl mb-2">🤝</div>
                      <h3 className="font-bold text-gray-900">Trabajo en Equipo</h3>
                      <p className="text-gray-600 text-sm">Un ambiente colaborativo y de apoyo</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Requirements & Application Section with Image */}
        <section id="aplicar" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-black text-gray-900 mb-8">
                <span style={{ color: '#1F5198' }}>REQUISITOS</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                         style={{ backgroundColor: '#00964B' }}>
                      <span className="text-white text-xl">👍</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Ser mayor de 18 años</h3>
                      <p className="text-gray-600">Edad mínima requerida para trabajar</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                         style={{ backgroundColor: '#00964B' }}>
                      <span className="text-white text-xl">📅</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Disponibilidad los fines de semana</h3>
                      <p className="text-gray-600">Flexibilidad para trabajar sábados y domingos</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center"
                         style={{ backgroundColor: '#00964B' }}>
                      <span className="text-white text-xl">💪</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">Ganas de trabajar y crecer</h3>
                      <p className="text-gray-600">Actitud positiva y deseos de desarrollo profesional</p>
                    </div>
                  </div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl"
                  style={{ backgroundColor: '#DCE4E7' }}
                >
                  <h3 className="text-2xl font-bold mb-4" style={{ color: '#1F5198' }}>¿Te interesa?</h3>
                  <p className="text-gray-700 text-lg">
                    ¿Estás listo para crecer profesionalmente junto a Caribbean Franchise?
                  </p>
                </motion.div>
              </motion.div>

              {/* Requirements Image with Aesthetic Effect */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative">
                  <div className="absolute -inset-4 rounded-3xl opacity-30 blur-2xl" style={{ backgroundColor: '#00964B' }}></div>
                  <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                    <Image
                      src="/images/Requisitos_person.png"
                      alt="Requisitos Caribbean Franchise"
                      width={400}
                      height={400}
                      className="w-full h-auto object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Application Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="max-w-4xl mx-auto p-8 rounded-2xl" style={{ backgroundColor: '#DCE4E7' }}>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Solicita Ahora Tu Plaza</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre completo"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ '--tw-ring-color': '#00964B' } as any}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Correo Electrónico"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ '--tw-ring-color': '#00964B' } as any}
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Teléfono"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ '--tw-ring-color': '#00964B' } as any}
                    />
                    <select
                      name="position"
                      value={formData.position}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ '--tw-ring-color': '#00964B' } as any}
                    >
                      <option value="">Posición de interés</option>
                      <option value="team-member">Team member</option>
                      <option value="artista-sandwich">Artista del sandwich</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select
                      name="experience"
                      value={formData.experience}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ '--tw-ring-color': '#00964B' } as any}
                    >
                      <option value="">Experiencia en restaurantes</option>
                      <option value="none">Sin experiencia</option>
                      <option value="less-1">Menos de 1 año</option>
                      <option value="1-3">1-3 años</option>
                      <option value="3-5">3-5 años</option>
                      <option value="5+">Más de 5 años</option>
                    </select>
                    <select
                      name="availability"
                      value={formData.availability}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                      style={{ '--tw-ring-color': '#00964B' } as any}
                    >
                      <option value="">Disponibilidad</option>
                      <option value="part-time">Medio tiempo</option>
                      <option value="full-time">Tiempo completo</option>
                      <option value="weekends">Solo fines de semana</option>
                      <option value="flexible">Horario flexible</option>
                    </select>
                  </div>

                  <textarea
                    name="message"
                    placeholder="Cuéntanos por qué quieres trabajar con nosotros..."
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent transition-all duration-300"
                    style={{ '--tw-ring-color': '#00964B' } as any}
                  ></textarea>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg"
                    style={{ backgroundColor: '#00964B' }}
                  >
                    Enviar Solicitud
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-20 text-white" style={{ backgroundColor: '#1F5198' }}>
          <div className="max-w-4xl mx-auto text-center px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl lg:text-5xl font-black">
                Buscamos personas con ganas de trabajar 
                <br />
                en gastronomía y crecer
              </h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                ¿Estás listo para crecer profesionalmente junto a Caribbean Franchise?
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="/contactos"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-yellow-400 text-black text-lg font-bold rounded-xl hover:bg-yellow-300 transition-all duration-300 shadow-2xl"
                >
                  Solicita Ahora Tu Plaza
                </motion.a>
                <motion.a
                  href={`tel:787-282-0101`}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white text-lg font-bold rounded-xl hover:bg-white transition-all duration-300"
                  style={{ borderColor: 'white' }}
                  onMouseEnter={(e) => e.currentTarget.style.color = '#1F5198'}
                  onMouseLeave={(e) => e.currentTarget.style.color = 'white'}
                >
                  <div className="text-center">
                    📞 787-282-0101
                    <br />
                    <span className="text-sm font-normal">Ext.219 Recursos Humanos</span>
                  </div>
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer 
        companyName={businessProfile.company.name}
        addresses={businessProfile.company.headquarters.addresses}
        social={businessProfile.social}
      />
    </>
  )
} 