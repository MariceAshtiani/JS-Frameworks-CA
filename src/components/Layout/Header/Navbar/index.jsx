import NavMenu from "./Navmenu";
import ShoppingCart from "./Carticon";
import StyledNav from "./styled";

export default function NavBar() {
    return (
        <StyledNav>
            <ShoppingCart />
            <NavMenu />
        </StyledNav>
    );
};