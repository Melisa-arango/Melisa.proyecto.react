import React from 'react'

export default function PostMeta({ dateText = 'PUBLICADO HACE 2 AÑOS', categoryText = 'SALUD' }) {
  return (
    <div className="post-meta">
      <span className="meta-item">
        <svg viewBox="0 0 24 24" className="meta-icon" aria-hidden="true">
          <circle cx="12" cy="12" r="9" fill="none" stroke="#414042" strokeWidth="1.6" />
          <path
            d="M12 7 V12 L16 14"
            fill="none"
            stroke="#414042"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {dateText}
      </span>
      <span className="meta-item">
        <svg viewBox="0 0 24 24" className="meta-icon" aria-hidden="true">
          <path
            d="M12 20 C5 15, 3 10, 7 6.5 C9.5 4.3, 12 5.5, 12 8 C12 5.5, 14.5 4.3, 17 6.5 C21 10, 19 15, 12 20 Z"
            fill="none"
            stroke="#414042"
            strokeWidth="1.6"
          />
          <path
            d="M10 8 h4 M12 6 v4"
            stroke="#414042"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
        {categoryText}
      </span>
    </div>
  )
}
