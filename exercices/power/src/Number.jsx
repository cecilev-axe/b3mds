const Number = ({n, puissance}) => {
return (
    <>
        {n}<sup>{puissance}</sup> = {Math.pow(n, puissance)}
    </>
)
}

export default Number;