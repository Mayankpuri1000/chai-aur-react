import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)
  // let counter = 15;

  const addValue = () => {
    setCounter(counter + 1);
    // Assignment 1: Don't allow counter to go above 20
    if(counter >= 20){ 
      setCounter(20);
    }
  }

  const removeValue = () => {
    console.log('Clicked', counter);
    setCounter(counter - 1);
    // Assignment 2: Don't allow counter to go below 0
    if (counter <= 0){ 
      setCounter(0);
    }
  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value{counter}</button>
      <br />
      <button onClick={removeValue}>Remove value{counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App
