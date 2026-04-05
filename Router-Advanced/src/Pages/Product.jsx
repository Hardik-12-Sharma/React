import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex justify-center gap-5 py-3.5'>
        <Link className='text-xl font-extrabold' to='men'>Men</Link>
        <Link className='text-xl font-extrabold' to='women'>Women</Link>
      </div>
      <h1>Product Page</h1>

      <Outlet />

    </div>
  )
}

export default Product
