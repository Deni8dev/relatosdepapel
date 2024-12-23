import { Book as BookData } from '../types'
import { BookRating } from './BookRating.tsx'
import { Link } from 'react-router'
import { useCartStore } from '../stores'

export function Book(book: BookData) {

  const addItem = useCartStore(store => store.addItem)

  const { slug, details } = book
  const { title, author, rating, price } = details
  const image = `/${slug}.jpg`

  const addBookToCart = () => {
    addItem({ refId: book.slug, title, unitaryPrice: price, quantity: 1, image })
  }

  return (
    <div
      className="w-full h-full bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col">
      <div className="w-full h-56 bg-gray-200 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-contain py-2"
        />
      </div>
      <div className="p-4 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-orange-600">
          <Link to={`/shopping/book/${slug}`} className="hover:underline">{title}</Link>
        </h2>
        <p className="text-gray-700 mt-1">{author}</p>
        <BookRating value={rating} />
        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-semibold text-orange-500">
            ${price}
          </span>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
            onClick={addBookToCart}>
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}
