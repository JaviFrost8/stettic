import React from 'react'
import { useCart } from '../context/CartContext'

export const Carrito = () => {

  const { cart, deleteFromCart, addFromCart, totalProducts } = useCart()
  const totalPrice = cart.reduce((acc, product) => acc + product.price * product.quantity, 0)
  const priceWithSend = totalPrice < 50 ? totalPrice + 4.90 : totalPrice;

  return (
    <div className='big-container-cart'>
      {
        cart.length === 0 ? (
          <p className='empty'>El carrito está vacío</p>
        ) : (
          <>
            <div className='cart-container'>
              <h2 className='title-cart'>Tu Carrito</h2>
              {
                cart.map((product, index) => (
                  <div key={index} className='product-cart'>
                    <div>
                      <img src={product.image} alt={product.name} />
                    </div>
                    <div className='info-product-cart'>
                      <span>{product.name} </span>
                      <span><strong>{product.price}€</strong></span>
                      <div className='quantity'>
                        <div className='quantity-info'>
                          <button onClick={() => deleteFromCart(product.id)}>-</button>
                          <span>{product.quantity}</span>
                          <button onClick={() => addFromCart(product.id)}>+</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <div className='resume'>
              <div className='resume-container'>
                <h2>Resumen</h2>
                <span>Subtotal: {`(${totalProducts} productos)`}</span>
                <span>Gastos de envío: <strong>{totalPrice > 50 ? 'Gratis' : '4,90€'}</strong></span> 
                <span className='totalPrice'>Total: <strong>{priceWithSend.toFixed(2)}€</strong></span>
              </div>
            </div>
          </>
        )
      }
    </div>
  )
}
