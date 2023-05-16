import './App.css'
import Hello from './Hello'
import { useState } from 'react'

function App() {

  const [message, setMessage] = useState("un message")
  const items = ['croissant', 'chocolat', 'lait', 'jus d\'orange']

  setTimeout(() => {
    setMessage('coucou')
  }, 2000)

  return (
    <>
      <Hello prenom="Téo" nom="Vkfdjlkdfj"/>
      <Hello prenom="Gaëtan"/>
      <Hello prenom="Edgar"/>
      <p>lorem</p>
      <p>{message}</p>

      <ul>
      { items.map( (item, i) => <li key={i}>{item}</li>)}
      </ul>
    </>
  )
}

export default App
