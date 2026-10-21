import React from 'react'

export default function HeroSection({ onNavigate }) {
  return (
    <section className="hero">
      <div className="hero-media">
        <img
          src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?auto=format&fit=crop&w=1600&q=80"
          alt="Medlife Healthcare"
          loading="lazy"
        />
      </div>

      <div className="hero-content">
        <div className="hero-badge">
          <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path
              d="M20 4 C11.16 4, 4 11.16, 4 20 C4 28.84, 11.16 36, 20 36 C28.84 36, 36 28.84, 36 20 C36 11.16, 28.84 4, 20 4 Z"
              stroke="#ffffff"
              strokeWidth="2.5"
            />
            <path
              d="M20 12 V28 M12 20 H28"
              stroke="#ffffff"
              strokeWidth="3.5"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <h1>MEDLIFE VIRTUAL HEALTHCARE</h1>
        <p className="hero-subtitle">
          Atención médica integral, telemedicina especializada y farmacia digital conectada con tu bienestar.
        </p>

        <div className="hero-actions">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => onNavigate && onNavigate('cardiologia')}
          >
            CONSULTAR ESPECIALIDADES
          </button>
          <button
            type="button"
            className="btn btn-outline"
            onClick={() => onNavigate && onNavigate('blog')}
          >
            LEER NUESTRO BLOG
          </button>
        </div>
      </div>
    </section>
  )
}
