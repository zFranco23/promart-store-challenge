import { useMemo } from 'react'
import { useAppSelector } from '../../../hooks/store'

export const useAuth = () => {
  const isLoggedIn = useAppSelector((state) => state.auth.isLoggedIn)
  const isAuthenticating = useAppSelector((state) => state.auth.isAuthenticating)
  return useMemo(() => ({ isLoggedIn, isAuthenticating }), [isLoggedIn, isAuthenticating])
}
