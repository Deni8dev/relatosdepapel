import { createContext } from 'react'

export interface FilterContextValue {
  text: string
  setText: (text: string) => void
}

export const FilterContext = createContext<FilterContextValue | null>(null)
