import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { AuthProvider } from './context/AuthContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { ProductProvider } from './context/ProductsContext.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ProductProvider>
      <CartProvider>
        <AuthProvider> 
          <App />
        </AuthProvider>
      </CartProvider>
    </ProductProvider>
  </StrictMode>,
)
