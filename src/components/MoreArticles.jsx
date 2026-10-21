import React, { useState, useEffect } from 'react'

const LIKES_KEY = 'medlife_blog_likes'

const ARTICLES_DATA = [
  {
    id: 'post-asperger',
    title: 'Día internacional del síndrome de Asperger',
    excerpt:
      'El síndrome de Asperger es una condición del espectro autista que afecta la forma en que una persona se comunica y se relaciona con los demás, sin afectar su desarrollo cognitivo general.',
    paragraphs: [
      'El síndrome de Asperger es una condición del neurodesarrollo dentro del espectro autista. Las personas con esta condición suelen tener un desarrollo cognitivo y del lenguaje típico, pero pueden presentar dificultades para interpretar señales sociales, mantener contacto visual o entender el lenguaje no verbal.',
      'Entre las características más comunes se encuentran los intereses intensos y específicos en determinados temas, la preferencia por rutinas estructuradas y una alta sensibilidad a estímulos como sonidos, luces o texturas.',
      'No existe una cura porque no se trata de una enfermedad, sino de una forma distinta de percibir el mundo. El acompañamiento profesional, la terapia ocupacional y el apoyo familiar ayudan a que la persona desarrolle sus habilidades sociales y de comunicación.'
    ],
    svg: (
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="140" height="140" rx="14" fill="#EAF6FA" />
        <path
          d="M55 45 H85 V55 C85 61 90 61 90 55 V45 H100 V75 C94 75 94 83 100 83 V105 H70 C70 99 62 99 62 105 H40 V83 C46 83 46 75 40 75 V45 H55 Z"
          fill="none"
          stroke="#1C86C4"
          strokeWidth="4.5"
          strokeLinejoin="round"
          strokeLinecap="round"
        />
      </svg>
    )
  },
  {
    id: 'post-glaucoma',
    title: 'Día mundial del glaucoma',
    excerpt:
      'El glaucoma es una enfermedad ocular que daña el nervio óptico de forma progresiva y silenciosa, siendo una de las principales causas de ceguera irreversible en el mundo.',
    paragraphs: [
      'El glaucoma es un grupo de enfermedades oculares que dañan el nervio óptico, generalmente asociado a un aumento en la presión intraocular. Su avance suele ser lento y, en las primeras etapas, no presenta síntomas evidentes.',
      'Por esta razón se le conoce como "el ladrón silencioso de la visión": muchas personas pierden visión periférica de forma gradual sin notarlo, hasta que el daño ya es considerable.',
      'El diagnóstico temprano mediante exámenes oftalmológicos regulares es la mejor forma de prevenir su avance. Aunque el daño ya causado no se puede revertir, existen tratamientos con gotas, láser o cirugía que ayudan a controlar la presión ocular y frenar la progresión de la enfermedad.'
    ],
    svg: (
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="140" height="140" rx="14" fill="#EAF6FA" />
        <path
          d="M25 70 C40 45 100 45 115 70 C100 95 40 95 25 70 Z"
          fill="none"
          stroke="#1C86C4"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <circle cx="70" cy="70" r="14" fill="none" stroke="#4FB8D6" strokeWidth="5" />
        <circle cx="70" cy="70" r="5" fill="#4FB8D6" />
      </svg>
    )
  },
  {
    id: 'post-vacunacion',
    title: 'La importancia de la vacunación',
    excerpt:
      'Las vacunas son una de las herramientas más efectivas de la medicina moderna para prevenir enfermedades infecciosas graves, tanto a nivel individual como en toda la comunidad.',
    paragraphs: [
      'Las vacunas funcionan preparando al sistema inmunológico para reconocer y combatir un virus o bacteria específico, sin necesidad de pasar por la enfermedad real. Esto reduce significativamente el riesgo de desarrollar complicaciones graves.',
      'Además de proteger a quien se vacuna, la vacunación contribuye a la llamada inmunidad de rebaño, que ayuda a proteger a personas que no pueden recibir ciertas vacunas por condiciones médicas particulares.',
      'Mantener al día el esquema de vacunación, tanto en la infancia como en la adultez, es una de las medidas más simples y efectivas para prevenir enfermedades como el sarampión, la influenza, el tétanos o la hepatitis.'
    ],
    svg: (
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="140" height="140" rx="14" fill="#EAF6FA" />
        <path
          d="M70 30 L100 42 V70 C100 92 87 106 70 112 C53 106 40 92 40 70 V42 Z"
          fill="none"
          stroke="#1C86C4"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path d="M70 55 V85 M55 70 H85" stroke="#4FB8D6" strokeWidth="6" strokeLinecap="round" />
      </svg>
    )
  },
  {
    id: 'post-corazon',
    title: 'Hábitos para un corazón saludable',
    excerpt:
      'Cuidar la salud cardiovascular no depende de un solo hábito, sino de pequeñas decisiones diarias relacionadas con la alimentación, la actividad física y el descanso.',
    paragraphs: [
      'El corazón es uno de los órganos que más se beneficia de hábitos de vida saludables. Una alimentación balanceada, con bajo consumo de grasas saturadas y sal, ayuda a mantener la presión arterial y el colesterol en niveles adecuados.',
      'La actividad física regular, incluso caminar 30 minutos al día, fortalece el músculo cardíaco y mejora la circulación. Evitar el sedentarismo prolongado es igual de importante que hacer ejercicio de forma puntual.',
      'El descanso adecuado y el manejo del estrés también influyen directamente en la salud cardiovascular. Dormir mal o vivir bajo estrés constante puede elevar la presión arterial y aumentar el riesgo de enfermedades del corazón.'
    ],
    svg: (
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="140" height="140" rx="14" fill="#EAF6FA" />
        <path
          d="M70 100 C40 78 25 60 35 42 C42 30 60 32 70 46 C80 32 98 30 105 42 C115 60 100 78 70 100 Z"
          fill="none"
          stroke="#1C86C4"
          strokeWidth="5"
          strokeLinejoin="round"
        />
        <path
          d="M40 68 H55 L62 55 L72 80 L80 62 L86 68 H100"
          fill="none"
          stroke="#4FB8D6"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    )
  },
  {
    id: 'post-hipertension',
    title: '¿Qué es la hipertensión arterial?',
    excerpt:
      'La hipertensión arterial es una condición crónica en la que la presión de la sangre contra las paredes de las arterias se mantiene elevada de forma sostenida.',
    paragraphs: [
      'La hipertensión arterial ocurre cuando la fuerza con la que la sangre presiona las paredes de las arterias es constantemente más alta de lo normal. Con el tiempo, esta presión adicional puede dañar los vasos sanguíneos y órganos como el corazón, los riñones y el cerebro.',
      'En la mayoría de los casos no presenta síntomas claros, por lo que se le conoce como una enfermedad silenciosa. Solo puede detectarse a través de la medición regular de la presión arterial.',
      'El control de la hipertensión generalmente combina cambios en el estilo de vida, como reducir el consumo de sal y mantener un peso saludable, junto con tratamiento médico cuando es necesario. El seguimiento con un profesional de la salud es clave para evitar complicaciones.'
    ],
    svg: (
      <svg viewBox="0 0 140 140" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="140" height="140" rx="14" fill="#EAF6FA" />
        <circle cx="70" cy="75" r="35" fill="none" stroke="#1C86C4" strokeWidth="5" />
        <line x1="70" y1="75" x2="90" y2="55" stroke="#4FB8D6" strokeWidth="5" strokeLinecap="round" />
        <circle cx="70" cy="75" r="4" fill="#1C86C4" />
        <path d="M55 35 V25 M85 35 V25" stroke="#1C86C4" strokeWidth="5" strokeLinecap="round" />
      </svg>
    )
  }
]

