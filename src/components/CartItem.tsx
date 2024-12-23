import { Item } from '../stores'
import { TrashIcon } from '@heroicons/react/24/outline'
import { UpdateQuantityButton } from './UpdateQuantityButton.tsx'

interface CartItemProps extends Item {
  onRemove: () => void
  onUpdateQuantity: (quantity: number) => void
}

export function CartItem({ image, title, unitaryPrice, quantity, onRemove, onUpdateQuantity }: CartItemProps) {

  return (
    <li className="flex items-center bg-gray-200 rounded-lg justify-between mb-4 p-2">
      <img
        src={image}
        alt={title}
        className="w-12 h-16 object-contain mr-3"
      />
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 flex justify-between">
          <span>{title}</span>
          <button onClick={onRemove} className="hover:text-red-600 cursor-pointer" aria-label="Remove item">
            <TrashIcon className="size-[16px]"/>
          </button>
        </h3>
        <div className="text-sm text-gray-500 flex items-center justify-between">
          <span>${unitaryPrice}</span>
          <UpdateQuantityButton quantity={quantity} onUpdateQuantity={onUpdateQuantity}/>
        </div>
      </div>
    </li>
  )
}
