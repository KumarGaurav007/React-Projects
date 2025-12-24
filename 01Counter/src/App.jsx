import "./App.css";
import { useState } from "react";


function App() {
  let [count, setCount] = useState(5)
  const [message, setMessage] = useState("")

  let addValue = () => {
    if (count < 20) {
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
      setCount(count + 1)
    }
    else{
      alert("Counter limit exceded : ");
      setMessage("Maximum counter value is : 20")
    }
  }
  
  let removeValue = () => {
    if (count > 0) {
      setCount(count - 1)
    }
    else{
      alert("Counter can not be negative : ")
      setMessage("Minimum counter value is : 0")
    }
  }

  return (

    <div className="box">
      <p>Chai aur React Counter</p>
      <h1>Total Count : {count}</h1>
      <h3>{message}</h3>
      <button id="inc" onClick={addValue} disabled={count === 20}>Increment</button>
      <br />
      <button id="dec" onClick={removeValue} disabled={count === 0}>Decrement</button>
    </div>

  )
}

export default App
