import { useState } from 'react'

function App() {
const [count, setCount] = useState(0)
function increase(){
  setCount(prev => prev + 1)
}
  return (
    <div>
      <h1>{count}</h1>
      <h1>added new line of code</h1>
      <button onClick= {increase}>Increase</button>
   </div>
  )
}

export default App
