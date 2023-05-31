import Form from './Form'
import './App.css'
import Effect from './Effect'
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Nav from './Nav';
import NotFound from './NotFound';

function App() {

  return (
    <>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path="/form" element={<Form />}/>
          <Route path="/effect/:id" element={<Effect />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
