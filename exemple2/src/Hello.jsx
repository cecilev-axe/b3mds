


const Hello = ({prenom, nom, reclic}) => {

    const sayHello = () => {
        alert(`Bonjour ${prenom} ${nom}`)
    }

    return(
        <>
            <h1 className='red'>Hello {prenom} {nom}</h1>
            <button onClick={sayHello}>Clique sur moi !!!</button>
            <button onClick={() => {
                alert("tu as encore cliqué !!!!")
            }}>Clique encore !!</button>
            <button onClick={reclic}>Reclique</button>
        </>
    )
}

export default Hello;