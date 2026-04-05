import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.e.url} target='_blank'>
          <div className='h-40 w-40  rounded-2xl overflow-hidden flex justify-center items-center'>
            <img className='h-full object-cover w-full' src={props.e.download_url} alt="" />
          </div>
          <h2 className='font-extrabold tracking-normal text-lg' >{props.e.author}</h2>
        </a>
    </div>
  )
}

export default Card
