import { Button, useDisclosure } from '@nextui-org/react'
import SignupModal from '../SignupModal'

function LoginButton () {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        color='primary'
        variant='solid'
        onPress={onOpen}
      >
        Login
      </Button>
      <SignupModal
        isOpen={isOpen}
        onOpen={onOpen}
        onOpenChange={onOpenChange}
      />
    </>
  )
}

export default LoginButton
