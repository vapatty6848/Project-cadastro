import { createBrowserRouter } from 'react-router-dom'
import BandaCadastro from './pages/BandaCadastro'

export const router = createBrowserRouter([
  {
    path: '/',
    element: < BandaCadastro />,
  }
])
