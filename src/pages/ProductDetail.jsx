import React from 'react'
import { useParams } from 'react-router-dom'
import { productos } from '../data/productos'
import estrella from '/public/estrella.webp'

export const ProductDetail = () => {

  const { id } = useParams()
  const product = productos.find(item => item.id === Number(id))

  return (
    <div className='big-container'>
      <div className='container-details'>
        <div className='photo-detail'>
          <img src={`/${product.image}`} alt={product.name} />
        </div>
        <div className='info-detail'>
          <p className='title'>{product.name}</p>
          <div className='stars'>
            {Array.from({length: product.stars}, (_, i) => (
              <img key={i} src={estrella} alt='Estrella' />
            ))}
          </div>
          <p className='description'>{product.description}</p>
          <span className='price'>{product.price}€</span>
          <button className='info-btn'><i className="fa-solid fa-cart-shopping"></i> Añadir al carrito</button>
        </div>
      </div>
    </div>

  )
}
