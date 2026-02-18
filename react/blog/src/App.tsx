import { RouterProvider } from 'react-router-dom'
import { router } from './pages/routes'
import GlobalStyles from './styles/global'
import { ThemeProviderComponent } from './contexts/ThemeProviderComponent'

export function App() {
  return (
    <ThemeProviderComponent>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProviderComponent>
  )
}

export default App
