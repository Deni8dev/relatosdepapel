import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router'

export function RouteNotFoundPage() {

  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <div className="max-w-md bg-white p-6 rounded-lg shadow-lg text-center">
        <ExclamationTriangleIcon className="w-16 h-16 text-orange-500 mx-auto mb-4"/>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Page Not Found</h1>
        <p className="text-gray-500 mb-6">
          Sorry, the page you&#39;re looking for doesn&#39;t exist. It might have been removed or is temporarily
          unavailable.
        </p>
        <button
          onClick={() => void navigate('/shopping')}
          className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition duration-200"
        >
          Go to Shopping
        </button>
      </div>
    </div>
  )
}
