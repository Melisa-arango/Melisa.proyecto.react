import React, { useState, useEffect } from 'react'

const LIKES_KEY = 'medlife_blog_likes'

export default function MainArticle() {
  const [isLiked, setIsLiked] = useState(false)

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(LIKES_KEY)) || []
      setIsLiked(stored.includes('lepra'))
    } catch {
      setIsLiked(false)
    }
  }, [])

  const handleLikeToggle = () => {
    try {
      let likes = JSON.parse(localStorage.getItem(LIKES_KEY)) || []
      let updated
      if (isLiked) {
        updated = likes.filter((id) => id !== 'lepra')
        setIsLiked(false)
      } else {
        updated = [...likes, 'lepra']
        setIsLiked(true)
      }
      localStorage.setItem(LIKES_KEY, JSON.stringify(updated))
    } catch (e) {
      setIsLiked(!isLiked)
    }
  }

  return (
    <article className="post-body" id="post-lepra">
      <div className="post-head">
        <div className="post-image">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" aria-label="Ilustración médica">
            <rect width="200" height="200" rx="16" fill="#EAF6FA" />
            <path
              d="M100 155 C65 130, 45 105, 55 78 C63 55, 90 58, 100 78 C110 58, 137 55, 145 78 C155 105, 135 130, 100 155 Z"
              fill="none"
              stroke="#1C86C4"
              strokeWidth="6"
              strokeLinejoin="round"
            />
            <path
              d="M70 100 C66 92, 74 84, 82 88 C86 90, 86 96, 82 100 L74 108"
              fill="none"
              stroke="#4FB8D6"
              strokeWidth="4.5"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="post-intro">
          <h1>¿Qué es la lepra?</h1>
          <p>
            La lepra, también llamada enfermedad de Hansen, es una enfermedad infecciosa crónica causada por una bacteria
            llamada Mycobacterium leprae. Esta bacteria afecta principalmente la piel, los nervios periféricos, los ojos y
            algunas partes de las vías respiratorias.
          </p>
        </div>
      </div>

      <p>
        La lepra se transmite de una persona a otra principalmente a través de gotas que salen por la nariz o la boca cuando
        una persona enferma y no tratada tose o estornuda. Sin embargo, no es una enfermedad muy contagiosa, y normalmente
        se necesita contacto cercano y prolongado con una persona infectada para que ocurra el contagio.
      </p>

      <p>
        Uno de los síntomas más comunes de la lepra es la aparición de manchas claras o rojizas en la piel que pueden
        perder sensibilidad. También pueden aparecer entumecimiento en manos y pies, debilidad muscular, lesiones en la piel
        y daño en los nervios. Si la enfermedad no se trata a tiempo, puede causar daños permanentes en los nervios,
        deformaciones en manos o pies y problemas en los ojos.
      </p>

      <p>
        La lepra tiene cura. Actualmente se trata con una combinación de antibióticos especiales durante varios meses,
        tratamiento conocido como terapia multidrogas, recomendado por la Organización Mundial de la Salud. Con el
        tratamiento adecuado, la persona deja de contagiar rápidamente y puede recuperarse.
      </p>

      <div className="post-actions">
        <button
          className={`like-btn ${isLiked ? 'liked' : ''}`}
          type="button"
          data-post="lepra"
          onClick={handleLikeToggle}
          aria-label={isLiked ? 'Quitar Me gusta' : 'Dar Me gusta'}
        >
          <svg viewBox="0 0 24 24" className="like-icon" aria-hidden="true">
            <path
              d="M12 20 C5 15, 3 10, 7 6.5 C9.5 4.3, 12 5.5, 12 8 C12 5.5, 14.5 4.3, 17 6.5 C21 10, 19 15, 12 20 Z"
              fill={isLiked ? 'currentColor' : 'none'}
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
          <span className="like-count">{isLiked ? '1' : '0'}</span>
        </button>
      </div>
    </article>
  )
}
