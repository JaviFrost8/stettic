import React from 'react'
import { tratamientos } from '../data/tratamientos'
import { CardService } from '../components/CardService'

export const Tratamientos = () => {

  return (
    <div className='big-container'>
      <section className='container'>
        <span className='nuestros'>Nuestros</span>
        <span className='tratamientos'>tratamientos</span>
        <p className='parrafo'>
          Nuestros <strong>tratamientos estéticos</strong> aportan un beneficio <br></br>
          tanto para la mente como para el cuerpo y los puedes
          combinar a tu medida.
        </p>
      </section>

      <section className='questions'>
        <h2>¿En que consisten nuestros tratamientos estéticos?</h2>
        <p>
          Los tratamientos estéticos que ofrecemos en <strong>Estettic&Tattoo</strong> son todos tratamientos de estética y medicina estética orientados a cuidar tu cuerpo sin cirugía. <br></br>
          Generalmente optan por esta opción quienes quiere mejorar su silueta o tratar problemas frecuentes <br></br>
          de nuestra piel y de nuestro cuerpo en general. <br></br>
          Siempre para quienes no quieren someterse a tratamientos de cirugía estética o más invasivos. <br></br>
        </p>

        <h2>Tipos de tratamientos</h2>
        <p>
          En nuestro centro, ofrecemos una amplia gama de tratamientos estéticos y dermatológicos, <br></br>
          diseñados para mejorar la salud y apariencia de la piel, tanto del rostro como del cuerpo. <br></br>
          Nuestros procedimientos utilizan tecnología avanzada y técnicas mínimamente invasivas, <br></br>
          garantizando resultados efectivos y personalizados. <br></br>
        </p>

        <h2>Tratamientos</h2>
      </section>

      <section className='container-tratamientos'>
          {
            tratamientos.map(item => (
              <CardService 
                key={item.id}
                item={item}
              />
            ))
          }
      </section>
    </div>
  )
}
