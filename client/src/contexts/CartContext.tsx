import React, {
  createContext,
  Dispatch,
  useContext,
  useReducer,
  useState,
} from "react";
import { Cart } from "../types";

type CartState = Cart[];

const CartStateContext = createContext<CartState | undefined>(undefined);

type Action = { type: "CREATE"; item: Cart } | { type: "REMOVE"; id: number };

type CartDispatch = Dispatch<Action>;
const CartDispatchContext = createContext<CartDispatch | undefined>(undefined);

function cartReducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "CREATE":
      const nextId = Math.max(...state.map((cart) => cart.id)) + 1;
      return state.concat({
        id: nextId,
        product: action.item.product,
        option: action.item.option,
        quantity: action.item.quantity,
      });
    case "REMOVE":
      return state.filter((cart) => cart.id !== action.id);
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
