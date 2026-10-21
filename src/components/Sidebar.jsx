import React from 'react'

export default function Sidebar({ onSelectCategory }) {
  const scrollToPost = (id) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <aside className="sidebar">
      <h3>Categorías</h3>
      <ul className="category-list">
        <li>
          <button type="button" onClick={() => onSelectCategory && onSelectCategory('Bienestar')}>
            Bienestar
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onSelectCategory && onSelectCategory('Corporativo')}>
            Corporativo
          </button>
        </li>
        <li>
          <button type="button" onClick={() => onSelectCategory && onSelectCategory('Salud')}>
            Salud
          </button>
        </li>
      </ul>

      <h3>Entradas recientes</h3>
      <ul className="recent-list">
        <li>
          <button type="button" onClick={() => scrollToPost('post-lepra')}>
            ¿Qué es la lepra?
          </button>
          <span className="recent-excerpt">
            Enfermedad infecciosa crónica que afecta la piel y los nervios periféricos.
          </span>
        </li>
        <li>
          <button type="button" onClick={() => scrollToPost('post-asperger')}>
            Día internacional del síndrome de Asperger
          </button>
          <span className="recent-excerpt">
            Una condición del espectro autista que afecta la comunicación social.
          </span>
        </li>
        <li>
          <button type="button" onClick={() => scrollToPost('post-glaucoma')}>
            Día mundial del glaucoma
          </button>
          <span className="recent-excerpt">
            Daño progresivo del nervio óptico y una de las principales causas de ceguera.
          </span>
        </li>
        <li>
          <button type="button" onClick={() => scrollToPost('post-vacunacion')}>
            La importancia de la vacunación
          </button>
          <span className="recent-excerpt">
            Una de las herramientas más efectivas para prevenir enfermedades graves.
          </span>
        </li>
        <li>
          <button type="button" onClick={() => scrollToPost('post-corazon')}>
            Hábitos para un corazón saludable
          </button>
          <span className="recent-excerpt">
            Pequeñas decisiones diarias que protegen tu salud cardiovascular.
          </span>
        </li>
        <li>
          <button type="button" onClick={() => scrollToPost('post-hipertension')}>
            ¿Qué es la hipertensión arterial?
          </button>
          <span className="recent-excerpt">
            Presión arterial elevada de forma sostenida, muchas veces sin síntomas.
          </span>
        </li>
      </ul>
    </aside>
  )
}
