import React from 'react'
import { NavLink } from 'react-router-dom';

export const Header = () => {

  return (
    <header>
      <div className='free'>ENVIOS GRATIS a partir de 50€</div>
      <ul className='login'>
        <li><a href='#'>LOGIN</a></li>
        <li><a href='#'>CREAR CUENTA</a></li>
        <li><a href='#'>CARRITO</a></li>
      </ul>
      <div className='title-container'>
        <span>ESTETTIC & TATTOO</span>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to='/'
              className={({isActive}) => isActive ? 'active' : ''}>INICIO</NavLink>
          </li>
          <li>
            <NavLink to='/tratamientos'
              className={({isActive}) => isActive ? 'active' : ''}>TRATAMIENTOS</NavLink>
          </li>
          <li>
            <NavLink to='/productos'
              className={({isActive}) => isActive ? 'active' : ''}>PRODUCTOS</NavLink>
          </li>
          <li>
            <NavLink to='/blog'
              className={({isActive}) => isActive ? 'active' : ''}>BLOG</NavLink>
          </li>
          <li>
            <NavLink to='/contacto'
              className={({isActive}) => isActive ? 'active' : ''}>CONTACTO</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}
