import StyledCart from "./styled";
import { ShoppingCartContext } from "../../../../Context";

import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext } from "react";


export default function ShoppingCart() {
    const GlobalState = useContext(ShoppingCartContext);
    const state = GlobalState.state || [];
    const numberOfItems = state.item.length;

    return (
        <StyledCart>
            <Link to="/Cart" aria-label="See cart">
                <FaShoppingCart />
                {numberOfItems > 0 && <span>{numberOfItems}</span>}
            </Link>
        </StyledCart>
    );
};
