import { ShoppingCartIcon } from '@heroicons/react/24/outline'
import { CartItemsCount } from './CartItemsCount.tsx'

interface CartIconProps {
  toggleCart: () => void
}

export function CartIcon({ toggleCart }: CartIconProps) {

  return (
    <div
      onClick={toggleCart}
      className='fixed top-4 right-4 z-50 bg-orange-500 text-white p-3 rounded-full shadow-lg cursor-pointer hover:bg-orange-600 flex items-center justify-center'
      aria-label='Cart icon'
    >
      <ShoppingCartIcon className='w-6 h-6'/>
      <CartItemsCount/>
    </div>
  )
}
