import { useState } from "react"

const Slider = () => {

    const [index, setIndex] = useState(0)
    const [play, setPlay] = useState(true)

    let timer = null

    const next = () => {
        clearTimeout(timer)
        //incrémenter l'index
        if(index < images.length - 1){
            setIndex(index+1)
        }
        else{
            setIndex(0)
        }
    }

    const previous = () => {
        clearTimeout(timer)
        //incrémenter l'index
        if(index === 0){
            setIndex(images.length - 1)
        }
        else{
            setIndex(index - 1)
        }
    }

    const pause = () => {
        clearTimeout(timer)
        setPlay(false)
    }

    if(play){
        timer = setTimeout(() => {
           next()
        }, 3000)
    }

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
         <>
            <figure>
                <img src={images[index].src} />
                <figcaption>{images[index].description}</figcaption>
            </figure>
            <button onClick={previous}>Previous</button>
            <button onClick={next}>Next</button>

            {
                play ?
                <button onClick={pause}>Pause</button>
                :
                <button onClick={() => setPlay(true)}>Play</button>
            }
        </>

    )
}

export default Slider