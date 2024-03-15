import { useCallback, useEffect, useState } from 'react'
import { useBetween } from 'use-between'
import { apiLogin } from '../services/api'
import { toast } from 'react-toastify'

function useAuth () {
  const [authData, setAuthData] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState()

  // credentials = information d'authentification (email+mdp)
  const login = useCallback(async (credentials) => {
    try {
      setLoading(true)
      const response = await apiLogin(credentials)
      setAuthData(response)
      if (response && response.token && response._user) {
        toast.success('Vous êtes connecté !')
      }
      // window.localStorage.setItem('AUTH', JSON.stringify(response))
    } catch (error) {
      console.error(error)
      setError(error)
      setLoading(false)
    }
  }, [])

  const logout = useCallback(() => {
    toast.info('Vous êtes déconnecté !')
    setAuthData(null)
  }, [])

  useEffect(() => {
    const savedAuth = window.localStorage.getItem('AUTH')
    if (savedAuth) {
      setAuthData(JSON.parse(savedAuth))
    }
  }, [])

  useEffect(() => {
    if (authData) {
      window.localStorage.setItem('AUTH', JSON.stringify(authData))
    } else {
      window.localStorage.removeItem('AUTH')
    }
  }, [authData])

  return { login, loading, error, authData, logout }
}

const useAuthSharable = () => useBetween(useAuth)

export { useAuthSharable as useAuth }
