import { CartProvider } from './CartContext'
import ProductList from './ProductList'
import Cart from './Cart'

export default function App() {
  return (
    <CartProvider>
      <div style={{ maxWidth: '420px', margin: '30px auto', fontFamily: 'sans-serif' }}>
        <h1 style={{ textAlign: 'center' }}>Simple Shop</h1>
        <ProductList />
        <Cart />
      </div>
    </CartProvider>
  )
}
