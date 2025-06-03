import React from 'react'
import logo from '../assets/logo.webp'

export const Footer = () => {

  return (
    <div className='big-footer-container'>
      <div className='footer-container'>
        <div>
          <img src={logo} alt='Logo' />
          <div className='icons'>
            <a href='#'><i className="fa-brands fa-twitter"></i></a>
            <a href='#'><i className="fa-brands fa-facebook"></i></a>
            <a href='#'><i className="fa-brands fa-instagram"></i></a>
          </div>
        </div>

        <div className='info'>
          <h3>Información</h3>
          <ul>
            <li><a href='#'>Sobre nosotros</a></li>
            <li><a href='#'>Preguntas frecuentes</a></li>
            <li><a href='#'>Terminos y condiciones</a></li>
            <li><a href='#'>Métodos de envío</a></li>
            <li><a href='#'>Aviso de privacidad</a></li>
          </ul>
        </div>

        <div className='contact-container'>
          <h3>Contacto</h3>
          <p>Eva Stettic</p>
          <p>C/ Manzana, 27</p>
          <p>Cádiz</p>
          <p>España</p>
          <p>Tfno: +34 699 78 32 23</p>
        </div>
      </div>

      <p className='powered'>Powered by Javier Gonzalez</p>
    </div>
  )
}
