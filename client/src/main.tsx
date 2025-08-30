import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from './components/theme-provider.tsx'

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="theme">
    <App />
</ThemeProvider>
  </BrowserRouter>,
)
