import React, { useState, useEffect } from 'react'

const CART_KEY = 'medlife_cart'

const INITIAL_PRODUCTS = [
  {
    name: 'Acetaminofén 500mg',
    brand: 'Genfar',
    price: '$8.500',
    priceOld: '$10.000',
    qty: 2,
    badge: '-15%',
    promoText: '2x1 en segunda unidad',
    deliveryText: 'Envío Gratis',
    mlText: 'Caja x 20 tab',
    ratingText: '★★★★☆ (4.8)'
  },
  {
    name: 'Amoxicilina 500mg',
    brand: 'MK',
    price: '$18.900',
    priceOld: '$22.000',
    qty: 1,
    badge: 'Popular',
    promoText: 'Bajo prescripción',
    deliveryText: 'Llega hoy',
    mlText: 'Caja x 15 cáp',
    ratingText: '★★★★★ (5.0)'
  },
  {
    name: 'Ibuprofeno 400mg',
    brand: 'Lafrancol',
    price: '$12.000',
    priceOld: '',
    qty: 1,
    badge: '',
    promoText: '',
    deliveryText: 'Disponible',
    mlText: 'Caja x 10 tab',
    ratingText: '★★★★☆ (4.5)'
  },
  {
    name: 'Suero Oral Electrolitos',
    brand: 'Pedialyte',
    price: '$14.200',
    priceOld: '$16.500',
    qty: 3,
    badge: '-14%',
    promoText: 'Sabor Manzana 500ml',
    deliveryText: 'Envío Express',
    mlText: 'Botella 500ml',
    ratingText: '★★★★★ (4.9)'
  }
]

