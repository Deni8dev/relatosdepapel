import { useCartStore } from '../stores'

export function CartTotalPrice() {

  const items = useCartStore(state => state.items)

  const totalPrice = items
    .map(({ unitaryPrice, quantity }) => unitaryPrice * quantity)
    .reduce((sum, priceByItem) => sum + priceByItem, 0)
    .toFixed(2)

  return (
    <div className="mt-6 text-lg font-bold text-gray-700">
      Total: <span className="text-orange-500">${totalPrice}</span>
    </div>
  )
}
