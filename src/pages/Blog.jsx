import React from 'react'

export const Blog = () => {
  return (
    <div className='big-container'>
      <div className='blog-container'>
        <h2 className='title-blog'>Últimos artículos</h2>

        <div className='article'>
          <div className='article-photo'>
            <img src='/public/images/blog/crema.webp' alt='Crema facial' />
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
            <img src='/public/images/blog/cremas.webp' alt='Crema facial' />
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
            <img src='/public/images/blog/protector.webp' alt='Crema facial' />
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
            <img src='/public/images/blog/pelo.webp' alt='Crema facial' />
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
            <img src='/public/images/blog/reductora.webp' alt='Crema facial' />
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
