import React, { useState } from 'react'
import { useEffect } from 'react'

const App = () => {

  const [a, setA] = useState(0)
  const [b, setB] = useState(0)

  useEffect(()=>{
    console.log('A is changing.....');
  },[a])
  useEffect(()=>{
    console.log('B is changing.....');
  },[b])

  // const [num, setNum] = useState(0)
  // const [num2, setNum2] = useState(0)
  // useEffect(()=>{
  //   console.log('useEffect is running');
  // },[num])

  return (


    <div>
      <h1>value of a is : {a}</h1>
      <h1>value of b is : {b}</h1>
      <button onClick={()=> setA(a+1)}>Change A</button>
      <button onClick={()=> setB(b+1)}>Change B</button>
    </div>


    // <div>
    //   <h1>value of num is : {num}</h1>
    //   <h1>value of num2 is : {num2}</h1>
    //   <button onMouseEnter={()=>{
    //     setNum(num+1)
    //   }}
    //   onMouseLeave={()=> setNum2(num2+10)}>Click</button>
    // </div>
  )
}

export default App
