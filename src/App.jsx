import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToHash from './components/ScrollToHash'
import Home from './pages/Home'
import Certifications from './pages/Certifications'
import './App.css'

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <div className="hero-blob" aria-hidden="true" />
      <Header />
      <ScrollToHash />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<Certifications />} />
          {/* Mentorship en desarrollo en la rama develop; oculta en producción por ahora. */}
          <Route path="/mentorship" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  )
}
