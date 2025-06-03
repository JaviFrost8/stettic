import React from 'react'
import { productos } from '../data/productos'
import { Product } from '../components/Product'

export const Productos = () => {


  return (
    <div className='shop'>
      
      <div className='product-container'>
        {
          productos.map(product => (
            <Product
              key={product.id}
              product={product}
            />
          ))
        }
      </div>
    </div>
  )
}
