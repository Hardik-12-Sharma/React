import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'


const App = () => {
  const [userData, setUserData] = useState([])

  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=20`)
    setUserData(response.data)
  }

  useEffect(() => {
    getData()
  }, [index])

 


  let printUserData = <h3 className='text-gray-300 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-2xl font-extrabold'>Loading.....</h3>
  if (userData.length > 0) {
    printUserData = userData.map((e, i) => {
      return <div key={i}>
        <Card e={e} />
      </div>
    })
  }

  return (
    <div className='bg-black overflow-auto h-screen text-white'>
      
      <div className='flex flex-wrap gap-5 p-5'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-5'>
        <button className='bg-blue-400 text-sm text-black rounded-4xl px-4 py-2 font-extrabold cursor-pointer active:scale-95' onClick={()=>{
          if(index>1) setIndex(index-1)
        }}>Prev</button>
        <h4>Page {index}</h4>
        <button className='bg-blue-400 text-sm text-black rounded-4xl px-4 py-2 font-extrabold cursor-pointer active:scale-95' onClick={()=>{
          setIndex(index+1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App
