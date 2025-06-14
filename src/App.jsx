import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Tratamientos } from './pages/Tratamientos';
import { Blog } from './pages/Blog';
import { Contacto } from './pages/Contacto';
import { Header } from './components/Header';
import { Productos } from './pages/Productos';
import { Footer } from './components/Footer';
import { Carrito } from './pages/Carrito';
import { ProductDetail } from './pages/ProductDetail';
import { CartProvider } from './context/CartContext';
import { Checkout } from './pages/Checkout';

function App() {

  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Inicio />} />
          <Route path='/tratamientos' element={<Tratamientos />} />
          <Route path='/productos' element={<Productos />} />
          <Route path='/productos/:id' element={<ProductDetail />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/contacto' element={<Contacto />} />
          <Route path='/carrito' element={<Carrito />} />
          <Route path='/checkout' element={<Checkout />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    </>
  )
}

export default App
