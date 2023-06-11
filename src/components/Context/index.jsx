import shoppingCartReducer from "./Redux";
import { useState, useEffect, useReducer, createContext } from "react";

export const ShoppingCartContext = createContext();
export const QueryContext = createContext();

export const Context = (props) => {
    const startingCartState = {
        item: [],
        total: 0,
    };
    const [query, setQuery] = useState([]);
    const [state, dispatch] = useReducer(shoppingCartReducer, startingCartState, () => {
        const localData = localStorage.getItem("cart");
        return localData ? JSON.parse(localData) : startingCartState;
        }
    );

    // Save cart-items to local storage when cart gets updated
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(state));
    }, [state]);

    return (
        <ShoppingCartContext.Provider value={{ state, dispatch }}>
            <QueryContext.Provider value={{ query, setQuery }}>
                {props.children}
            </QueryContext.Provider>
        </ShoppingCartContext.Provider>
    );
};