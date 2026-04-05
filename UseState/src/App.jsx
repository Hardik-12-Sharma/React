// import React, { useState } from 'react'

// const App = () => {

//   const [num, setnum] = useState(0)
//   const [username, setUsername] = useState('Naruto')
//   const [users, setUsers] = useState([10,20,30])

//   const change = ()=>{
//     setnum(num+1)
//     setUsername('Sasuke')
//     setUsers([100,200,300])
//   }

//   return (
//     <div>
//       <h1>Value of a is {num} and username is {username} and the array is {users}</h1>
//       <button onClick={change}>Click</button>
//     </div>
//   )
// }

// export default App




import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const increase = ()=>{
    setNum(num+1)
  }
  const decrease = ()=>{
    setNum(num-1)
  }

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App
