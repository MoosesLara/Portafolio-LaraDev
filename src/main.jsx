import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'animate.css'
import './index.css'
import App from './App.jsx'
import { LanguageProvider } from './context/LanguageContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </StrictMode>,
)
