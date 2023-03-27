import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'

import { AuthProvider } from './hooks/auth'

import { Routes } from './routes'

import GlobalStyle from './styles/global'
import { ThemeProvider } from 'styled-components'
import { darkTheme, lightTheme } from './styles/theme'

import { ThemeContext } from './hooks/theme'

function App () {
  const [theme, setTheme] = useState(darkTheme)

  function toggleSwitch () {
    const actualTheme = theme === darkTheme ? lightTheme : darkTheme
    setTheme(actualTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleSwitch }}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App styles={{
      '@media (max-width: 480px)': {
        backgroundColor: 'red'
      }
    }}/>
  </React.StrictMode>
)
