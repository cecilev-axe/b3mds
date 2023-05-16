import Number from "./Number";

const Power = () => {
    const numbers = [1, 2, 3, 4, 5];

    return (
        <ul>
            <li>
                {numbers.map((n, i) => <li key={i}><Number n={n} puissance={5} /></li>)}
            </li>
        </ul>
    )
}

export default Power;