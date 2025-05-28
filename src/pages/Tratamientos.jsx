import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Tratamientos = () => {

  const navigate = useNavigate();

  function navi(){
    navigate('/contacto')
  }

  return (
    <div className='big-container'>
      <div className='container'>
        <h2>Descubre los tratamientos que transformarán tu belleza</h2>
        <div className='subtitle'>
          <p>En Estettic&Tatto, nos especializamos en potenciar tu belleza natural con los tratamientos más avanzados en estética facial y corporal.</p> 
          <p>Cada servicio está diseñado para brindarte resultados visibles, personalizados y libres de estrés, en un ambiente exclusivo y relajante.</p>
        </div>

        <div className='tratamientos'>
          <div className='tratamiento'>
            <h3>Eliminación de líneas de expresión</h3>
            <img src='../public/images/services/eliminación_lineas_expresión.webp' alt='Eliminación de lineas de expresión' />
          </div>

          <div className='tratamiento'>
            <h3>Eliminación de patas de gallo</h3>
            <img src='../public/images/services/eliminar-patas-de-gallo.webp' alt='Eliminación patas de gallo' />
          </div>

          <div className='tratamiento'>
            <h3>Eliminación de verrugas</h3>
            <img src='../public/images/services/eliminar-verrugas.webp' alt='Eliminación de verrugas' />
          </div>

          <div className='tratamiento'>
            <h3>Hidronutrición</h3>
            <img src='../public/images/services/hidronutricion.webp' alt='Hidronutrición' />
          </div>

          <div className='tratamiento'>
            <h3>Eliminación de vello</h3>
            <img src='../public/images/services/laser_triple_honda.webp' alt='Eliminación de vello' />
          </div>

          <div className='tratamiento'>
            <h3>Levantamiento de párpados</h3>
            <img src='../public/images/services/levantamiento_parpados.webp' alt='Levantamiento de párpados' />
          </div>

          <div className='tratamiento'>
            <h3>Eliminación de marcas de acné</h3>
            <img src='../public/images/services/marcas-de-acne.webp' alt='Eliminación de cicatrices y marcas de acné' />
          </div>

          <div className='tratamiento'>
            <h3>Reducción de papada</h3>
            <img src='../public/images/services/reduccion_de_papada.webp' alt='Reducción de papada' />
          </div>

          <div className='tratamiento'>
            <h3>Reducción de estrías</h3>
            <img src='../public/images/services/reduccion_estrias.webp' alt='Reducción de estrías' />
          </div>

          <div className='tratamiento'>
            <h3>Reducción de ojeras</h3>
            <img src='../public/images/services/reduccion_ojeras.webp' alt='Reducción de ojeras' />
          </div>

          <div className='tratamiento'>
            <h3>Babylips</h3>
            <img src='../public/images/services/babylips.webp' alt='Babylips' />
          </div>

          <div className='tratamiento'>
            <h3>Eliminación de tatuajes</h3>
            <img src='../public/images/services/eliminacion-tatuajes.webp' alt='Eliminación de tatuajes' />
          </div>
        </div>

        <div className='more-info'>
          <h3>Resultados con Rigor Científico</h3>
          <h4>"Tecnología avanzada, resultados medibles."</h4>
          <p>Nuestros tratamientos no son solo sobre estética, sino sobre salud cutánea a largo plazo. Confía en profesionales certificados para un plan personalizado.</p>
          <p>Solicita tu diagnóstico personalizado sin costo alguno aquí: <button onClick={navi} className='btn'>Solicitar</button></p>
        </div>
      </div>
    </div>
  )
}
