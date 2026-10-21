import React from 'react'

export default function Footer() {
  return (
    <footer className="medlife-footer">
      <div className="footer-item">
        <i className="fa-solid fa-heart-circle-check" aria-hidden="true"></i>
        <span>Medlife Virtual Healthcare &copy; {new Date().getFullYear()}</span>
      </div>
      <div className="footer-item">
        <i className="fa-solid fa-phone" aria-hidden="true"></i>
        <a href="tel:+573227048889">+57 322 7048889</a>
      </div>
      <div className="footer-item">
        <i className="fa-solid fa-envelope" aria-hidden="true"></i>
        <a href="mailto:info@medilifegroup.com">INFO@MEDILIFEGROUP.COM</a>
      </div>
    </footer>
  )
}
