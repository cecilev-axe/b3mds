import styled from 'styled-components';



const Button = ({number, dispatch}) => {
    
    const Butt = styled.button`
        background-color:grey;
        width:30%;
        margin:5px;
        font-size:1.2em;
    `

    
    const handleClick = () => {
        dispatch({type:"SET_NUMBER", number:number})
    }
    
    return(
        <Butt onClick={handleClick}>{number}</Butt>
    )
}

export default Button;