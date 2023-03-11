import { NavLink } from "react-router-dom";

export default function Navbar() {
    const setActiveClass = ({ isActive }) => (isActive ? "active text-white ms-3" : "text-white ms-3");
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-primary">

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
            <NavLink className={ setActiveClass } to="/">
                Home
            </NavLink>
            {"-"}
            <NavLink className={ setActiveClass } to="/Pokemones">
                Pokemones
            </NavLink>
            </ul>
        </div>
        </nav>
        /* <nav className="navbar navbar-expand-lg navbar-light bg-success">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto">
                    <Link to="/" className="text-white ms-3 text-decoration-none">
                        Home
                    </Link>
                    <Link to="/Pokemones" className="text-white ms-3 text-decoration-none">
                    Pokemones
                    </Link>
                </ul>
            </div>
        </nav> */

    )
}