import { useCartStore } from '../stores'
import { useEffect, useState } from 'react'

export function CartItemsCount() {

  const items = useCartStore(state => state.items)
  const [animate, setAnimate] = useState(false)

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0)

  useEffect(() => {
    setAnimate(true)
    const timer = setTimeout(() => setAnimate(false), 1000)
    return () => clearTimeout(timer)
  }, [items])

  return (
    <span aria-label='Cart items count'
          className={`absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full px-2 ${
            animate ? 'animate-ping' : ''
          }`}>
      {totalItems}
    </span>
  )
}
