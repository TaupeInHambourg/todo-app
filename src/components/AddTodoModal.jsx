import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/react'
import TodoForm from './TodoForm'
import { useTodos } from '../hooks/todosHooks'

function AddTodoModal ({ todoToEdit, isOpen, onOpen, onOpenChange }) {
  const { addTodo, updateTodo } = useTodos()
  const handleSubmit = (formData, id = null) => {
    if (id) {
      // modif
      updateTodo({
        ...formData,
        _id: id
      })
    } else {
      // ajout
      addTodo(formData)
    }
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
            <ModalHeader className='flex flex-col gap-1'>{todoToEdit ? 'Modifier' : 'Ajouter'} une tâche</ModalHeader>
            <ModalBody>
              <TodoForm onSubmit={handleSubmit} todoToEdit={todoToEdit} onClose={onClose} />
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export default AddTodoModal
