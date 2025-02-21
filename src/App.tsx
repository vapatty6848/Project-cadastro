import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from './components/themes/theme-provider'
import { router } from './router'


export default function App() {


  return (
    <>
      <HelmetProvider>
        <ThemeProvider storageKey="cadastro-theme" defaultTheme="dark">
          <Helmet titleTemplate="%s | Banda" />
          <Toaster richColors />
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>

    </>
  )
}
