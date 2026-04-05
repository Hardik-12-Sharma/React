import React from 'react'

const App = () => {

  // localStorage.clear()
  // localStorage.setItem('user','Naruto')
  // localStorage.setItem('age',19)
  // const age = localStorage.getItem('age')
  // const user = localStorage.getItem('user')
  // console.log(user,age)
  // localStorage.removeItem('age')

  // const user2 = {
  //   username: 'Naruto',
  //   age: 19,
  //   village: 'Konoha'
  // }

  // localStorage.setItem('users',JSON.stringify(user2))

  const user = localStorage.getItem('users')
  console.log(JSON.parse(user))


  return (
    <div>
      
    </div>
  )
}

export default App
