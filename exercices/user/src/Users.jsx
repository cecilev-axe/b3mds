const Users = ({users}) => {
//sert uniquement à l'affichage

    return(
        <ul>
            {users.map((u, i) => <li key={i}>{u}</li>)}
        </ul>
    )
}

export default Users