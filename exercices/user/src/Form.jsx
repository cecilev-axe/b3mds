import { useState, useRef } from "react"


const Form = ({users, setUsers}) => {

    const [message, setMessage] = useState("")
    const inputRef = useRef(null)

    const addUser = () => {
        //récupérer la valeur qui est dans l'input
        const name = inputRef.current.value.toUpperCase();
        setMessage("")

        //vérifier qu'elle n'est pas vide
        //vérifier qu'elle n'existe pas déjà
        if(name.trim() !== "" && !users.includes(name)){
            //si ok, alors on l'ajoute à users
            const updateUser = [...users, name]
            setUsers(updateUser)

            //vider l'input 
            name.current.value = ""
        }
        else{
            //message d'erreur
            setMessage("Utilisateur incorrect ou doublon")
        }
    }

    return(
        <form>

            <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" ref={inputRef}/>
            </div>

            <button type="button" onClick={addUser}>Ajouter</button>

            {
                message && <p>{message}</p>
            }
            
        </form>
    )
}

export default Form