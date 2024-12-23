import { useBooks } from '../hooks/useBooks.ts'
import { Book } from './Book.tsx'

export function BookList() {

  const { books } = useBooks()

  return (
    <section aria-label="Books">
      <div className="px-4 mx-auto max-w-screen-xl my-10">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {
            books.map(({ slug, details }) =>
              <Book
                key={slug}
                slug={slug}
                details={details}
              />
            )
          }
        </div>
      </div>
    </section>
  )
}
