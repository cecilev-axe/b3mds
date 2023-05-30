import { useEffect, useReducer } from "react"

const initialState = {
    number: "",
    message: "", 
    min: 1,
    max: 100,
    count: 0
}

const reducer = (state, action) => {
    switch(action.type){
        case "updateNumber":
            return {...state, number: action.nb};
        case 'updateMin':
            return {...state, min: state.number};
        case 'updateMax':
            return {...state, max: state.number};
        case "updateMessage":
            return {...state, message: "Bravo, vous avez trouvé en "+state.count+"essais"};
        case "incrCount":
            return {...state, count : state.count +1};
        default:
            return state;

    }
}


const Form = ({random}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect( () => {
        dispatch({type:"incrCount"});
    }, [state.min, state.max, state.message])


    const valid = () => {
        if(parseInt(state.number) === random){
            dispatch({type:"updateMessage"});
        }
        else if(parseInt(state.number) <= random){
           
            dispatch({type:"updateMin"});
        }
        else if(parseInt(state.number) >= random){
           
            dispatch({type:"updateMax"});

        }

        dispatch({type:"updateNumber", nb: ""});
    }

   return(
        <>
            <input type="number" value={state.number}  onChange={(e) => dispatch({type:"updateNumber", nb: e.target.value} )}/>
            <button onClick={valid}>OK</button>
            <p>{state.message}</p>
            <p>
            Le nombre doit être compris entre {state.min} et {state.max}
            </p>
        </>
   )
}


export default Form;