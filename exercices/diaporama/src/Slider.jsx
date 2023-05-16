import { useState } from "react"

const Slider = () => {

    const [index, setIndex] = useState(0)

    const next = () => {
        //incrémenter l'index
        if(index < images.length - 1){
            setIndex(index+1)
        }
        else{
            setIndex(0)
        }
    }

    setTimeout(() => {
       next()
    }, 3000)

    const images = [
        {
            src:"statue-link-zelda-tears-of-the-kingdom.webp",
            description: "Statue Link"
        },
        {
            src:"The-Legend-of-Zelda-Tears-of-The-Kingdom-1481413.jpg",
            description: "Tears of the kingdom"
        },
        {
            src:"zelda_tears_kingdom_BA_big__w770.jpg",
            description: "blabla"
        },
    ]


    return(
         
            <figure>
                <img src={images[index].src} />
                <figcaption>{images[index].description}</figcaption>
            </figure>
        

    )
}

export default Slider