import { useContext } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { ShoppingCartContext } from "../../Context";
import StyledCart from "./styled";
import ShoppingCard from "../Card/ShoppingCard";
import BasicButton from "../Buttons/styled";
import FormatPrice from "../../../utils/Price";
import CheckoutProducts from "../Card/CheckoutCard";

export default function Cart() {
    const location = useLocation();
    const GlobalState = useContext(ShoppingCartContext);
    const state = GlobalState.state || [];
    const total = state.total || 0;

    const cartItems = state.item.map((item) => {
        return <ShoppingCard key={item.id} item={item} />;
    });

    const checkoutItems = state.item.map((item) => {
        return <CheckoutProducts key={item.id} item={item} />;
    });

    return (
        <div>
            {total > 0 ? (
                <StyledCart>
                    {location.pathname === "/Cart" ? (
                        <div className="cart-wrapper">
                            {cartItems}
                            <div className="total"> Total : {FormatPrice(total)}</div>
                            <p className="shipping"> *Free shipping</p>
                            <Link to="/Checkout">
                                <BasicButton>Checkout</BasicButton>
                            </Link>
                        </div>
                    ) : (
                        <div className="cart-wrapper">
                            {checkoutItems}
                            <div className="total">Total : {FormatPrice(total)}</div>
                            <p className="shipping">*Free shipping</p>
                        </div>
                    )}
                </StyledCart>
            ) : (
                <h2>No items in the cart</h2>
            )}
        </div>
    );
};