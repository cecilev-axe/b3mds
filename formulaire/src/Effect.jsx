import { useState } from "react"
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const Effect = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(1)

    const contact = () => {
        //redirige vers le formulaire
        navigate("/form");
    }

    //on exécute un code au chargement du composant
    useEffect(() => {
        console.log("chargement");
    }, [])

    //ce code se lance au chargement ET à chaque rafraichissement du composant
    useEffect(() => {
        console.log("chargement + rafraichissement");
    })

    //au chargement et à la mise à jour de count1
    useEffect(() => {
        console.log("chargement + count1");
    }, [count1])

    return(
        <>
            {id}
            <button onClick={() => setCount1(count1 + 1)}>Click 1</button>
            <button onClick={() => setCount2(count2 + 1)}>Click 2</button>
            <button onClick={contact}>Contactez-nous</button>
        </>
    )
}

export default Effect