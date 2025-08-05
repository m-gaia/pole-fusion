// Gestión de reservas de clases gratuitas
export const freeBookingManager = {
  // Obtener todas las reservas gratuitas
  getAllFreeBookings: () => {
    try {
      return JSON.parse(localStorage.getItem('freeBookings') || '[]')
    } catch (error) {
      console.error('Error al cargar reservas gratuitas:', error)
      return []
    }
  },

  // Crear nueva reserva gratuita
  createFreeBooking: (bookingData) => {
    try {
      const bookings = freeBookingManager.getAllFreeBookings()
      const newBooking = {
        id: Date.now().toString(),
        ...bookingData,
        status: 'pending', // pending, confirmed, cancelled
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString()
      }
      
      bookings.push(newBooking)
      localStorage.setItem('freeBookings', JSON.stringify(bookings))
      
      console.log('Reserva gratuita creada:', newBooking)
      return newBooking
    } catch (error) {
      console.error('Error al crear reserva gratuita:', error)
      throw new Error('Error al crear la reserva')
    }
  },

  // Actualizar estado de reserva gratuita
  updateFreeBookingStatus: (bookingId, status) => {
    try {
      const bookings = freeBookingManager.getAllFreeBookings()
      const bookingIndex = bookings.findIndex(b => b.id === bookingId)
      
      if (bookingIndex === -1) {
        throw new Error('Reserva no encontrada')
      }
      
      bookings[bookingIndex].status = status
      bookings[bookingIndex].updatedAt = new Date().toISOString()
      
      localStorage.setItem('freeBookings', JSON.stringify(bookings))
      
      console.log(`Reserva gratuita ${bookingId} actualizada a estado: ${status}`)
      return bookings[bookingIndex]
    } catch (error) {
      console.error('Error al actualizar reserva gratuita:', error)
      throw error
    }
  },

  // Eliminar reserva gratuita
  deleteFreeBooking: (bookingId) => {
    try {
      const bookings = freeBookingManager.getAllFreeBookings()
      const filteredBookings = bookings.filter(b => b.id !== bookingId)
      
      localStorage.setItem('freeBookings', JSON.stringify(filteredBookings))
      
      console.log(`Reserva gratuita ${bookingId} eliminada`)
      return true
    } catch (error) {
      console.error('Error al eliminar reserva gratuita:', error)
      throw error
    }
  },

  // Obtener estadísticas de reservas gratuitas
  getFreeBookingsStats: () => {
    const bookings = freeBookingManager.getAllFreeBookings()
    
    return {
      total: bookings.length,
      pending: bookings.filter(b => b.status === 'pending').length,
      confirmed: bookings.filter(b => b.status === 'confirmed').length,
      cancelled: bookings.filter(b => b.status === 'cancelled').length
    }
  },

  // Limpiar datos de demo
  clearDemoData: () => {
    localStorage.removeItem('freeBookings')
  }
} 