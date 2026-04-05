import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(10)

  const btnClicked = ()=>{
    console.log(num);
    setNum(num+5)
    console.log(num);
  }

  return (
    <div>
      <h1>{num} </h1>
      <button onClick={btnClicked}>click</button>
    </div>
  )
}

export default App
