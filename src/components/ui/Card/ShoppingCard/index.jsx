import { FaTrash } from "react-icons/fa";
import { useContext } from "react";

import { ShoppingCartCard } from "./styled";
import { ShoppingCartContext } from "../../../Context";
import { SmallBtn } from "../../Buttons/styled";

export default function ShoppingCard({ item }) {
    const GlobalState = useContext(ShoppingCartContext);
    const dispatch = GlobalState.dispatch;

    return (
        <ShoppingCartCard key={item.id} className="card">
            <h3>{item.title}</h3>
            <div className="product-info">
                <div className="img-wrapper">
                    <img src={item.imageUrl} alt={item.title}></img>
                </div>
                <div> NOK {item.price}</div>
            </div>
            <div className="qty-wrapper">
            <FaTrash
                className="bin"
                aria-label="Delete item"
                onClick={() => dispatch({ type: "Remove", payload: item })}
                />
                <div className="qty-wrapper">
                    <SmallBtn
                    onClick={() => {
                        if (item.quantity > 1) {
                            dispatch({ type: "Decrease", payload: item});
                        } else {
                            dispatch({ type: "Remove", payload: item});
                        }
                    }}
                    aria-label="Decrease by one"
                    >
                        -
                    </SmallBtn>
                    Qty: {item.quantity}
                    <SmallBtn
                    onClick={() => dispatch({ type: "Increase", payload: item })}
                    aria-label="Increase by one"
                    >
                        +
                    </SmallBtn>
                </div>
                
            </div>
        </ShoppingCartCard>
    );
};