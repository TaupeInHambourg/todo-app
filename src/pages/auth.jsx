import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuth } from '../hooks/authHooks'
import SignupButton from '../components/buttons/Signup'
import LoginButton from '../components/buttons/Login'

function Auth ({ openSignupModal }) {
  const navigate = useNavigate()
  const { authData } = useAuth()

  useEffect(() => {
    if (authData?.token && authData?._user) {
      navigate('/')
    }
  }, [authData])

  return (
    <>
      <h1>Bienvenue !</h1>
      <SignupButton openSignupModal={openSignupModal} />
      <LoginButton />

    </>
  )
}

export default Auth
