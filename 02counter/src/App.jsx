import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  // let counter = 5

  const addValue = () => {
    if (counter == 20){
      setCounter( counter = 20)
    }else{
      counter = counter + 1
      setCounter(counter)
    }

  }

  const RemoveValue = () => {
    if (counter > 0){
      console.log("Value Removed : ", counter)
      // counter = counter - 1
      setCounter(counter - 1)
    }

  }

  return (
    <>
        <h1>Chai Aur React</h1>
        <h2>Counter Value : {counter}</h2>

        <button onClick={addValue} >Add value {counter}</button>
        <br /><br />
        <button  onClick={RemoveValue} >Remove value {counter}</button>

        <p>Fotter : {counter} </p>
    </>
  )
}

export default App
