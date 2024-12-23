import { useCartStore } from '../stores'
import { useNavigate } from 'react-router'
import { CartTotalPrice } from './CartTotalPrice.tsx'

export function CartFooter() {

  const items = useCartStore(state => state.items)
  const clearCart = useCartStore(state => state.clear)

  const navigate = useNavigate()

  const totalItems = items.length

  return (
    totalItems > 0 && (
      <div className="mt-4">
        <CartTotalPrice/>
        <button
          onClick={() => void navigate('/shopping/checkout')}
          className="w-full bg-orange-500 text-white py-2 rounded-lg mb-2 hover:bg-orange-600"
        >
          Checkout
        </button>
        <button
          onClick={clearCart}
          className="w-full bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300"
        >
          Clear Cart
        </button>
      </div>
    )
  )
}
