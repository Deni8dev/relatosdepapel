import { Route, Routes } from 'react-router'
import LandingPage from './pages/LandingPage.tsx'
import { ShoppingPage } from './pages/ShoppingPage.tsx'
import { BookPage } from './pages/BookPage.tsx'
import { CheckoutPage } from './pages/CheckoutPage.tsx'
import { Toaster } from 'sonner'
import { RouteNotFoundPage } from './pages/RouteNotFoundPage.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route index element={<LandingPage/>}/>
        <Route path="shopping">
          <Route index element={<ShoppingPage/>}/>
          <Route path="book/:slug" element={<BookPage/>}/>
          <Route path="checkout" element={<CheckoutPage/>}/>
        </Route>
        <Route path="*" element={<RouteNotFoundPage/>}/>
      </Routes>
      <Toaster position="top-right"/>
    </>
  )
}

export default App
