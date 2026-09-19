import ContextCounter from './ContextCounter'
import ReduxCounter from './ReduxCounter'

export default function App() {
  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <ContextCounter />
      <ReduxCounter />
    </div>
  )
}
