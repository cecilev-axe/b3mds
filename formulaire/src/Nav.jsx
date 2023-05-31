import { NavLink } from "react-router-dom";

const Nav = () => {

    const checkIsActive = ({isActive}) => {
        return{
            display:"block",
            margin:"10px",
            color: isActive ? "orange" : "black"
        }
    }

    return(
        <nav>
            <ul style={{ listStyleType: "none", display: "flex" }}>
                <li>
                    <NavLink to="/form" style={checkIsActive}>
                        Formulaire
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/effect" style={checkIsActive}>
                        Exemple UseEffect
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}



export default Nav;