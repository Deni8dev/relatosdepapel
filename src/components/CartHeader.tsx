import { XMarkIcon } from '@heroicons/react/24/outline'

interface CartHeaderProps {
  toggleCart: () => void
}

export function CartHeader({ toggleCart }: CartHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <h2 className="text-2xl font-bold text-orange-600">Your Cart</h2>
      <button
        onClick={toggleCart}
        className="text-gray-600 hover:text-gray-900 transition duration-200"
        aria-label='Close cart'
      >
        <XMarkIcon className="w-6 h-6"/>
      </button>
    </div>
  )
}
