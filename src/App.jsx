import { useState } from 'react'
import Contador from './component/Contador'
import Box from './component/Box'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Contador />
      <Box />
    </div>
  )
}

export default App
