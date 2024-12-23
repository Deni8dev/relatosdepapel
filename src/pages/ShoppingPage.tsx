import { FilterProvider } from '../context'
import { Cart } from '../components/Cart.tsx'
import { SearchBar } from '../components/SearchBar.tsx'
import { BookList } from '../components/BookList.tsx'
import { Header } from '../components/Header.tsx'

export function ShoppingPage() {

  return (
    <>
      <Header/>

      <FilterProvider>
        <Cart/>
        <SearchBar/>
        <BookList/>
      </FilterProvider>
    </>
  )
}
