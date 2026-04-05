import React, { createContext, useState } from 'react'


export const ThemeDataContext = createContext()

const ThemeContext = (props) => {

    const [theme, setTheme] = useState('light')

  return (
    <div>
      <ThemeDataContext.Provider value={[theme,setTheme]}>
        <h1>{props.children}</h1>
      </ThemeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
