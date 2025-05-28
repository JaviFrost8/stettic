import React from 'react'

export const Inicio = () => {

  return (
    <div className='home-container'>
      <div className='photo-container'></div>
      <h2>Productos destacados</h2>

      <div className='featured'>
        <div className='product-featured'>
          <img src='../public/shopping.webp' alt='Primer producto' />
          <span>Pixi Rose</span>
        </div>
        <div className='product-featured'>
          <img src='../public/shopping1.webp' alt='Segundo producto' />
          <span>Crema de gelatina</span>
        </div>
        <div className='product-featured'>
          <img src='../public/shopping2.webp' alt='Tercer producto' />
          <span>Agua de rosas</span>
        </div>
        <div className='product-featured'>
          <img src='../public/shopping3.webp' alt='Cuarto producto' />
          <span>Serum hidratante</span>
        </div>
      </div>

      <div className='subscribe'>
        <img src='../public/variety.webp' alt='Variedad de productos' />
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
          <img src='../public/chairs.webp' alt='Sillas' />
          <img src='../public/cafe.webp' alt='Café' />
          <img src='../public/face.webp' alt='Masaje facial' />
          <img src='../public/depilacion.webp' alt='Depilación' />
        </div>
      </div>

      <div className='container-newsletter'>
        <form className='newsletter'>
          <h3>Suscríbete gratis</h3>
          <input 
            type='email' 
            placeholder='Email@ejemplo.com'
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
