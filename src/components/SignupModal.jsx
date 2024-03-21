import { Modal, ModalBody, ModalContent, ModalHeader } from '@nextui-org/react'
import SignupForm from './SignupForm'
import { useAuth } from '../hooks/authHooks'

function SignupModal ({ isOpen, onOpenChange, toSignup }) {
  const { signup } = useAuth()

  const handleSubmit = (formData) => {
    signup(formData)
  }

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement='center'
      size='4xl'
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className='flex flex-col gap-1'>{toSignup ? 'Je m\'inscrit !' : 'Se connecter'}</ModalHeader>
            <ModalBody>
              <SignupForm toSignup={toSignup} onSubmit={handleSubmit} onClose={onClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>

  )
}

export default SignupModal
