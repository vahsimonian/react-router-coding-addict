import { Navigate } from 'react-router-dom'

import React from 'react'

function ProtectedRoute({ children, user }) {
  if (!user) {
    return <Navigate to='/' />
  }
  return <div>{children}</div>
}

export default ProtectedRoute
