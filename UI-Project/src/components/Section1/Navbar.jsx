import React from 'react'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between py-8 px-18'>
            <h4 className='bg-black text-white uppercase px-6 py-3 rounded-full'>Target Audience</h4>
            <button class="px-6 py-3 bg-gray-200 font-semibold rounded-lg 
               hover:bg-gray-300 active:scale-95 transition duration-200 tracking-widest text-sm">
                Digital Banking Platform
            </button>
        </div>
    )
}

export default Navbar
