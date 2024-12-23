import { useCartStore } from '../stores'
import { EmptyCart } from './EmptyCart.tsx'
import { CartItem } from './CartItem.tsx'

export function CartItemList() {

  const items = useCartStore(state => state.items)
  const removeItem = useCartStore(state => state.removeItem)
  const updateQuantity = useCartStore(state => state.updateQuantity)

  const totalItems = items.length

  return (
    totalItems === 0 ? <EmptyCart/> :
      <ul className="flex-1 overflow-y-auto">
        {
          items.map((item) => <CartItem
            key={item.refId}
            {...item}
            onRemove={() => removeItem(item)}
            onUpdateQuantity={(quantity) => updateQuantity(item.refId, quantity)}
          />)
        }
      </ul>
  )
}
