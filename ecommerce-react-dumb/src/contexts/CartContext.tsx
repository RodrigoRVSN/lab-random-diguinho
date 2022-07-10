import { createContext, Dispatch, ReactNode, useContext, useReducer } from "react";
import { initialValues } from "./initialValues";
import { reducer } from "./reducer";
import { IActions, IState } from "./reducer/reducer.types";

interface IContext {
  state: IState;
  dispatch: Dispatch<IActions>
}

export const CartContext = createContext({} as IContext)

interface ICartProvider {
  children: ReactNode
}

export const CartProvider = ({ children }: ICartProvider) => {
  const [state, dispatch] = useReducer(reducer, initialValues)

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const hook = useContext(CartContext)

  return hook
}