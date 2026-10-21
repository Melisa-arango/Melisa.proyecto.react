import React from 'react'

export default function Header({ activeView = 'blog', onNavigate }) {
  return (
    <header className="site-header">
      <div 
        className="logo" 
        onClick={() => onNavigate && onNavigate('blog')} 
        role="button" 
        tabIndex={0}
        onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onNavigate && onNavigate('blog')}
      >
        <img src="/logo.png" alt="Medlife" className="logo-icon" />
        <div className="logo-text">
          <span className="logo-title">MEDLIFE</span>
          <span className="logo-subtitle">VIRTUAL HEALTHCARE</span>
        </div>
      </div>
      <nav className="main-nav">
        <button 
          type="button" 
          className={activeView === 'inicio' ? 'active' : ''} 
          onClick={() => onNavigate && onNavigate('inicio')}
        >
          INICIO
        </button>
        <button 
          type="button" 
          onClick={() => onNavigate && onNavigate('inicio')}
        >
          NOSOTROS
        </button>
        <button 
          type="button" 
          className={activeView === 'cardiologia' ? 'active' : ''} 
          onClick={() => onNavigate && onNavigate('cardiologia')}
        >
          ESPECIALIDADES
        </button>
        <button 
          type="button" 
          onClick={() => onNavigate && onNavigate('cardiologia')}
        >
          SERVICIOS
        </button>
        <button 
          type="button" 
          className={activeView === 'blog' ? 'active' : ''} 
          onClick={() => onNavigate && onNavigate('blog')}
        >
          BLOG
        </button>
        <button 
          type="button" 
          className={activeView === 'carrito' ? 'active' : ''} 
          onClick={() => onNavigate && onNavigate('carrito')}
        >
          FARMACIA
        </button>
        <button 
          type="button" 
          onClick={() => onNavigate && onNavigate('carrito')}
        >
          PAGOS
        </button>
      </nav>
    </header>
  )
}
