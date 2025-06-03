import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';

export const Checkout = () => {

  const [finish, setFinish] = useState(null)
  const { clearCart } = useCart()
  const navigate = useNavigate()

  function handleSubmit(e){
    e.preventDefault();
    setFinish('Compra realizada con éxito')
  }

  function navi(){
    localStorage.setItem('products', JSON.stringify([]))
    clearCart()
    navigate('/')
  }

  return (
    <div className='big-container'>

      {!finish ? (
        <>
        <div className='container-contact'>
        <form onSubmit={handleSubmit} className='form'>
          <input
            type='text'
            placeholder='Nombre' required
          />
          <input
            type='text'
            placeholder='Apellidos' required
          />
          <input
            type='text'
            placeholder='Dirección' required
          />

          <select className='select' required>
            <option value=''>Selecciona una opción</option>
            <option value='Tarjeta de crédito'>Tarjeta de crédito o débito</option>
            <option value='Contrarreembolso'>Contrarreembolso</option>
            <option value='Bizum'>Bizum</option>
          </select>

          <input type='submit' value='Enviar' />
        </form>
      </div>
        </>
      ) : (
        <>
        <div className='finish-container'>
          <span>{finish}</span>
          <button onClick={navi} className='btn-resume'>Regresar a principal</button>
        </div>
        </>
      )}
    </div>
  )
}
