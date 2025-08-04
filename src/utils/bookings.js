// Gestión de reservas
export const bookingManager = {
  // Crear nueva reserva
  createBooking: (bookingData) => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]')
    
    const newBooking = {
      id: Date.now().toString(),
      ...bookingData,
      status: 'pending', // pending, confirmed, cancelled, completed
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    bookings.push(newBooking)
    localStorage.setItem('bookings', JSON.stringify(bookings))
    
    return newBooking
  },

  // Obtener todas las reservas
  getAllBookings: () => {
    return JSON.parse(localStorage.getItem('bookings') || '[]')
  },

  // Obtener reservas de un usuario
  getUserBookings: (userId) => {
    const bookings = bookingManager.getAllBookings()
    return bookings.filter(booking => booking.userId === userId)
  },

  // Actualizar estado de reserva
  updateBookingStatus: (bookingId, status) => {
    const bookings = bookingManager.getAllBookings()
    const bookingIndex = bookings.findIndex(b => b.id === bookingId)
    
    if (bookingIndex !== -1) {
      bookings[bookingIndex].status = status
      bookings[bookingIndex].updatedAt = new Date().toISOString()
      localStorage.setItem('bookings', JSON.stringify(bookings))
      return bookings[bookingIndex]
    }
    
    throw new Error('Reserva no encontrada')
  },

  // Eliminar reserva
  deleteBooking: (bookingId) => {
    const bookings = bookingManager.getAllBookings()
    const filteredBookings = bookings.filter(b => b.id !== bookingId)
    localStorage.setItem('bookings', JSON.stringify(filteredBookings))
  },

  // Obtener estadísticas
  getStats: () => {
    const bookings = bookingManager.getAllBookings()
    
    return {
      total: bookings.length,
      pending: bookings.filter(b => b.status === 'pending').length,
      confirmed: bookings.filter(b => b.status === 'confirmed').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length,
      completed: bookings.filter(b => b.status === 'completed').length
    }
  }
}

// Gestión de membresías
export const membershipManager = {
  // Crear nueva membresía
  createMembership: (membershipData) => {
    const memberships = JSON.parse(localStorage.getItem('memberships') || '[]')
    
    const newMembership = {
      id: Date.now().toString(),
      ...membershipData,
      status: 'pending', // pending, active, expired, cancelled
      startDate: new Date().toISOString(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString()
    }
    
    memberships.push(newMembership)
    localStorage.setItem('memberships', JSON.stringify(memberships))
    
    return newMembership
  },

  // Obtener todas las membresías
  getAllMemberships: () => {
    return JSON.parse(localStorage.getItem('memberships') || '[]')
  },

  // Obtener membresías de un usuario
  getUserMemberships: (userId) => {
    const memberships = membershipManager.getAllMemberships()
    return memberships.filter(membership => membership.userId === userId)
  },

  // Actualizar estado de membresía
  updateMembershipStatus: (membershipId, status) => {
    const memberships = membershipManager.getAllMemberships()
    const membershipIndex = memberships.findIndex(m => m.id === membershipId)
    
    if (membershipIndex !== -1) {
      memberships[membershipIndex].status = status
      memberships[membershipIndex].updatedAt = new Date().toISOString()
      localStorage.setItem('memberships', JSON.stringify(memberships))
      return memberships[membershipIndex]
    }
    
    throw new Error('Membresía no encontrada')
  },

  // Obtener estadísticas de membresías
  getStats: () => {
    const memberships = membershipManager.getAllMemberships()
    
    return {
      total: memberships.length,
      pending: memberships.filter(m => m.status === 'pending').length,
      active: memberships.filter(m => m.status === 'active').length,
      expired: memberships.filter(m => m.status === 'expired').length,
      cancelled: memberships.filter(m => m.status === 'cancelled').length
    }
  }
} 