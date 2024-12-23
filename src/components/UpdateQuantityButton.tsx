import { MinusIcon, PlusIcon } from '@heroicons/react/16/solid'

interface AddToCartButtonProps {
  quantity: number
  onUpdateQuantity: (quantity: number) => void
}

export function UpdateQuantityButton({ quantity, onUpdateQuantity }: AddToCartButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => onUpdateQuantity(quantity - 1)}
        className="p-1 bg-gray-200 rounded hover:bg-gray-300 transition"
      >
        <MinusIcon className="w-4 h-4 text-gray-600"/>
      </button>
      <span className="text-gray-700 font-medium">{quantity}</span>
      <button
        onClick={() => onUpdateQuantity(quantity + 1)}
        className="p-1 bg-gray-200 rounded hover:bg-gray-300 transition"
      >
        <PlusIcon className="w-4 h-4 text-gray-600"/>
      </button>
    </div>
  )
}
