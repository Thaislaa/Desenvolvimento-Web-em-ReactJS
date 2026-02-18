import { useState, type ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'
import { ThemeContext } from './ThemeContext'
import themes from '../themes'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProviderComponent({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  function toggleTheme() {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  )
}
