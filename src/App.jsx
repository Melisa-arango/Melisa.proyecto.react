import React, { useState } from 'react'
import Header from './components/Header'
import GrayBar from './components/GrayBar'
import PostMeta from './components/PostMeta'
import MainArticle from './components/MainArticle'
import Sidebar from './components/Sidebar'
import MoreArticles from './components/MoreArticles'
import FloatingIA from './components/FloatingIA'
import CardiologyDetail from './components/CardiologyDetail'
import CartView from './components/CartView'
import HeroSection from './components/HeroSection'
import Footer from './components/Footer'
import './App.css'

export default function App() {
  const [currentView, setCurrentView] = useState('blog')

  const handleNavigate = (view) => {
    setCurrentView(view)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="app-container">
      {/* El header se muestra en todas las vistas excepto si el usuario prefiere la vista limpia de carrito/hero */}
      {currentView !== 'carrito' && (
        <Header activeView={currentView} onNavigate={handleNavigate} />
      )}

      {/* Renderizado condicional de vistas según la SPA */}
      {currentView === 'inicio' && (
        <main>
          <HeroSection onNavigate={handleNavigate} />
          <Footer />
        </main>
      )}

      {currentView === 'blog' && (
        <>
          <GrayBar />
          <main className="blog-section">
            <div className="content-panel">
              <PostMeta />
              <div className="blog-grid">
                <MainArticle />
                <Sidebar onSelectCategory={(cat) => console.log('Categoría seleccionada:', cat)} />
              </div>
            </div>

            <MoreArticles />
          </main>
          <FloatingIA />
          <Footer />
        </>
      )}

      {currentView === 'cardiologia' && (
        <>
          <GrayBar />
          <CardiologyDetail onBack={() => handleNavigate('blog')} />
          <FloatingIA />
          <Footer />
        </>
      )}

      {currentView === 'carrito' && (
        <>
          <CartView onBack={() => handleNavigate('blog')} />
          <FloatingIA />
          <Footer />
        </>
      )}
    </div>
  )
}
