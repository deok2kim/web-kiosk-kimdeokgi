import React, { createContext, Dispatch, useContext, useReducer } from "react";
import { Cart } from "../types";

type CartState = Cart[];

const CartStateContext = createContext<CartState | undefined>(undefined);

type Action =
  | { type: "CREATE"; item: Cart }
  | { type: "REMOVE"; id: number }
  | { type: "INIT" };

type CartDispatch = Dispatch<Action>;
const CartDispatchContext = createContext<CartDispatch | undefined>(undefined);

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "CREATE":
      return state
        .map((s, idx) => ({ ...s, id: idx }))
        .concat({
          id: state.length + 1,
          product: action.item.product,
          option: action.item.option,
          quantity: action.item.quantity,
        });
    case "REMOVE":
      return state.filter((cart) => cart.id !== action.id);
    case "INIT":
      return [];
    default:
      throw new Error(`Unhandled Action`);
  }
}

export function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, dispatch] = useReducer(cartReducer, []);

  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={cart}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export function useCartState() {
  const state = useContext(CartStateContext);
  if (!state) throw new Error("CartProvider Not Found");
  return state;
}

export function useCartDispatch() {
  const dispatch = useContext(CartDispatchContext);
  if (!dispatch) throw new Error(`CartProvider Not Found`);
  return dispatch;
}
