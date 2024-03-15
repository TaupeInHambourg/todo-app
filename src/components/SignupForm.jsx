import { Button, Input } from '@nextui-org/react'
import { useState } from 'react'

function SignupForm ({ onSubmit, onClose, toSignup }) {
  const [formData, setFormData] = useState({
    email: toSignup?.email || 'email@test.fr',
    password: toSignup?.password || 'password vide'
  })

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (onSubmit) onSubmit(formData)
    onClose()
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col gap-5'
    >
      <Input
        type='email'
        label='email'
        name='email'
        labelPlacement='inside'
        variant='flat'
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        type='password'
        label='mot de passe'
        name='password'
        labelPlacement='inside'
        variant='flat'
        value={formData.password}
        onChange={handleChange}
      />
      <Button
        type='submit'
      >
        S'incrire
      </Button>
    </form>
  )
}

export default SignupForm
