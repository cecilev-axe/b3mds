//générer une liste de nombre
const Numbers = ({numbers}) => {

   
    return(
        <ul>
            { numbers.map((number, i) => <li key={i}>{number}</li>)}
        </ul>
    )
}

export default Numbers