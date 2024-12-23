import { useCartStore } from '../stores'
import { useNavigate } from 'react-router'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'

interface CheckoutFormInputs {
  name: string
  email: string
  address: string
}

export function CheckoutForm() {

  const items = useCartStore(state => state.items)
  const clearCart = useCartStore(state => state.clear)

  const navigate = useNavigate()
  const { register, handleSubmit, formState: { errors } } = useForm<CheckoutFormInputs>()

  const onSubmit = (data: CheckoutFormInputs) => {
    console.log(data)
    toast.success(
      'Your order have been placed, please check your Email for more details.',
      { className: 'text-green-500' }
    )
    setTimeout(() => {
      clearCart()
      void navigate('/shopping')
    }, 2000)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            {...register('name', { required: true })}
          />
          {errors.name?.type === 'required' && <small className="text-red-500">This field is required</small>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            {...register('email', { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
          />
          {errors.email?.type === 'required' && <small className="text-red-500">This field is required</small>}
          {errors.email?.type === 'pattern' && <small className="text-red-500">Enter a valid Email</small>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="address">
            Address
          </label>
          <input
            id="address"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
            {...register('address', { required: true })}
          />
          {errors.address?.type === 'required' &&
            <small className="text-red-500">This field is required</small>}
        </div>
      </div>
      <button
        type="submit"
        className="w-full mt-6 bg-orange-500 text-white py-2 rounded-lg hover:bg-orange-600 transition duration-200 disabled:bg-gray-300"
        disabled={items.length <= 0}
      >
        Place Order
      </button>
      <button
        type="button"
        onClick={() => {
          clearCart()
          void navigate('/shopping')
        }}
        className="w-full mt-2 bg-gray-200 text-gray-800 py-2 rounded-lg hover:bg-gray-300 transition duration-200"
      >
        Cancel Order
      </button>
    </form>
  )
}
