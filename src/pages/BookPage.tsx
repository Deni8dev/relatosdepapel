import { BookRating } from '../components/BookRating.tsx'
import { Link, useParams } from 'react-router'
import { findBookBySlug } from '../data/books.ts'
import { Cart } from '../components/Cart.tsx'
import { BookDescription } from '../components/BookDescription.tsx'
import { useCartStore } from '../stores'

export function BookPage() {

  const addItem = useCartStore(store => store.addItem)

  const { slug } = useParams()
  const { details } = findBookBySlug(slug!)!
  const { title, author, rating, price, description } = details
  const image = `/${slug}.jpg`

  const addBookToCart = () => {
    addItem({ refId: slug!, title, unitaryPrice: price, quantity: 1, image })
  }

  return (
    <div className='min-h-screen bg-gray-100 p-6'>
      <div className="flex gap-12 justify-center flex-col lg:flex-row lg:mt-20">
        <Cart/>

        <aside className="flex flex-col items-center gap-4">
          <img className="rounded w-72 h-auto shadow-2xl" src={`/${slug}.jpg`} alt={title}/>
          <p className="text-gray-700 mt-1">{author}</p>
          <div className="text-lg font-semibold text-orange-500">
            ${price}
          </div>
          <button
            className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
            onClick={addBookToCart}>
            Add to Cart
          </button>
          <Link to="/shopping" className="hover:underline opacity-70">⮪ Back to Store</Link>
        </aside>
        <main className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">
            {title}
          </h1>
          <BookRating value={rating}/>
          <BookDescription description={description}/>
        </main>
      </div>
    </div>
  )
}
