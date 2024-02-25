import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number ,setNumber] = useState(false)
  const [character , setCharacter] = useState(false)

  return (
    <>
      <h1> Password Generator </h1>
      <input type='text' />
      <button> Copy</button> 
      <br/>
      <input type='radio' value="Number" name="Number" placeholder='Number' htmlFor="Number"  /> 
      <input type='radio' />


    </>
  )
}

export default App
