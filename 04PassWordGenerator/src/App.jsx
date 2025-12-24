import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number, setNumber] = useState(false)
  const [character, setCharacter] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (number) str += "0123456789"

    if (character) str += "~!@#$%^&*()[]{}`_-"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, number, character, setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, number, character, setPassword])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center mb-2 font-semibold'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 bg-white font-semibold'
            placeholder='Password'
            readOnly
            ref={passwordRef}
          />
          <button 
          onClick={copyPasswordToClipboard}
          className='bg-blue-700 outline-none text-white px-3 py-0.5 shrink-0 cursor-pointer font-semibold'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-8'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={50}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Lenght : {length} </label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input
              type="checkbox"
              defaultChecked={number}
              id='numberInput'
              className='cursor-pointer'
              onChange={() => {
                setNumber((prev) => !prev);
              }}
            />
            <label>Number </label>
          </div>
          <div className='flex items-center gap-x-1 '>
            <input
              type="checkbox"
              defaultChecked={character}
              id='charInput'
              className='cursor-pointer'
              onChange={() => {
                setCharacter((prev) => !prev);
              }}
            />
            <label>Character </label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
