import React from 'react'
import { Link } from 'react-router-dom';

export const CardService = ({ item }) => {

  return (
    <div className='card-service'>
      <div className='card-photo'>
        <img src={item.image} alt={item.name} />
        <h2 className='title-treatment'>{item.name}</h2>
      </div>
      <div className='card-description'>
        <span className='description'>{item.description}</span>
        <Link to='/contacto' onClick={() => window.scrollY(0, 0)}><button className='btn-description'>Reservar cita</button></Link> 
      </div>
    </div>
  )
}
