import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('red')

  return (
    <>
      <div className='w-dvw h-screen duration-200 flex justify-center items-center' style={{backgroundColor: color}}
      > <h1>BACKGROUND COLOR CHANGER</h1>
          <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor('Yellow')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'yellow'}}>Yellow</button>
            <button onClick={() => setColor('Pink')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'pink'}}>Pink</button>
            <button onClick={() => setColor('Blue')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'blue'}}>Blue</button>
            <button onClick={() => setColor('Purple')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'purple'}}>Purple</button>
            <button onClick={() => setColor('orange')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'orange'}}>orange</button>
            <button onClick={() => setColor('red')} className='outline-none px-4 py-1 rounded-full shadow-lg text-black' style={{backgroundColor: 'red'}}>Red</button>
          </div>
          </div>
      </div>
    </>
  )
}

export default App
