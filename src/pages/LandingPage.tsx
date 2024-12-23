import { Link } from 'react-router'
import { useInactivityRedirect } from '../hooks/useInactivityRedirect.ts'
import { useState } from 'react'

const LandingPage = () => {

  const inactivityLimit = 5000
  const [remainingTime, setRemainingTime] = useState(inactivityLimit)

  useInactivityRedirect('/shopping', remainingTime, setRemainingTime)

  const progress = ((inactivityLimit - remainingTime) / inactivityLimit) * 100

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* Inactivity Window */}
      {
        progress > 0 &&
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold text-gray-800">Inactivity Warning</h1>
            <p className="mt-2 text-gray-600">
              You will be redirected due to inactivity in{' '}
              <span className="font-semibold text-green-600">
            {Math.ceil(remainingTime / 1000)}
          </span>{' '}
              seconds.
            </p>
            <div className="relative w-full h-4 mt-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-green-600 transition-all"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <p className="mt-2 text-sm text-gray-500">
              Interact with the page to cancel the redirection.
            </p>
            <button
              className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
              onClick={() => setRemainingTime(inactivityLimit)}>
              Cancel
            </button>
          </div>
        </div>
      }

      {/* Header Section */}
      <header className="bg-white shadow-md">
        <div className="container mx-auto flex justify-between items-center py-4 px-6">
          <h1 className="text-2xl font-bold text-orange-600">Relatos de Papel</h1>
          <nav className="space-x-6">
            <a href="#" className="text-gray-700 hover:text-orange-600">Home</a>
            <a href="#categories" className="text-gray-700 hover:text-orange-600">Categories</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600">About</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600">Contact</a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Next Great Read</h2>
          <p className="text-lg md:text-xl mb-6">Browse thousands of books from a variety of genres and authors.</p>
          <Link className="bg-white text-orange-600 px-6 py-3 rounded-full font-bold hover:bg-gray-200" to="shopping">
            Shop Now
          </Link>
        </div>
      </section>

      <section id="categories" className="py-16 bg-gradient-to-b from-orange-100 to-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-8">Browse by Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-32 bg-orange-500 flex items-center justify-center">
                <h4 className="text-xl font-semibold text-white">Fiction</h4>
              </div>
              <div className="p-6">
                <p className="text-gray-600">Explore novels, short stories, and creative tales.</p>
              </div>
            </div>
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-32 bg-orange-500 flex items-center justify-center">
                <h4 className="text-xl font-semibold text-white">Non-Fiction</h4>
              </div>
              <div className="p-6">
                <p className="text-gray-600">Discover books that inform and educate.</p>
              </div>
            </div>
            <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
              <div className="h-32 bg-orange-500 flex items-center justify-center">
                <h4 className="text-xl font-semibold text-white">Science Fiction</h4>
              </div>
              <div className="p-6">
                <p className="text-gray-600">Dive into futuristic and imaginative worlds.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">Stay Updated</h3>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Subscribe to our newsletter and never miss out on the latest book releases, deals, and updates.
          </p>
          <form className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <input
              type="email"
              className="w-full md:w-auto px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your email"
            />
            <button
              type="submit"
              className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700">
              Subscribe
            </button>
          </form>
        </div>
      </section>

      <section id="about" className="bg-gray-200 py-16">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-800 mb-6">About Us</h3>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We are passionate about connecting readers with the books they love. Our online store offers a wide
            selection of titles and a seamless shopping experience.
          </p>
        </div>
      </section>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; 2024 Relatos de Papel. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default LandingPage
