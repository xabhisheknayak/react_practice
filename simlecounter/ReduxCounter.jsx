import { Provider, useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, store } from './store'

function CounterDisplay() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div style={{ textAlign: 'center', margin: '20px 0', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
      <h2>Redux Counter</h2>
      <h1>{count}</h1>
      <button onClick={() => dispatch(decrement())} style={{ margin: '5px', padding: '8px 16px' }}>-</button>
      <button onClick={() => dispatch(reset())} style={{ margin: '5px', padding: '8px 16px' }}>Reset</button>
      <button onClick={() => dispatch(increment())} style={{ margin: '5px', padding: '8px 16px' }}>+</button>
    </div>
  )
}

export default function ReduxCounter() {
  return (
    <Provider store={store}>
      <CounterDisplay />
    </Provider>
  )
}

