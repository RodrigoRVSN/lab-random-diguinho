import { FiPlus, FiMinus, FiShoppingCart } from 'react-icons/fi'
import { useState } from "react"
import { IProduct } from '../../../../types/IProduct'
import { useCart } from '../../../../contexts/CartContext'
import { addProductToCart } from '../../../../contexts/reducer/actions'

interface ICard {
  product: IProduct
}

export const Card = ({ product }: ICard) => {
  const { state, dispatch } = useCart()
  const [quantity, setQuantity] = useState(0)
  const isMinusDisabled = quantity === 0

  const addQuantity = () => {
    setQuantity(prevState => prevState + 1)
  }

  const minusQuantity = () => {
    setQuantity(prevState => prevState - 1)
  }

  const addToCart = () => {
    dispatch(addProductToCart(product, quantity))
  }

  return ( 
    <div className="bg-gray-300 p-6 flex flex-col text-center rounded-md">
      <img src={product.image}/>
      <h1 className="text-lg"><strong>{product.name}</strong></h1>
      <p className="text-slate-500">{product.description}</p>

      <div className="flex justify-between items-center mt-5">
        <p>R$ <span>{product.price.toFixed(2)}</span></p>

        <div className="flex gap-5 items-center rounded-lg p-2 bg-slate-400">
          <button onClick={minusQuantity} disabled={isMinusDisabled}>
            <FiMinus />
          </button>
          <span>{quantity}</span>
          <button onClick={addQuantity}>
            <FiPlus />
          </button>
        </div>

        <button onClick={addToCart} className="bg-purple-700 p-3 rounded-md">
          <FiShoppingCart />
        </button>
      </div>
    </div>
  )
}