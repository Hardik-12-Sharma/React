import React from 'react'

const RightCardContent = (props) => {
  return (
    <div className='absolute top-0 left-0 h-full w-full  p-8 flex flex-col justify-between'>
                <h2 className='bg-white text-2xl rounded-full h-10 w-10 flex justify-center items-center font-semibold '>{props.id+1}</h2>
                <div className='space-y-5'>
                    <p className='text-xl leading-relaxed text-white mb-14 '>
                        {props.intro}
                    </p>
                    <div className="flex items-center justify-between">
                        <button style={{backgroundColor:props.colors}} className="rounded-full  px-5 py-2 text-sm font-semibold text-white shadow hover:bg-amber-50 transition">
                            {props.tag}
                        </button>

                        <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white transition hover:scale-110">
                            <i className="ri-arrow-right-line text-lg"></i>
                        </button>
                    </div>
                </div>
            </div>
  )
}

export default RightCardContent
