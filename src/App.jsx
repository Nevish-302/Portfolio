import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Routes from './routes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Routes />
    </div>
  )
}

export default App
