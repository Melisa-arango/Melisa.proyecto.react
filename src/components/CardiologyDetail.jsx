import React, { useState } from 'react'

export default function CardiologyDetail({ onBack }) {
  const [showModal, setShowModal] = useState(false)
  const [consultaData, setConsultaData] = useState({ nombre: '', email: '', motivo: '' })
  const [consultaEnviada, setConsultaEnviada] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setConsultaEnviada(true)
    setTimeout(() => {
      setShowModal(false)
      setConsultaEnviada(false)
      setConsultaData({ nombre: '', email: '', motivo: '' })
    }, 2000)
  }

  return (
    <main>
      <section className="detail-view">
        <button className="btn-back" type="button" onClick={onBack}>
          <i className="fa-solid fa-arrow-left" aria-hidden="true"></i> Volver a Especialidades
        </button>

        <h2 className="detail-title">CARDIOLOGIA</h2>

        <div className="detail-banner">
          <img
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=80"
            alt="Especialidad de Cardiología en Medlife"
            loading="lazy"
          />
        </div>

        <div className="detail-info-card">
          <p>
            Se especializa en la prevención, diagnóstico y tratamiento de enfermedades del corazón y del sistema
            cardiovascular. Ofrece evaluación médica, control de factores de riesgo y seguimiento para mantener una buena
            salud cardíaca y prevenir complicaciones.
          </p>
          <p>
            Está indicada para hipertensión, arritmias, colesterol elevado, antecedentes familiares de enfermedad
            cardíaca y control post-evento cardiovascular, siempre con acompañamiento profesional en cada etapa del proceso.
          </p>
        </div>

        <div className="beneficios-box">
          <div className="beneficios-title">Beneficios del tratamiento</div>
          <div className="beneficios-grid">
            <div className="beneficio-item">
              <div className="beneficio-icon">
                <i className="fa-solid fa-heart-pulse"></i>
              </div>
              <div className="beneficio-text">
                <h4>Evaluación cardiovascular</h4>
                <p>Diagnóstico completo del funcionamiento de tu corazón.</p>
              </div>
            </div>

            <div className="beneficio-item">
              <div className="beneficio-icon">
                <i className="fa-solid fa-gauge-high"></i>
              </div>
              <div className="beneficio-text">
                <h4>Control de factores de riesgo</h4>
                <p>Manejo de presión arterial, colesterol y otros indicadores clave.</p>
              </div>
            </div>

            <div className="beneficio-item">
              <div className="beneficio-icon">
                <i className="fa-solid fa-shield-heart"></i>
              </div>
              <div className="beneficio-text">
                <h4>Prevención de complicaciones</h4>
                <p>Estrategias para reducir el riesgo de eventos cardíacos.</p>
              </div>
            </div>

            <div className="beneficio-item">
              <div className="beneficio-icon">
                <i className="fa-solid fa-calendar-check"></i>
              </div>
              <div className="beneficio-text">
                <h4>Seguimiento continuo</h4>
                <p>Control periódico de la evolución y ajuste del tratamiento.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="btn-container">
          <button
            className="btn-consulta"
            type="button"
            onClick={() => setShowModal(true)}
          >
            Realiza tu consulta
          </button>
        </div>
      </section>

      {/* Modal de Agendamiento de Consulta */}
      {showModal && (
        <div className="modal-overlay active" onClick={() => setShowModal(false)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()}>
            <h2>Agendar Consulta en Cardiología</h2>
            {consultaEnviada ? (
              <div style={{ textAlign: 'center', padding: '20px 0', color: '#16a34a', fontWeight: 'bold' }}>
                ✓ ¡Consulta solicitada con éxito! Te contactaremos a la brevedad.
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>
                    Nombre Completo:
                  </label>
                  <input
                    type="text"
                    required
                    value={consultaData.nombre}
                    onChange={(e) => setConsultaData({ ...consultaData, nombre: e.target.value })}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>
                    Correo Electrónico:
                  </label>
                  <input
                    type="email"
                    required
                    value={consultaData.email}
                    onChange={(e) => setConsultaData({ ...consultaData, email: e.target.value })}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                  />
                </div>
                <div>
                  <label style={{ display: 'block', fontSize: '13px', fontWeight: 'bold', marginBottom: '4px' }}>
                    Motivo o síntomas principales:
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={consultaData.motivo}
                    onChange={(e) => setConsultaData({ ...consultaData, motivo: e.target.value })}
                    style={{ width: '100%', padding: '10px', borderRadius: '8px', border: '1px solid #ccc' }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                  <button type="submit" className="comprar-btn" style={{ flex: 1, padding: '12px' }}>
                    Enviar Solicitud
                  </button>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    style={{
                      flex: 1,
                      padding: '12px',
                      background: '#eee',
                      border: 'none',
                      borderRadius: '50px',
                      cursor: 'pointer',
                      fontWeight: 'bold'
                    }}
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </main>
  )
}
