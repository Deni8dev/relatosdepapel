import { ReactNode, useState } from 'react'
import { FilterContext } from './filterContext.ts'

export interface FilterState {
  text: string
}

const INITIAL_STATE = { text: '' }

export function FilterProvider({ children }: { children: ReactNode }) {

  const [filter, setFilter] = useState<FilterState>(INITIAL_STATE)

  const setText = (text: string) => {
    setFilter((prev) => ({
      ...prev, text
    }))
  }

  return (
    <FilterContext.Provider value={{ text: filter.text, setText }}>
      {children}
    </FilterContext.Provider>
  )
}
