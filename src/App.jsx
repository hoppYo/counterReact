import { useState } from 'react'
import style from "./App.module.css";


export default function App(){
  const [count, setCount] = useState(0);
  function increment (){
    setCount(count +1);
  }
  function decrement (){
    setCount(count -1);
  }
  function handleDecrement(){
    if (count> 0){
      decrement()
    }
  }
  return <div>
    <button onClick={handleDecrement} className={style.decrement}>-</button>
    <span className={style.span}>{count}</span>
    <button onClick={()=> increment()} className={style.increment}>+</button>
    <p className={style.p}>Current count is : {count}</p>
  </div>
}  