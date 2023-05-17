import { useState } from "react"
import Numbers from "./Numbers"


const Form = ({count}) => {

    const [number, setNumber] = useState(1)
    const [limite, setLimite] = useState(100)

    const handleChange = (e) => {

        //on est dans la liste select
        if(e.target.id === "nombres"){
            setNumber(Number(e.target.value))
        }
        else if(e.target.id === "limite"){
            setLimite(Number(e.target.value))
        }
    }

    const multiples = (n, l) => {
        const m = []
        
        for(let i = n ; i < l ; i += n){
            m.push(i)
        }

        return m
        //doit retourner l'ensemble des multiples d'un nombre
    }

    return(
        <form>
            <div>
                <label htmlFor="nombres">Nombre à multiplier</label>
                <select id="nombres" onChange={handleChange} value={number}>
                    {new Array(count).fill(null).map((n, i) => <option key={i}>{i+1}</option>)}
                </select>
            </div>

            <div>
                <label htmlFor="limite">Limite</label>
                <input id="limite" type="number" value={limite} onChange={handleChange}/> 
            </div>

            <Numbers numbers={multiples(number, limite)} />

        </form>
    )
}

export default Form