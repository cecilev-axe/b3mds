import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Power from './Power'

function App() {

  let today = new Date();
  
  return (
    <>
      <Power />
      {today.toLocaleTimeString()}
    </>
      
  )
}

export default App
