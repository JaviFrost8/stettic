import React from 'react'
import chairs from '../assets/chairs.webp'
import cafe from '../assets/cafe.webp'
import face from '../assets/face.webp'
import depilacion from '../assets/depilacion.webp'
import shopping from '../assets/shopping.webp'
import shopping1 from '../assets/shopping1.webp'
import shopping2 from '../assets/shopping2.webp'
import shopping3 from '../assets/shopping3.webp'
import variety from '../assets/variety.webp'

export const Inicio = () => {

  return (
    <div className='home-container'>
      <div className='photo-container'></div>
      <h2>Productos destacados</h2>

      <div className='featured'>
        <div className='product-featured'>
          <img src={shopping} alt='Primer producto' />
          <span>Pixi Rose</span>
        </div>
        <div className='product-featured'>
          <img src={shopping1} alt='Segundo producto' />
          <span>Crema de gelatina</span>
        </div>
        <div className='product-featured'>
          <img src={shopping2} alt='Tercer producto' />
          <span>Agua de rosas</span>
        </div>
        <div className='product-featured'>
          <img src={shopping3} alt='Cuarto producto' />
          <span>Serum hidratante</span>
        </div>
      </div>

      <div className='subscribe'>
        <img src={variety} alt='Variedad de productos' />
        <div className='read-more'>
          <p>CONSIGUE UNA</p>
          <p className='text-suscription'>suscripción mensual</p>
          <p>¡y no te pierdas nada!</p>
          <button className='btn-readmore'>Leer más</button>
        </div>
      </div>

      <div className='posts-container'>
        <h3>Últimas publicaciones en Instagram</h3>
        <div className='posts'>
          <img src={chairs} alt='Sillas' />
          <img src={cafe} alt='Café' />
          <img src={face} alt='Masaje facial' />
          <img src={depilacion} alt='Depilación' />
        </div>
      </div>

      <div className='container-newsletter'>
        <form className='newsletter'>
          <h3>Suscríbete gratis</h3>
          <input 
            type='email' 
            placeholder='Email@ejemplo.com'
            className='inputHome'
            required
          />
          <button type='submit'>Subscribir</button>
        </form>
        <div className='social'>
          <h3>Síguenos aquí</h3>
          <div className='icons'>
            <a href='#'><i class="fa-brands fa-twitter"></i></a>
            <a href='#'><i class="fa-brands fa-facebook"></i></a>
            <a href='#'><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    </div>
  )
}
