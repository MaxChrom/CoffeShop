import { createContext, useContext } from "react";

//create cart context
export const CartContext = createContext();

//create custom hook which will return the values  from Cart context
export function useCart() {
    return useContext(CartContext);
}
