import { useContext } from 'react'
import { CartContext } from './CartContext'

export default function Cart() {
  const { cart, removeFromCart, total } = useContext(CartContext)

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <h2>Shopping Cart ({cart.length})</h2>

      {cart.length === 0 ? (
        <p style={{ color: '#777' }}>Your cart is empty.</p>
      ) : (
        cart.map((item, index) => (
          <div
            key={index}
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
            <span>{item.name} - ${item.price}</span>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{ padding: '4px 10px', cursor: 'pointer', color: 'red' }}
            >
              Remove
            </button>
          </div>
        ))
      )}

      <hr style={{ margin: '15px 0' }} />
      <h3>Total: ${total}</h3>
    </div>
  )
}
