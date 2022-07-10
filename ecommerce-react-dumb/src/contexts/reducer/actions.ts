import { IProduct } from "../../types/IProduct"
import { CartAction } from "./reducer.types"

export const addProductToCart = (product: IProduct, quantity: number) => ({
  type: CartAction.INCREASE_QUANTITY,
  payload: {
    product,
    quantity,
  }
})