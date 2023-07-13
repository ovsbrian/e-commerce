import { useEffect, useReducer } from "react";
import { CartContext } from "./ContextCart";

const CART_STATE_KEY = "cartState";
const initialState = JSON.parse(localStorage.getItem(CART_STATE_KEY)) || {
  cart: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM":
      // Verifica si el producto ya está en el carrito
      const itemIndex = state.cart.findIndex((item) => item.id === action.item.id);
      if (itemIndex !== -1) {
        // Si el producto ya está en el carrito, actualiza su cantidad
        return {
          ...state,
          cart: state.cart.map((item, index) => {
            if (index === itemIndex) {
              return { ...item, quantity: item.quantity + action.quantity };
            } else {
              return item;
            }
          }),
        };
      } else {
        // Si el producto no está en el carrito, agrégalo con la cantidad especificada
        return {
          ...state,
          cart: [...state.cart, { ...action.item, quantity: action.quantity }],
        };
      }
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.id),
      };
    case "CALCULATE_TOTAL":
      return {
        ...state,
        total: state.cart.reduce(
          (total, item) => total + item.price * item.quantity,
          0
        ),
      };
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Guarda el estado del carrito de compras en el localStorage cada vez que se actualice
  useEffect(() => {
    localStorage.setItem(CART_STATE_KEY, JSON.stringify(state));
  }, [state]);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
