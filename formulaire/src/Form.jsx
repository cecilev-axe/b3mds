import { useState, useRef } from "react"


const Form = () => {

    const [prenom, setPrenom] = useState("")
    const [nom, setNom] = useState("")
    const [message, setMessage] = useState("")
    const [pays, setPays] = useState("")

    const age = useRef()

    const handleChange = (e) => {
        setNom(e.target.value)
    }

    const envoyer = () => {
        let datas = {
            "age" : age.current.value,
            "nom" : nom,
            "prenom" : prenom
        }

        console.log(datas)
    }

    return(
        <form>
            <div>
                <label htmlFor="prenom">Prénom</label>
                <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="nom">Nom</label>
                <input type="text" id="nom" value={nom} onChange={handleChange}/>
            </div>

            <div>
                <label htmlFor="age">Age</label>
                <input type="text" id="age" ref={age}/>
            </div>

            <div>
                <label htmlFor="message">Message</label>
                <textarea type="text" id="message" value={message} onChange={(e) => setMessage(e.target.value)}/>
            </div>

            <div>
                <label htmlFor="pays">Pays</label>
                <select value={pays} onChange={(e) => {
                    setPays(e.target.value)
                }}>
                    <option value="fr">France</option>
                    <option value="be">Belgique</option>
                    <option value="zi">Zimbabwé</option>
                </select>
            </div>

            <button type="button" onClick={envoyer}>Soumettre</button>
            
        </form>
    )
}

export default Form