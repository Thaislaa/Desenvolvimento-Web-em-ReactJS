import { createBrowserRouter } from 'react-router-dom'
import { Home } from '../home'
import { PostDetails } from '../PostDetails'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/post/:id',
    element: <PostDetails />,
  },
])
