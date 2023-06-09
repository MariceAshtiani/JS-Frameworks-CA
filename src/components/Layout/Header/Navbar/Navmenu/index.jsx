import StyledMenu from "./styled";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavMenu() {
    const [showMenu, setShowMenu] = useState(false);

    return (
        <StyledMenu onClick={() => setShowMenu(!showMenu)}>
            {showMenu ? <FaTimes /> : <FaBars />}
            {showMenu && (
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Contact">Contact</Link>
                    </li>
                    <li>
                        <Link to="/Cart">Cart</Link>
                    </li>
                </ul>
            )}
        </StyledMenu>
    );
};
