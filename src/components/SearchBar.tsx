import { ChangeEvent, useContext } from 'react'
import { FilterContext } from '../context'

export function SearchBar() {

  const { text, setText } = useContext(FilterContext)!

  // ToDo: @Denilson, useDebounce() to reduce re-rendering charges
  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    console.log(value)
    setText(value)
  }

  return (
    <div className="max-w-lg mx-auto my-10">
      <input type="text" id="searchInput"
             value={text}
             className="p-3 w-full z-20 text-md text-gray-900 bg-gray-50 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
             placeholder="Search Books"
             onChange={onSearchChange}/>
    </div>
  )
}
