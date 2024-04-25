import { Navigate, useLocation } from 'react-router-dom'

export default function Landing() {
  const location = useLocation()

  // Redirect to swap page
  return <Navigate to={{ ...location, pathname: '/swap' }} replace />
}
