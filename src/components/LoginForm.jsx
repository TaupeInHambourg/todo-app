import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'
import { useAuth } from '../hooks/authHooks'

function LoginForm () {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

  const { login } = useAuth()

  const handleChange = (event) => {
    setFormData({
      // '...' est un spread operator, il permet de recréer la data en écrasant les valeurs qui changent
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = (e) => {
    e.prevent.default()
    login(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5'
    >
      <Input
        type='email'
        label='Email'
        name='email'
        labelPlacement='inside'
        variant='flat'
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type='password'
        label='Password'
        name='password'
        labelPlacement='inside'
        variant='flat'
        value={formData.password}
        onChange={handleChange}
      />
      <Button
        type='submit'
        color='default'
      >
        Connexion
      </Button>
    </form>
  )
}

export default LoginForm
