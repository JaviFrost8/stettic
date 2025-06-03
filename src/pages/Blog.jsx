import React from 'react'
import crema from '../assets/images/blog/crema.webp'
import cremas from '../assets/images/blog/cremas.webp'
import protector from '../assets/images/blog/protector.webp'
import pelo from '../assets/images/blog/pelo.webp'
import reductora from '../assets/images/blog/reductora.webp'

export const Blog = () => {
  return (
    <div className='big-container'>
      <div className='blog-container'>
        <h2 className='title-blog'>Últimos artículos</h2>

        <div className='article'>
          <div className='article-photo'>
            <img src={crema} alt='Crema facial' />
          </div>
          <div className='article-info'>
            <p>Cosméticos multifuncionales que simplifican y potencian tu rutina</p>
            <span>Publicado: 22/05/2025</span>
            <span>por: Carolina Sierra Benítez</span>
            <a href='#'>Leer más</a>
          </div>
        </div>

        <div className='article'>
          <div className='article-photo'>
            <img src={cremas} alt='Crema facial' />
          </div>
          <div className='article-info'>
            <p>Cómo regenerar mi piel. Cremas regeneradoras.</p>
            <span>Publicado: 10/05/2025</span>
            <span>por: Sofía Lauren Olmo</span>
            <a href='#'>Leer más</a>
          </div>
        </div>

        <div className='article'>
          <div className='article-photo'>
            <img src={protector} alt='Crema facial' />
          </div>
          <div className='article-info'>
            <p>Protectores solares y como elegir el más adecuado para tu tipo de piel.</p>
            <span>Publicado: 23/04/2025</span>
            <span>por: Amanda Ortiz Cayehuela</span>
            <a href='#'>Leer más</a>
          </div>
        </div>

        <div className='article'>
          <div className='article-photo'>
            <img src={pelo} alt='Crema facial' />
          </div>
          <div className='article-info'>
            <p>Como tener un pelo suave y brillante. Rutina para lavar y cuidar tu pelo</p>
            <span>Publicado: 06/04/2025</span>
            <span>por: Sofía Lauren Olmo</span>
            <a href='#'>Leer más</a>
          </div>
        </div>

        <div className='article'>
          <div className='article-photo'>
            <img src={reductora} alt='Crema facial' />
          </div>
          <div className='article-info'>
            <p>¿Las cremas reductoras realmente funcionan?</p>
            <span>Publicado: 30/03/2025</span>
            <span>por: Carolina Sierra Benitez</span>
            <a href='#'>Leer más</a>
          </div>
        </div>
      </div>
    </div>
  )
}
