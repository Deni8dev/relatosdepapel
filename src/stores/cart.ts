import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface Item {
  refId: string
  title: string
  unitaryPrice: number
  quantity: number
  image: string
}

interface CartStoreState {
  items: Item[]
  addItem: (item: Item) => void
  removeItem: (item: Item) => void
  updateQuantity: (refIf: string, quantity: number) => void
  clear: () => void
}

export const useCartStore = create<CartStoreState>()(
  persist((setState, getState) => {
      return {
        items: [],
        addItem: (item: Item) => {
          const { items: storedItems } = getState()

          const found = storedItems.findIndex(it => it.refId === item.refId)
          let items
          if (found >= 0) {
            const newItem = {
              ...storedItems[found],
              quantity: storedItems[found].quantity + 1
            }
            items = storedItems.with(found, newItem)
          } else
            items = [...storedItems, item]

          setState({ items })
        },
        removeItem: (item: Item) => {
          const { items: storedItems } = getState()
          const items = storedItems.filter(it => it.refId !== item.refId)

          setState({ items })
        },
        updateQuantity: (refIf: string, quantity: number) => {
          const { items: storedItems } = getState()
          const index = storedItems.findIndex(it => it.refId === refIf)
          const items = quantity <= 0
            ? storedItems.filter(it => it.refId !== refIf)
            : storedItems.with(index, { ...storedItems[index], quantity })

          setState({ items })
        },
        clear: () => setState({ items: [] })
      }
    },
    { name: 'cart' }
  )
)
