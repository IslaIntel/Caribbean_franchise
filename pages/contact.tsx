import Head from 'next/head'
import Link from 'next/link'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact - Caribbean Franchise, Inc.</title>
        <meta name="description" content="Get in touch with Caribbean Franchise, Inc. for partnership opportunities and inquiries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <header className="bg-white shadow-lg">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-caribbean-800">
                Caribbean Franchise, Inc.
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link href="/" className="text-gray-700 hover:text-caribbean-600 px-3 py-2 rounded-md text-sm font-medium">
                  Home
                </Link>
                <Link href="/brands" className="text-gray-700 hover:text-caribbean-600 px-3 py-2 rounded-md text-sm font-medium">
                  Our Brands
                </Link>
                <Link href="/services" className="text-gray-700 hover:text-caribbean-600 px-3 py-2 rounded-md text-sm font-medium">
                  Services
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-caribbean-600 px-3 py-2 rounded-md text-sm font-medium">
                  About Us
                </Link>
                <Link href="/careers" className="text-gray-700 hover:text-caribbean-600 px-3 py-2 rounded-md text-sm font-medium">
                  Careers
                </Link>
                <Link href="/contact" className="text-caribbean-800 hover:text-caribbean-600 px-3 py-2 rounded-md text-sm font-medium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600 mb-8">Coming Soon</p>
          <Link href="/" className="bg-caribbean-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-caribbean-600 transition">
            Back to Home
          </Link>
        </div>
      </main>
    </>
  )
} 