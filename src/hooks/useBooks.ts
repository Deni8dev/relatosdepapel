import { useContext, useEffect, useState } from 'react'
import { listOfBooks } from '../data/books.ts'
import { Book } from '../types'
import { FilterContext } from '../context'

export function useBooks() {

  const [books, setBooks] = useState<Book[]>([])
  const { text } = useContext(FilterContext)!

  useEffect(() => {
    setBooks(listOfBooks(text))
  }, [text])

  return { books }
}