export default function CartView({ onBack }) {
  const [cart, setCart] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [compraExitosa, setCompraExitosa] = useState(false)

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(CART_KEY))
      if (stored && stored.length > 0) {
        setCart(stored)
      } else {
        setCart(INITIAL_PRODUCTS)
        localStorage.setItem(CART_KEY, JSON.stringify(INITIAL_PRODUCTS))
      }
    } catch {
      setCart(INITIAL_PRODUCTS)
    }
  }, [])

  const saveAndSetCart = (newCart) => {
    setCart(newCart)
    try {
      localStorage.setItem(CART_KEY, JSON.stringify(newCart))
    } catch (e) {
      console.error(e)
    }
  }

  const changeQty = (name, delta) => {
    const updated = cart
      .map((item) => {
        if (item.name === name) {
          const nextQty = item.qty + delta
          return nextQty > 0 ? { ...item, qty: nextQty } : null
        }
        return item
      })
      .filter(Boolean)

    saveAndSetCart(updated)
  }

  const priceToNumber = (priceText) => {
    return Number(priceText.replace(/[^\d]/g, '')) || 0
  }

  const formatPrice = (n) => {
    return '$' + n.toLocaleString('es-CO')
  }

  const totalAmount = cart.reduce((acc, item) => {
    return acc + priceToNumber(item.price) * item.qty
  }, 0)

  const filteredCart = cart.filter((item) => {
    const q = searchQuery.toLowerCase().trim()
    if (!q) return true
    return item.name.toLowerCase().includes(q) || (item.brand || '').toLowerCase().includes(q)
  })

  const handleConfirmar = () => {
    setCompraExitosa(true)
    setTimeout(() => {
      saveAndSetCart([])
      setIsModalOpen(false)
      setCompraExitosa(false)
    }, 2500)
  }

  return (
    <div>
      <header className="sub-header">
        <button className="back-arrow" type="button" onClick={onBack} aria-label="Volver">
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M15 5 L8 12 L15 19"
              fill="none"
              stroke="#1C86C4"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <div className="logo" onClick={onBack} style={{ cursor: 'pointer' }}>
          <img src="/logo.png" alt="Medlife" className="logo-icon" />
          <div className="logo-text">
            <span className="logo-title">MEDLIFE</span>
            <span className="logo-subtitle">VIRTUAL HEALTHCARE</span>
          </div>
        </div>
      </header>

      <div className="context-bar">
        <span className="context-text active-page">CARRITO DE COMPRAS</span>
        <div className="search-wrap">
          <input
            type="text"
            className="search-input"
            placeholder="Buscar productos, marcas..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="search-pill" type="button" onClick={() => {}}>
            <svg viewBox="0 0 24 24" className="search-icon" aria-hidden="true">
              <circle cx="10" cy="10" r="6" fill="none" stroke="#fff" strokeWidth="2" />
              <line x1="15" y1="15" x2="21" y2="21" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
            </svg>
            BÚSQUEDA
          </button>
        </div>
      </div>

      <main className="carrito-section">
        {filteredCart.length === 0 ? (
          <p className="empty-cart-msg">
            {cart.length === 0 ? 'Tu carrito está actualmente vacío.' : 'Ningún producto coincide con la búsqueda.'}{' '}
            <button
              type="button"
              onClick={() => {
                saveAndSetCart(INITIAL_PRODUCTS)
                setSearchQuery('')
              }}
            >
              Restablecer productos de Farmacia
            </button>
          </p>
        ) : (
          <div className="product-grid">
            {filteredCart.map((item) => (
              <article className="product-card" key={item.name}>
                <div className="card-image">
                  {item.badge && <span className="badge">{item.badge}</span>}
                  <button
                    className="remove-btn"
                    type="button"
                    title="Disminuir cantidad"
                    onClick={() => changeQty(item.name, -1)}
                  >
                    -
                  </button>
                  <button
                    className="add-btn"
                    type="button"
                    title="Aumentar cantidad"
                    onClick={() => changeQty(item.name, 1)}
                  >
                    +
                  </button>
                  <span className="qty-label">x{item.qty}</span>
                  <div className="product-icon" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <svg viewBox="0 0 64 64" width="54" height="54" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="18" y="12" width="28" height="42" rx="6" fill="#1C86C4" fillOpacity="0.15" stroke="#1C86C4" strokeWidth="3" />
                      <path d="M32 24 V42 M23 33 H41" stroke="#1C86C4" strokeWidth="3.5" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>

                {item.promoText && <div className="promo-banner">{item.promoText}</div>}
                <span className="brand">{item.brand || 'Genérico'}</span>
                <h3 className="product-name">{item.name}</h3>
                <div className="price-row">
                  <span className="price">{item.price}</span>
                  {item.priceOld && <span className="price-old">{item.priceOld}</span>}
                </div>
                <div className="meta-row">
                  <span>{item.mlText || ''}</span>
                  <span className="delivery">{item.deliveryText || ''}</span>
                </div>
                {item.ratingText && <div className="rating">{item.ratingText}</div>}
              </article>
            ))}
          </div>
        )}

        <button
          className="comprar-btn"
          type="button"
          disabled={cart.length === 0}
          onClick={() => setIsModalOpen(true)}
        >
          COMPRAR {cart.length > 0 && `(${formatPrice(totalAmount)})`}
        </button>
      </main>

      {/* Modal de confirmación */}
      <div className={`modal-overlay ${isModalOpen ? 'active' : ''}`} onClick={() => setIsModalOpen(false)}>
        <div className="modal-box" onClick={(e) => e.stopPropagation()}>
          <h2>Confirma tu compra</h2>

          {compraExitosa ? (
            <div style={{ textAlign: 'center', padding: '24px 0', color: '#16a34a' }}>
              <div style={{ fontSize: '36px', marginBottom: '10px' }}>✓</div>
              <strong>¡Pago procesado exitosamente!</strong>
              <p style={{ marginTop: '8px', fontSize: '13px', color: '#666' }}>
                Tu orden ha sido registrada. Recibirás tu pedido en la dirección indicada.
              </p>
            </div>
          ) : (
            <>
              <div className="modal-items">
                {cart.map((item) => {
                  const unitPrice = priceToNumber(item.price)
                  return (
                    <div className="modal-item" key={item.name}>
                      <span className="modal-item-name">{item.name}</span>
                      <span className="modal-item-qty">x{item.qty}</span>
                      <span className="modal-item-price">{formatPrice(unitPrice * item.qty)}</span>
                    </div>
                  )
                })}
              </div>

              <div className="modal-total">
                <span>Total a pagar</span>
                <span>{formatPrice(totalAmount)}</span>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button className="comprar-btn" type="button" style={{ flex: 1, padding: '14px' }} onClick={handleConfirmar}>
                  CONFIRMAR ORDEN
                </button>
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  style={{
                    flex: 1,
                    padding: '14px',
                    background: '#f1f5f9',
                    border: 'none',
                    borderRadius: '50px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    color: '#64748b'
                  }}
                >
                  VOLVER
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
