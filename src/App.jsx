import React from 'react'
import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className="w-full h-screen duration-200 "style={{backgroundColor: color}}></div>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-6 py-2 rounded-3xl'>
          <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 text-white shadow-lg rounded-full'style={{backgroundColor:"red"}} >Red</button>
          <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 text-white shadow-lg rounded-full'style={{backgroundColor:"green"}} >green</button>
          <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 text-white shadow-lg rounded-full'style={{backgroundColor:"blue"}} >blue</button>
          <button onClick={()=>setColor("pink")} className='outline-none px-4 py-1 text-white shadow-lg rounded-full'style={{backgroundColor:"pink"}} >pink</button>
          <button onClick={()=>setColor("cyan")} className='outline-none px-4 py-1 text-white shadow-lg rounded-full'style={{backgroundColor:"cyan"}} >cyan</button>
          <button onClick={()=>setColor("greenyellow")} className='outline-none px-4 py-1 text-white shadow-lg rounded-full'style={{backgroundColor:"greenyellow"}} >greenyellow</button>
        </div>
      </div>
    </>
  )
}

export default App
