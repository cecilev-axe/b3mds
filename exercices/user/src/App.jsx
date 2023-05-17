
import { useState } from 'react'
import './App.css'
import Form from './Form'
import Users from './Users'

function App() {
  
  const [users, setUsers] = useState([])


  return (
    <>
      <Form users={users} setUsers={setUsers}/>
      <Users users={users}/>
    </>
  )
}

export default App
