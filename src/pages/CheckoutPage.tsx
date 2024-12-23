import { CreditCardIcon, ShoppingCartIcon } from '@heroicons/react/24/outline'
import { CartItemList } from '../components/CartItemList.tsx'
import { CartTotalPrice } from '../components/CartTotalPrice.tsx'
import { CheckoutForm } from '../components/CheckoutForm.tsx'

export function CheckoutPage() {

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg">
        <div className="flex flex-col md:flex-row">

          <div className="w-full md:w-1/2 p-6 border-b md:border-b-0 md:border-r">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center">
              <ShoppingCartIcon className="w-6 h-6 mr-2"/>
              Cart Summary
            </h2>
            <div>
              <CartItemList/>
              <CartTotalPrice/>
            </div>
          </div>

          <div className="w-full md:w-1/2 p-6">
            <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center">
              <CreditCardIcon className="w-6 h-6 mr-2"/>
              Checkout
            </h2>
            <CheckoutForm/>
          </div>
        </div>
      </div>
    </div>
  )
}
