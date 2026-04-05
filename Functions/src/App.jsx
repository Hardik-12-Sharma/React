import React from 'react'

const App = () => {
    const fnc = (elem)=>{
        console.log(elem.target.value);
    }
    
  return (
    <div>
       <h1>Hello, Naruto</h1>

       <button onClick={()=>{
        console.log('button is clicked');
       }}>change user</button>

       <input onChange={fnc} type="text" placeholder='Enter text' />
    </div>
  )
}

export default App
