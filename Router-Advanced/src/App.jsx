import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { Route, Routes } from 'react-router-dom'

import NotFound from './Pages/NotFound'
import Home from './Pages/Home'
import About from './Pages/About'
import Product from './Pages/Product'
import Men from './Pages/Men'
import Women from './Pages/Women'
import Courses from './Pages/Courses'
import CourseDetail from './Pages/CourseDetail'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/courses/:id' element={<CourseDetail/>} />

        <Route path='/product' element={<Product />}>
          <Route path='men' element={<Men />} />
          <Route path='women' element={<Women />} />
        </Route>


        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
