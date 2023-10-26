import { useState } from 'react'
import classes from './Counter.modules.scss'

export const Counter = () => {
    const [counter, setCounter] = useState(1)
    const increment = () => {
        setCounter((prev) => prev + 1)
    }
  return (
    <div className={classes.btn}>
        <h1>{counter}</h1>
        <button onClick={increment}>add</button>
    </div>
  )
}
