import {  CartAction, IActions, IState } from "./reducer.types"

export const reducer = (state: IState, action: IActions) => {
  const handlers = {
    [CartAction.INCREASE_QUANTITY]: () => {
      const productIndex = state.products.findIndex(product => product.id === action.payload.product!.id)
      const productExists = productIndex !== -1
      const hasProducts = state.products.length
      
      if(productExists){
        state.products[productIndex].quantity = action.payload.quantity
      }

      const newProducts = productExists ? state.products : [
        ...state.products, 
        { 
          ...action.payload.product, 
          quantity: action.payload.quantity
        } 
      ] 

      return {
        ...state,
        products: newProducts,

        totalQuantity: hasProducts 
        ? newProducts.reduce((accumulator, { quantity }) => accumulator + quantity, 0) 
        : action.payload.quantity,

        totalPrice: hasProducts 
        ? newProducts.reduce((accumulator, { price, quantity }) => accumulator + (price * quantity), 0) 
        : action.payload.product.price * action.payload.quantity
      }
    }
  }

  return handlers[action.type]()
}