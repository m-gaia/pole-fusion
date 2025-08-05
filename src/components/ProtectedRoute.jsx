import { Navigate, useLocation } from 'react-router-dom'
import { auth } from '../utils/auth'

const ProtectedRoute = ({ children, requiredRole = null, redirectTo = '/auth' }) => {
  const location = useLocation()
  const currentUser = auth.getCurrentUser()

  // Si no hay usuario autenticado, redirigir al login
  if (!currentUser) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />
  }

  // Si se requiere un rol específico y el usuario no lo tiene
  if (requiredRole && currentUser.role !== requiredRole) {
    // Redirigir según el rol del usuario
    if (currentUser.role === 'admin') {
      return <Navigate to="/admin" replace />
    } else {
      return <Navigate to="/reservas" replace />
    }
  }

  return children
}

export default ProtectedRoute 