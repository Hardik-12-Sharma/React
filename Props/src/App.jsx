import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      
      <Card user='Naruto' age={18} />
      <Card user='Sasuke' age={21} />
    </div>
  )
}

export default App
