import { useState } from 'react'
import { CartIcon } from './CartIcon.tsx'
import { CartHeader } from './CartHeader.tsx'
import { CartItemList } from './CartItemList.tsx'
import { CartFooter } from './CartFooter.tsx'

export function Cart() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleCart = () => setIsOpen(!isOpen)

  return (
    <div className="relative">

      {!isOpen && <CartIcon toggleCart={toggleCart}/>}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-300 z-40`}
      >
        <div className="p-4 flex flex-col h-full">
          <CartHeader toggleCart={toggleCart}/>

          <CartItemList/>

          <CartFooter/>
        </div>
      </div>
    </div>
  )
}
