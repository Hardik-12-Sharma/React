import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {

  const users = [
    {
      img: 'https://imgs.search.brave.com/y7P6ujb9XBLkb0dQ4LQwIFPr6EFc3d-OgsjjkdthCuI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmx1/ZS1wbGFudHMtcy1h/bHBoYWJldC13NTVp/ZGgzb2JveXAycjNl/LmpwZw',
      intro: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, amet.',
      color: 'orange',
      tag: 'Satisfied'
    },
    {
      img: 'https://images.unsplash.com/photo-1763718170991-baa67106743b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      intro: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, amet.',
      color: 'royalblue',
      tag: 'Underserved'
    },
    {
      img: 'https://images.unsplash.com/photo-1765834082477-5f9c1466a7c4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D',
      intro: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, amet.',
      color: 'lightgreen',
      tag: 'Underbanked'
    },
    {
      img: 'https://imgs.search.brave.com/y7P6ujb9XBLkb0dQ4LQwIFPr6EFc3d-OgsjjkdthCuI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvYmx1/ZS1wbGFudHMtcy1h/bHBoYWJldC13NTVp/ZGgzb2JveXAycjNl/LmpwZw',
      intro: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa, amet.',
      color: 'brown',
      tag: 'Satisfied'
    }
  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
