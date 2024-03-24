import { Button } from '@nextui-org/react'

function SignupButton ({ openSignupModal }) {
  return (
    <>
      <Button
        color='primary'
        variant='bordered'
        onPress={() => openSignupModal()}
      >
        Sign Up
      </Button>
    </>
  )
}

export default SignupButton
