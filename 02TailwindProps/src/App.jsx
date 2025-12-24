import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Card } from './components/Card'

function App(props) {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-emerald-500 text-black p-4 rounded-xl mb-5'>Hello every one , today i am learning tailwind withh react.</h1>

      <Card courseName="Chai aur React" more="Get Started" imageLink="https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg"/>
      <Card courseName="Chai aur JavaScript" more="Know More" imageLink="https://images.pexels.com/photos/879109/pexels-photo-879109.jpeg"/>
    </>
  )
}

export default App
