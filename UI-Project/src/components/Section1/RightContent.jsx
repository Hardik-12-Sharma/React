import React from 'react'
import RightCard from './RightCard'

const RightContent = (props) => {
  return (
    <div id='right' className='h-full rounded-4xl overflow-x-auto flex flex-nowrap gap-10 justify-between p-6 w-2/3 '>
      {props.users.map((user, index) =>{
        return <RightCard img={user.img} intro={user.intro} colors={user.color} tag={user.tag} key={index} id={index}/>
      })}
    </div>
  )
}

export default RightContent
