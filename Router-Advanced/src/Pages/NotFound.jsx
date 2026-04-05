import React from 'react'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 text-slate-900">
      
      <h1 className="text-6xl font-extrabold mb-4">
        404
      </h1>

      <h2 className="text-2xl font-semibold mb-2">
        Page Not Found
      </h2>

      <p className="text-slate-600 mb-6">
        Sorry, the page you’re looking for doesn’t exist.
      </p>

      <a
        href="/"
        className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition"
      >
        Go Back Home
      </a>

    </div>
  )
}

export default NotFound
