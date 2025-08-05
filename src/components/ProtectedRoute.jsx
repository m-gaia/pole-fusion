import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../utils/auth'

const ProtectedRoute = ({ children, requiredRole = null, redirectTo = '/auth' }) => {
  const location = useLocation()
  const currentUser = auth.getCurrentUser()

  console.log('ProtectedRoute - User:', currentUser?.email, 'Role:', currentUser?.role, 'Required:', requiredRole)

  // Si no hay usuario autenticado, redirigir al login
  if (!currentUser) {
    console.log('No user authenticated, redirecting to:', redirectTo)
    return <Navigate to={redirectTo} state={{ from: location }} replace />
  }

  // Si se requiere un rol específico y el usuario no lo tiene
  if (requiredRole && currentUser.role !== requiredRole) {
    console.log('User role mismatch. User role:', currentUser.role, 'Required:', requiredRole)
    // Redirigir según el rol del usuario
    if (currentUser.role === 'admin') {
      return <Navigate to="/admin" replace />
    } else if (currentUser.role === 'student') {
      return <Navigate to="/estudiante" replace />
    } else {
      return <Navigate to="/reservas" replace />
    }
  }

  console.log('Access granted for role:', currentUser.role)
  return children
}

export default ProtectedRoute 