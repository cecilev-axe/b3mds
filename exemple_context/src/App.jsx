import { useContext } from 'react';
import { CountContext } from './provider';
import Button from './components/Button';

function App() {

  const [state, dispatch] = useContext(CountContext);

  return (
    <div style={{ marginLeft: "20px"}}>
    <p>Test</p>
      { state.count }
      <Button />
    </div>
  )
}

export default App
