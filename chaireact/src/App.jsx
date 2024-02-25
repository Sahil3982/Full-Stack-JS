import { useCallback, useEffect, useState,useRef } from 'react'

import './App.css'

function App() {


  const [lengthArr, setLengthArr] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")

  //useRef

  const passwordRef = useRef(null)


  const passwordGenerator = useCallback(() => {


    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTWXYZabcdefghijklmnopqrstuvwxyz";

    if (number) str += "0123456789"
    if (character) str = + "!@#$%^&*()_+}{|"
    for (let i = 1; i <= lengthArr; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [lengthArr, number, character, setPassword])

  const copyToClipBoard = useCallback( ()=>
    {
      window.navigator.writeText(password)

    },[password])

  useEffect(() => {
    passwordGenerator();

  }, [lengthArr, character, number, passwordGenerator])


  return (
    <>
      <div style={{ backgroundColor: 'red', borderRadius: '5px', padding: 10, maxWidth: 'content' }}>

        <h1> Password Generator </h1>
        <input
          type='text'
          value={password}
          placeholder='password'
          readOnly   />
        <button 
        onChange={copyToClipBoard}
        > Copy</button>
        <br />
        <input type="range"
          min={6} max={100}
          value={lengthArr}
          // onInput="rangeValue.innerText = this.value"
          onChange={(e) => {
            setLengthArr(e.target.value)

          }} /> Length:{lengthArr}
        <input
          type='checkbox'
          defaultChecked={number}
          id='numberInput'
          onChange={() => {
            setNumber((p) => !p)
          }}

        /> Number
        <input
          type='checkbox'
          defaultChecked={character}
          id='characterInput'
          onChange={() => {
            setCharacter((p) => !p)
          }}
        /> Special Char

      </div>



    </>
  )
}

export default App
