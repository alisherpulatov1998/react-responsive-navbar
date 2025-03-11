import { useState } from "react";
import "./navbar.css";
import {Link, NavLink} from "react-router-dom";



function Navbar () {

    const [openMenu, setOpenMenu] = useState(false);

    return (

        <nav>

            <Link to="/" className="webTitle">Sayt-Logosi</Link>

            <div className="hamMenu" onClick={() => {
                setOpenMenu(!openMenu);
            }}>

                <span></span>
                <span></span>
                <span></span>

            </div>

            <ul className={openMenu && "open"}>

                <li>
                    <NavLink to="/haqimizda">Haqimizda</NavLink>
                </li>

                <li>
                    <NavLink to="/xizmatlar">Xizmatlarimiz</NavLink>
                </li>

                <li>
                    <NavLink to="/boglanish">Bog'lanish</NavLink>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar;