import { useState } from 'react'

export const Counter = () => {
    const [counter, setCounter] = useState(1)
    const increment = () => {
        setCounter((prev) => prev + 1)
    }
  return (
    <div>
        <h1>{counter}</h1>
        <button onClick={increment}>add</button>
    </div>
  )
}
