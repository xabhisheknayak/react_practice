import { createContext, useContext, useState } from 'react'

const CounterContext = createContext()

function CounterProvider({ children }) {
  const [count, setCount] = useState(0)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => prev - 1)
  const reset = () => setCount(0)

  return (
    <CounterContext.Provider value={{ count, increment, decrement, reset }}>
      {children}
    </CounterContext.Provider>
  )
}

function CounterDisplay() {
  const { count, increment, decrement, reset } = useContext(CounterContext)

  return (
    <div style={{ textAlign: 'center', margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Context Provider Counter</h2>
      <h1>{count}</h1>
      <button onClick={decrement} style={{ margin: '5px', padding: '8px 16px' }}>-</button>
      <button onClick={reset} style={{ margin: '5px', padding: '8px 16px' }}>Reset</button>
      <button onClick={increment} style={{ margin: '5px', padding: '8px 16px' }}>+</button>
    </div>
  )
}

export default function ContextCounter() {
  return (
    <CounterProvider>
      <CounterDisplay />
    </CounterProvider>
  )
}

