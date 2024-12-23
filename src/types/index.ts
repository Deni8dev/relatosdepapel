export interface BookDetails {
  title: string
  author: string
  description: string
  rating: number
  price: number
}

export interface Book {
  slug: string
  details: BookDetails
}
