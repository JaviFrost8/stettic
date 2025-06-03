import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('products');
    return savedCart ? JSON.parse(savedCart) : []
  });

  const totalProducts = cart.reduce((acc, product) => acc + product.quantity, 0)

  function addToCart(product) {
    setCart(prevCart => {
      const productExists = prevCart.find(item => item.id === product.id)
      if (productExists) {
        const newCart = prevCart.map(item => (
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ))

        localStorage.setItem('products', JSON.stringify(newCart))
        return newCart

      } else {
        const newCart = [...prevCart, { ...product, quantity: 1 }]

        localStorage.setItem('products', JSON.stringify(newCart))
        return newCart
      }
    })
  }

  function deleteFromCart(productId) {

    const product = cart.find(p => p.id === productId)

    if (product && product.quantity === 1) {
      const confirm = window.confirm('¿Estás seguro que deseas eliminar el producto?')

      if (!confirm) {
        return product
      }
    }

    setCart(prevCart => {
      const newCart = prevCart.map(item => (
        item.id === productId ? {...item, quantity: item.quantity - 1} : item
      )).filter(product => product.quantity > 0)

      localStorage.setItem('products', JSON.stringify(newCart))
      return newCart
    })
  }

  function addFromCart(productId) {
    setCart(prevCart => {
      const newCart = prevCart.map(item => (
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      ))

      localStorage.setItem('products', JSON.stringify(newCart))
      return newCart
    })
  }

  function clearCart(){
    setCart([])
  }

  return (
    <CartContext.Provider value={{
      cart,
      totalProducts,
      clearCart,
      addToCart,
      deleteFromCart,
      addFromCart,
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}