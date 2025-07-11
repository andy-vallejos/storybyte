import { Navigate } from 'react-router-dom'
import { useAuth } from '@/context/AuthProvider'

export function ProtectedRoute({ children }) {
	const { user } = useAuth()

	if (!user) {
		return <Navigate to='/login' replace />
	}

	return children
}
