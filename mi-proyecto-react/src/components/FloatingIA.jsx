import React, { useState } from 'react'

export default function FloatingIA() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { from: 'bot', text: '¡Hola! Soy tu asistente virtual de MEDLIFE. ¿En qué podemos orientarte hoy?' }
  ])
  const [inputVal, setInputVal] = useState('')

  const handleSend = (e) => {
    e.preventDefault()
    if (!inputVal.trim()) return

    const userText = inputVal.trim()
    setMessages((prev) => [...prev, { from: 'user', text: userText }])
    setInputVal('')

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: 'bot',
          text: `Gracias por consultar sobre "${userText}". Un profesional de MEDLIFE está disponible para agendar tu consulta virtual o revisar tus síntomas.`
        }
      ])
    }, 600)
  }

  return (
    <>
      <button
        type="button"
        className="ia-float-btn"
        aria-label="Abrir asistente virtual de Inteligencia Artificial"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="48" fill="#ffffff" />
          <polygon
            points="42.0,25.0 49.1,47.9 72.0,55.0 49.1,62.1 42.0,85.0 34.9,62.1 12.0,55.0 34.9,47.9"
            fill="#2E9EF0"
          />
          <polygon
            points="74.0,15.0 76.5,23.5 85.0,26.0 76.5,28.5 74.0,37.0 71.5,28.5 63.0,26.0 71.5,23.5"
            fill="#2E9EF0"
          />
          <g fill="#2E9EF0">
            <rect x="70" y="70" width="18" height="6" rx="2" />
            <rect x="76" y="64" width="6" height="18" rx="2" />
          </g>
          <text
            x="42"
            y="60"
            textAnchor="middle"
            fontFamily="Montserrat, sans-serif"
            fontWeight="800"
            fontSize="20"
            fill="#ffffff"
          >
            IA
          </text>
        </svg>
      </button>

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            right: '24px',
            bottom: '100px',
            width: '320px',
            maxWidth: 'calc(100vw - 48px)',
            background: '#ffffff',
            borderRadius: '16px',
            boxShadow: '0 12px 36px rgba(0,0,0,0.22)',
            border: '2px solid #2E9EF0',
            zIndex: 1100,
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <div
            style={{
              background: 'linear-gradient(135deg, #1C86C4, #2E9EF0)',
              color: '#fff',
              padding: '14px 16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '18px' }}>✨</span>
              <strong>Asistente IA Medlife</strong>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                fontSize: '18px',
                cursor: 'pointer',
                lineHeight: 1
              }}
            >
              ✕
            </button>
          </div>

          <div
            style={{
              padding: '14px',
              height: '240px',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '10px',
              background: '#f8fafc',
              fontSize: '13px'
            }}
          >
            {messages.map((m, i) => (
              <div
                key={i}
                style={{
                  alignSelf: m.from === 'user' ? 'flex-end' : 'flex-start',
                  background: m.from === 'user' ? '#1C86C4' : '#ffffff',
                  color: m.from === 'user' ? '#ffffff' : '#333333',
                  padding: '8px 12px',
                  borderRadius: '12px',
                  maxWidth: '85%',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.08)'
                }}
              >
                {m.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={handleSend}
            style={{
              display: 'flex',
              padding: '10px',
              background: '#fff',
              borderTop: '1px solid #eef2f5'
            }}
          >
            <input
              type="text"
              placeholder="Escribe tu consulta médica..."
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              style={{
                flex: 1,
                border: '1px solid #d1d5db',
                borderRadius: '20px',
                padding: '8px 14px',
                fontSize: '12px',
                outline: 'none'
              }}
            />
            <button
              type="submit"
              style={{
                marginLeft: '8px',
                background: '#1C86C4',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              ➔
            </button>
          </form>
        </div>
      )}
    </>
  )
}
