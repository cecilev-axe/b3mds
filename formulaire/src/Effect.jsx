import { useState } from "react"
import { useEffect } from "react"

const Effect = () => {
    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(1)

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
            <button onClick={() => setCount1(count1 + 1)}>Click 1</button>
            <button onClick={() => setCount2(count2 + 1)}>Click 2</button>
        </>
    )
}

export default Effect