import React from 'react'
import { Link } from 'react-router-dom';

export const Product = ({ product }) => {

  return (
    <div className='card-product'>
      <div className='container-photo'>
        <img src={product.image} alt={product.name} />
      </div>
      <div className='info-product'>
      <p>{product.name}</p>
      <span>{product.price}€</span>
      <Link 
        to={`/productos/${product.id}`} 
        onClick={() => window.scrollY(0, 0)}
      >
        Ver detalles
      </Link>
      </div>
    </div>
  )
}
