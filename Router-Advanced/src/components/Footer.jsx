import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-6 mt-10 absolute bottom-0 w-full">
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-between">
        
        {/* Left */}
        <p className="text-sm">
          © {new Date().getFullYear()} MyApp. All rights reserved.
        </p>

        {/* Right */}
        <ul className="flex gap-6 text-sm">
          <li className="hover:text-white cursor-pointer">Privacy</li>
          <li className="hover:text-white cursor-pointer">Terms</li>
          <li className="hover:text-white cursor-pointer">Support</li>
        </ul>

      </div>
    </footer>
  )
}

export default Footer
