import { ShoppingCartIcon } from '@heroicons/react/24/outline'

export function EmptyCart() {
  return (
    <div className='flex flex-col items-center justify-center h-full text-gray-600' aria-label='Empty cart'>
      <ShoppingCartIcon className="w-16 h-16 text-gray-300 mb-4"/>
      <h2 className="text-2xl font-bold text-gray-700 mb-2">Your Cart is Empty</h2>
      <p className="text-gray-500 text-sm text-center">
        Browse our collection and add some amazing books to your cart!
      </p>
    </div>
  )
}
