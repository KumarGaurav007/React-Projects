import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style = {{backgroundColor: color}}>
      
      <div className='fixed flex flex-wrap justify-center bottom-14 inset-x-55 px-3 border-2 rounded-xl py-3 bg-cyan-300 w-fit '>
        <button 
        onClick={()=> setColor("yellow")}
        className=' mr-5 px-4 py-2 rounded-xl border-2 font-bold cursor-pointer'
        style={{backgroundColor: 'yellow'}}
        >Yellow</button>
        <button  cursor-pointer
        onClick={()=> setColor("skyblue")}
        className=' mr-5 px-4 py-2 rounded-xl border-2 font-bold cursor-pointer'
        style={{backgroundColor: 'skyblue'}}
        >Sky Blue</button>
        <button 
        onClick={()=> setColor("tomato")}
        className=' mr-5 px-4 py-2 rounded-xl border-2 font-bold cursor-pointer'
        style={{backgroundColor: 'tomato'}}
        >Tomato</button>
        <button 
        onClick={()=> setColor("purple")}
        className='bg-fuchsia-800 mr-5 px-4 py-2 rounded-xl border-2 font-bold cursor-pointer'
        style={{backgroundColor: 'purple'}}
        >Purple</button>
        <button 
        onClick={()=> setColor("gray")}
        className=' mr-5 px-4 py-2 rounded-xl border-2 font-bold cursor-pointer'
        style={{backgroundColor: 'gray'}}
        >Gray</button>
        <button 
        onClick={()=> setColor("lime")}
        className=' mr-5 px-4 py-2 rounded-xl border-2 font-bold cursor-pointer'
        style={{backgroundColor: 'lime'}}
        >Lime</button>
        <button 
        onClick={()=> setColor("orange")}
        className=' mr-5 px-4 py-2 rounded-xl border-2 font-bold cursor-pointer'
        style={{backgroundColor: 'orange'}}
        >orange</button>
        <button 
        onClick={()=> setColor("pink")}
        className='bg-pink-600 mr-5 px-4 py-2 rounded-xl border-2 font-bold cursor-pointer'
        style={{backgroundColor: 'pink'}}
        >Pink</button>
        <button 
        onClick={()=> setColor("mediumseagreen")}
        className=' mr-5 px-4 py-2 rounded-xl border-2 font-bold cursor-pointer'
        style={{backgroundColor: 'mediumseagreen'}}
        >Teal</button>
        <button 
        onClick={()=> setColor("slateblue")}
        className='bg-yellow-300 mr-5 px-4 py-2 rounded-xl border-2 font-bold cursor-pointer'
        style={{backgroundColor: 'slateblue'}}
        >Slate Blue</button>
      </div>
    </div>
  )
}

export default App
