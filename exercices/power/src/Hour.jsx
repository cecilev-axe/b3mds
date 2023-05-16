import { useState } from "react";

const Hour = () => {

    const [today, setToday] = useState(new Date())

    setTimeout(() => {
        setToday(new Date())
    }, 1000)


    return (
        <>
        {today.toLocaleTimeString()}
        </>
    )
}

export default Hour;