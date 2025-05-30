import React from 'react'

export const Contacto = () => {

  return (

    <div className='big-container'>

      <div className='container-contact'>
        <form className='form'>
          <input
            type='text'
            placeholder='Nombre' required
          />
          <input
            type='text'
            placeholder='Teléfono' required
          />
          <input
            type='email'
            placeholder='Email' required
          />

          <input
            type='text'
            placeholder='Tratamiento' required
          />

          <textarea placeholder='Mensaje' required />

          <input type='submit' value='Enviar' />
        </form>

        <div className='info-contact'>
          <div className='contact'>
            <i className="fa-solid fa-phone"></i>
            <span>Contacto</span>
            <span>Tfn: +34 699 78 32 23</span>
            <span>info@estettic&tattoo.es</span>
          </div>

          <div className='schedule'>
            <i className="fa-solid fa-clock"></i>
            <span>De lunes a viernes</span>
            <span>9:00 - 13:30</span>
            <span>16:00 - 20:00</span>
          </div>

          <div className='location'>
            <i className="fa-solid fa-location-dot"></i>
            <span>C/Manzana 27</span>
            <span>11130</span>
            <span>Cádiz</span>
          </div>
        </div>
      </div>
    </div>
  )
}
