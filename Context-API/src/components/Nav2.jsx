import React, { useContext } from 'react'
import { ThemeDataContext } from '../context-api/ThemeContext'

const Nav2 = () => {

    const [theme,setTheme] = useContext(ThemeDataContext)
    console.log(theme);
    
  return (
    <div>
      <h2>{theme}</h2>
    </div>
  )
}

export default Nav2
