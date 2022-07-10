import {FiShoppingCart} from 'react-icons/fi'
import { useCart } from '../../contexts/CartContext'

export const Header = () => {
  const { state } = useCart()

  return (
    <header className='flex justify-between p-8'>
      <span>Coffe Delivery</span>
      <div className='relative bg-orange-200 p-3 rounded-lg'>
        <FiShoppingCart size={30} />
        <p className='absolute right-1 bottom-8 text-red-500'>{state.totalQuantity}</p>
      </div>
    </header>
  )
}