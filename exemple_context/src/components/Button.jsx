import { useContext } from 'react';
import { CountContext } from '../provider';

const Button = () => {

  const [state, dispatch] = useContext(CountContext);

    return(
        <button onClick={() => {
            dispatch({ type: "ADD" });
        }} >Ajouter</button>
    )
}

export default Button;