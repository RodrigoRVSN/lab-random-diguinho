import { IProduct } from "../../types/IProduct";
import { initialValues } from "../initialValues";

export enum CartAction {
  INCREASE_QUANTITY = 'INCREASE_QUANTITY', 
}

interface IPayload {
  product: IProduct
  quantity: number
}

export interface IActions {
  type: CartAction;
  payload: IPayload
}

export type IState = typeof initialValues