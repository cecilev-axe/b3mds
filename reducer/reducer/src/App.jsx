import './App.css'
import { useReducer } from 'react';

//le state initial doit être un objet
const initialState = {
  count: 0,
  message: ""
}

//gérer toutes les action possibles sur le state
const reducer = (state, action) => {

  switch(action.type){
    case "incr":
      return {...state, count: state.count + 1};
    case "decr":
      return {...state, count: state.count - 1};
    case "number":
      return { ...state, count : action.nb};
    case "reset":
      return { ...state, count : 0};
  }
}


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      Counter : { state.count }
      <button onClick={ () => dispatch({type:"decr"})}>-</button>
      <button onClick={ () => dispatch({type:"incr"})}>+</button>
      <button onClick={ () => dispatch({type:"number", nb: 30})} >Mettre 30</button>
      <button onClick={ () => dispatch({type:"reset"})}>Reset</button>
    </>
  )
}

export default App
