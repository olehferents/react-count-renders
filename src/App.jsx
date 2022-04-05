import { useState } from 'react'
import RenderCount from './components/RenderCount'

function App() {
  const [value, setValue] = useState('')

  return (
    <div>
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)}/>
      <RenderCount />
    </div>
  )
}

export default App
