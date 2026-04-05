import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white px-8 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Logo */}
        <h2 className="text-2xl font-bold">
          MyApp
        </h2>

        {/* Nav Links */}
        <div className="flex gap-8 text-lg">
          <Link to='/' className="hover:text-slate-300 cursor-pointer">Home</Link>
          <Link to='/about' className="hover:text-slate-300 cursor-pointer">About</Link>
          <Link to='/courses' className="hover:text-slate-300 cursor-pointer">Courses</Link>
          <Link to='/product' className="hover:text-slate-300 cursor-pointer">Product</Link>

        </div>

        {/* Action Button */}
        <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-md font-medium">
          Login
        </button>

      </div>
    </nav>
  )
}

export default Navbar
