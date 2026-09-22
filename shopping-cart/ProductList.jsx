import { useContext } from 'react'
import { CartContext } from './CartContext'

const products = [
  { id: 1, name: 'Headphones', price: 50 },
  { id: 2, name: 'Smartwatch', price: 100 },
  { id: 3, name: 'Keyboard', price: 70 },
]

export default function ProductList() {
  const { addToCart } = useContext(CartContext)

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px', marginBottom: '20px' }}>
      <h2>Products</h2>
      {products.map((product) => (
        <div
          key={product.id}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '10px 0',
            padding: '8px',
            background: '#f9f9f9',
            borderRadius: '4px',
          }}
        >
          <span>{product.name} - ${product.price}</span>
          <button
            onClick={() => addToCart(product)}
            style={{ padding: '6px 12px', cursor: 'pointer' }}
          >
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  )
}