export default function MoreArticles() {
  const [expandedArticles, setExpandedArticles] = useState({})
  const [likes, setLikes] = useState([])

  useEffect(() => {
    try {
      const storedLikes = JSON.parse(localStorage.getItem(LIKES_KEY)) || []
      setLikes(storedLikes)
    } catch {
      setLikes([])
    }
  }, [])

  const toggleExpand = (id) => {
    setExpandedArticles((prev) => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const toggleLike = (key) => {
    try {
      const stored = JSON.parse(localStorage.getItem(LIKES_KEY)) || []
      let updated
      if (stored.includes(key)) {
        updated = stored.filter((item) => item !== key)
      } else {
        updated = [...stored, key]
      }
      localStorage.setItem(LIKES_KEY, JSON.stringify(updated))
      setLikes(updated)
    } catch {
      setLikes((prev) =>
        prev.includes(key) ? prev.filter((i) => i !== key) : [...prev, key]
      )
    }
  }

  return (
    <div className="content-panel more-articles-panel">
      <h2 className="more-title">Más artículos sobre salud</h2>

      <div className="more-articles-grid">
        {ARTICLES_DATA.map((article) => {
          const shortKey = article.id.replace('post-', '')
          const isLiked = likes.includes(shortKey)
          const isExpanded = !!expandedArticles[article.id]

          return (
            <article className="mini-post" id={article.id} key={article.id}>
              <div className="mini-head">
                <div className="mini-image">{article.svg}</div>
                <div className="mini-intro">
                  <h3>{article.title}</h3>
                  <p className="mini-excerpt">{article.excerpt}</p>
                </div>
              </div>

              <div className={`mini-full ${isExpanded ? '' : 'hidden'}`}>
                {article.paragraphs.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              <div className="mini-actions">
                <button
                  className="read-more-btn"
                  type="button"
                  onClick={() => toggleExpand(article.id)}
                >
                  {isExpanded ? 'Leer menos' : 'Leer más'}
                </button>
                <button
                  className={`like-btn ${isLiked ? 'liked' : ''}`}
                  type="button"
                  onClick={() => toggleLike(shortKey)}
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
        })}
      </div>
    </div>
  )
}
